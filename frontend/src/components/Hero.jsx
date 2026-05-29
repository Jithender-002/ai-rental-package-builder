import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Background glowing blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-gray-300">Powered by Gemini AI</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Build the Perfect <br className="hidden sm:block" />
          <span className="gradient-text">Camera Rental Kit</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Enter your shoot requirements and let our advanced GenAI system recommend the optimal camera, lenses, and lighting tailored exactly to your budget.
        </p>
      </div>
    </div>
  );
}

