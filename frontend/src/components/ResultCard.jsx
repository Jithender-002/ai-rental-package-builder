import { Copy, Camera, Video, Lightbulb, Mic, Box, CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ResultCard({ result }) {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(result.whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppLink = () => {
    return `https://wa.me/?text=${encodeURIComponent(result.whatsappMessage)}`;
  };

  const items = [
    { label: 'Camera', value: result.camera, icon: Camera },
    { label: 'Lens', value: result.lens, icon: Video },
    { label: 'Lights', value: result.lights, icon: Lightbulb },
    { label: 'Microphone', value: result.microphone, icon: Mic },
    { label: 'Tripod/Support', value: result.tripod, icon: Box },
  ];

  return (
    <div className="glass-card max-w-4xl mx-auto w-full mt-12 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 border-b border-gray-800 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Recommended Package</h2>
            {result.isDemo && (
              <span className="bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 text-xs px-2.5 py-1 rounded-full font-medium tracking-wide">
                Prototype Demo Response
              </span>
            )}
          </div>
          <p className="text-cyan-400 font-medium mt-1">Est. Total: {result.estimatedPrice}</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Msg'}
          </button>
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-600/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800/50">
              <div className="p-3 rounded-lg bg-gray-800/80 text-cyan-400">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">{item.label}</p>
                <p className="text-gray-200 font-medium">{item.value || 'Not required for this setup'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-fuchsia-500/5 border border-fuchsia-500/20 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-fuchsia-500 mb-2 uppercase tracking-wider">AI Reasoning</h3>
          <p className="text-gray-300 leading-relaxed text-sm">{result.reason}</p>
        </div>

        {result.isDemo && (
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 italic">
              Note: This prototype supports Gemini API integration. When a valid API key is configured, responses are generated dynamically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

