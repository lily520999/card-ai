import React, { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-10 ${className}`}>
      <h2 className="text-2xl font-bold mb-8">{t('faq.title')}</h2>
      
      <div className="space-y-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left font-medium flex justify-between items-center bg-white"
              onClick={() => toggleAccordion(index)}
            >
              <span>{t(`faq.question${index + 1}`)}</span>
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{t(`faq.answer${index + 1}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 