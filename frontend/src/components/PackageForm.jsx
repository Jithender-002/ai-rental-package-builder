import { useState } from 'react';
import { Loader2, Settings, IndianRupee, Calendar, FileText } from 'lucide-react';

export default function PackageForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    shootType: 'Wedding',
    budget: '',
    duration: '1 Day',
    requirement: ''
  });

  const shootTypes = [
    'Wedding', 'YouTube Video', 'Short Film', 'Event', 'Product Shoot', 'Interview', 'Music Video'
  ];
  
  const durations = ['1 Day', '2 Days', '3 Days', '1 Week'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto w-full relative z-10">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
        <Settings className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl font-semibold">Requirement Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shoot Type */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Shoot Type</label>
            <select 
              name="shootType" 
              value={formData.shootType}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors appearance-none"
            >
              {shootTypes.map(type => (
                <option key={type} value={type} className="bg-gray-900">{type}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Budget (₹)</label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="number" 
                name="budget"
                required
                min="500"
                placeholder="e.g. 15000"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Rental Duration</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <select 
                name="duration" 
                value={formData.duration}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors appearance-none"
              >
                {durations.map(dur => (
                  <option key={dur} value={dur} className="bg-gray-900">{dur}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Special Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Special Requirements (Optional)</label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <textarea 
              name="requirement"
              rows="3"
              placeholder="E.g., Need a gimbal, specific lens, low light setup..."
              value={formData.requirement}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full gradient-btn flex justify-center items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating AI Package...
            </>
          ) : (
            'Generate AI Package'
          )}
        </button>
      </form>
    </div>
  );
}

