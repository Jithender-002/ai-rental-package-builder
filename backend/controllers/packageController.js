import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

export const generatePackage = async (req, res) => {
  try {
    const { shootType, budget, duration, requirement } = req.body;

    console.log('--- New Request Received ---');
    console.log('Request Body:', req.body);

    if (!shootType || !budget || !duration) {
      return res.status(400).json({ error: 'Please provide shoot type, budget, and duration.' });
    }

    const prompt = `
      You are an expert camera rental assistant for a professional equipment rental business.

      Based on the customer details, suggest the best complete rental package.

      Customer Details:
      Shoot Type: ${shootType}
      Budget: ₹${budget}
      Duration: ${duration}
      Special Requirement: ${requirement || 'None'}

      Create a practical rental package within the customer budget.

      Return the answer in this exact JSON format:
      {
        "camera": "",
        "lens": "",
        "lights": "",
        "microphone": "",
        "tripod": "",
        "estimatedPrice": "",
        "reason": "",
        "whatsappMessage": ""
      }

      Rules:
      - Recommend equipment suitable for the shoot type.
      - Keep total price within or near the budget.
      - Use Indian Rupees.
      - Make the reason professional and clear.
      - WhatsApp message should be ready to send to the customer.
      - Do not return extra text outside JSON.
    `;

    // Use gemini-1.5-flash for speed and lower cost
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Call Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const resultText = response.text();
    
    // Clean up the result text, in case model added markdown code blocks like \`\`\`json
    const cleanedText = resultText.replace(/```json/g, '').replace(/```/g, '').trim();

    // Parse the JSON result
    let jsonResult;
    try {
      jsonResult = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', resultText);
      return res.status(500).json({ error: 'Failed to generate a valid package format. Please try again.' });
    }

    console.log('Successfully generated package.');
    res.json(jsonResult);
  } catch (error) {
    let errorMessage = '';
    if (error.message) {
      errorMessage = error.message;
    }
    
    // Demo Fallback Mode
    if (errorMessage.includes('API_KEY_INVALID') || errorMessage.includes('API key not valid') || process.env.AI_API_KEY === 'your_api_key_here' || !process.env.AI_API_KEY) {
      console.log('Demo mode active: Gemini API key missing or invalid.');
      
      const demoResponse = {
        "camera": "Sony A7S III",
        "lens": "24-70mm f/2.8 G Master",
        "lights": "2x Godox SL-60W with Softboxes",
        "microphone": "Rode Wireless GO II",
        "tripod": "Manfrotto Fluid Head Tripod",
        "estimatedPrice": `₹${req.body.budget || '15000'} for ${req.body.duration || '1 Day'}`,
        "reason": `This package is optimized for a ${req.body.shootType || 'shoot'} by balancing camera quality, low-light performance, stable video, and clear audio within the selected budget.`,
        "whatsappMessage": `Hello! Based on your ${req.body.shootType || 'shoot'} requirement and ₹${req.body.budget || '15000'} budget, we recommend a Sony A7S III setup. Estimated rental cost is within your budget for ${req.body.duration || '1 Day'}.`,
        "isDemo": true
      };
      
      return res.json(demoResponse);
    }

    console.error('==========================================');
    console.error('Error generating package:');
    console.error('Error Details:', error);
    console.error('==========================================');
    
    res.status(500).json({ error: 'An error occurred while generating the package.' });
  }
};
