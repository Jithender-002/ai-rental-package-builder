import { Camera } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-fuchsia-500/20 p-2 rounded-lg">
            <Camera className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            AI Rental <span className="gradient-text">Package Builder</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-sm text-gray-400 font-medium">
          <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

