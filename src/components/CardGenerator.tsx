import React, { useState } from 'react';
import { generateCards } from '@/services/aiService';
import { useLocale } from '@/contexts/LocaleContext';

interface CardGeneratorProps {
  onGenerate?: (cards: Array<{imageUrl: string; style: string; prompt: string}>) => void;
}

const CardGenerator: React.FC<CardGeneratorProps> = ({ onGenerate }) => {
  const { t } = useLocale();
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  // English examples
  const examples = [
    'Company Holiday Card',
    'Modern Minimalist Thank You Card',
    'Birthday Party Invitation',
    'Work Anniversary Card',
    'Colleague Birthday Card',
    'Customer Appreciation Card'
  ];

  // Style list with English labels
  const styles = [
    { key: 'modern', label: 'Modern Minimalist' },
    { key: 'elegant', label: 'Elegant Vintage' },
    { key: 'natural', label: 'Natural Organic' },
    { key: 'business', label: 'Professional Business' }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError('');
    
    try {
      const result = await generateCards({
        prompt: prompt,
        style: selectedStyle,
        count: 4
      });
      
      if (onGenerate) {
        onGenerate(result.cards);
      }
    } catch (err) {
      console.error('Error generating cards:', err);
      setError(t('generator.error'));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="text-center">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary"
            rows={4}
            placeholder={t('generator.placeholder')}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          
          <div className="mt-4 mb-4">
            <p className="text-left mb-2 font-medium">{t('generator.styleSelect')}</p>
            <div className="flex flex-wrap gap-2">
              {styles.map((style, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedStyle === style.key
                      ? 'bg-primary text-white' 
                      : 'bg-white border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedStyle(style.key)}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            className="mt-4 btn btn-primary text-lg px-8 py-3"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? t('generator.button.generating') : t('generator.button.generate')}
          </button>
          
          {error && (
            <div className="mt-4 text-red-500 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-gray-500">
        <p className="mb-2">{t('generator.examples')}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setPrompt(example)}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGenerator; 