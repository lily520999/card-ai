import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from '@/contexts/LocaleContext';

interface Card {
  imageUrl: string;
  style: string;
  prompt: string;
}

interface CardPreviewProps {
  card: Card;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLocale();

  const handleExpandClick = () => {
    setIsExpanded(true);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  // 展示卡片预览，点击后放大
  return (
    <>
      <div 
        className="relative h-60 w-full cursor-pointer" 
        onClick={handleExpandClick}
      >
        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 z-10 rounded-bl-md">
          {card.style}
        </div>
        
        {card.imageUrl.startsWith('/samples') ? (
          <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-gray-500">
            <div className="text-lg mb-2">{t('cardPreview.sampleImage')}</div>
            <div className="text-sm">{card.prompt}</div>
          </div>
        ) : (
          <Image
            src={card.imageUrl}
            alt={`${card.style} - ${card.prompt}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition flex items-center justify-center">
          <div className="p-2 bg-white bg-opacity-0 hover:bg-opacity-90 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 放大模态框 */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{card.style}</h3>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 flex-grow overflow-auto">
              <div className="relative w-full" style={{ height: '60vh' }}>
                {card.imageUrl.startsWith('/samples') ? (
                  <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-gray-600">
                    <div className="text-2xl font-bold mb-4">{t('cardPreview.sampleImage')}</div>
                    <div className="text-lg max-w-lg text-center">{card.prompt}</div>
                  </div>
                ) : (
                  <Image
                    src={card.imageUrl}
                    alt={`${card.style} - ${card.prompt}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium">{t('cardPreview.prompt')}:</h4>
                <p className="text-gray-700">{card.prompt}</p>
              </div>
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={handleCloseModal}
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 mr-2"
              >
                {t('cardPreview.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPreview; 