import { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageForm from './components/PackageForm';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/generate-package`, formData);
      setResult(response.data);
    } catch (err) {
      console.error('Error generating package:', err);
      setError(err.response?.data?.error || 'Failed to generate package. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none -z-20"></div>
      
      <Navbar />
      
      <main className="flex-grow pb-16 px-4">
        <Hero />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <PackageForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {error && (
            <div className="max-w-2xl mx-auto mt-6 bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-center">
              {error}
            </div>
          )}

          {result && !isLoading && (
            <div id="result-section" className="mt-8">
              <ResultCard result={result} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

