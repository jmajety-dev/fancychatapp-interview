'use client';

import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  description: string;
}

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
  models: Model[];
}

export default function ModelSelector({ selectedModel, onModelChange, models }: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedModelData = models.find(model => model.id === selectedModel);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <div className="text-left">
          <div className="font-medium text-sm">{selectedModelData?.name}</div>
          <div className="text-xs text-gray-500">{selectedModelData?.description}</div>
        </div>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                onModelChange(model.id);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
            >
              <div>
                <div className="font-medium text-sm">{model.name}</div>
                <div className="text-xs text-gray-500">{model.description}</div>
              </div>
              {selectedModel === model.id && (
                <Check size={16} className="text-primary-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
