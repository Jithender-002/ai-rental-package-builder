export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-20 py-8 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} AI Rental Package Builder. All rights reserved.</p>
      <p className="mt-1">Powered by Gemini API</p>
    </footer>
  );
}

