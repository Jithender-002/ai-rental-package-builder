import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import packageRoutes from './routes/packageRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', packageRoutes);

// Basic health check
app.get('/', (req, res) => {
  res.send('AI Rental Package Builder API is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
