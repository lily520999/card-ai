import React from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import CardPreview from './CardPreview';

interface Card {
  imageUrl: string;
  style: string;
  prompt: string;
}

interface CardGridProps {
  cards: Card[];
  onUseTemplate?: (card: Card) => void;
  onDownload?: (card: Card) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, onUseTemplate, onDownload }) => {
  const { t } = useLocale();
  
  if (cards.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">{t('cardGrid.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <CardPreview card={card} />
            <div className="p-4">
              <button 
                className="btn btn-primary w-full mb-2"
                onClick={() => onUseTemplate && onUseTemplate(card)}
              >
                {t('cardGrid.button.useTemplate')}
              </button>
              <button 
                className="btn bg-white border border-gray-300 w-full hover:bg-gray-100"
                onClick={() => onDownload && onDownload(card)}
              >
                {t('cardGrid.button.download')}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-secondary">
          {t('cardGrid.button.regenerate')}
        </button>
      </div>
    </section>
  );
};

export default CardGrid; 