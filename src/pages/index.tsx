import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardGenerator from '@/components/CardGenerator';
import CardGrid from '@/components/CardGrid';
import HowToUse from '@/components/HowToUse';
import BusinessFeatures from '@/components/BusinessFeatures';
import FAQ from '@/components/FAQ';
import { useLocale } from '@/contexts/LocaleContext';
import ImageUploader from '@/components/ImageUploader';
import Image from 'next/image';
import { downloadCardAsImage, saveCardAsJSON } from '@/utils/downloadCard';
import Link from 'next/link';

interface Card {
  imageUrl: string;
  style: string;
  prompt: string;
}

interface CardConfig {
  text: string;
  textColor: string;
  fontSize: number;
  backgroundImage: string;
  originalCard: Card;
}

// Define TextAlign type to fix the type error
type TextAlign = 'left' | 'center' | 'right';

export default function Home() {
  const { t } = useLocale();
  const [generatedCards, setGeneratedCards] = useState<Card[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [userUploadedImage, setUserUploadedImage] = useState<string>('');
  const [cardText, setCardText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [fontSize, setFontSize] = useState<number>(24);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [textAlign, setTextAlign] = useState<TextAlign>('center');
  
  const cardPreviewRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (cards: Card[]) => {
    setGeneratedCards(cards);
    setIsEditMode(false);
  };

  const handleUseTemplate = (card: Card) => {
    // 初始化编辑模式状态
    setSelectedCard(card);
    setIsEditMode(true);
    setCardText(card.prompt); // 使用提示词作为初始文本
    setUserUploadedImage(''); // 清空用户上传的图片
    setTextColor('#000000'); // 重置文本颜色
    setFontSize(24); // 重置字体大小
    setTextAlign('center'); // 重置文本对齐方式
  };

  const handleDownload = async (card: Card) => {
    // 创建卡片预览元素
    const previewElement = document.createElement('div');
    previewElement.style.width = '512px';
    previewElement.style.height = '512px';
    previewElement.style.position = 'absolute';
    previewElement.style.left = '-9999px';
    previewElement.style.backgroundColor = '#f3f4f6';
    previewElement.id = 'temp-card-preview';
    
    // 添加样式文本
    const styleElement = document.createElement('div');
    styleElement.style.position = 'absolute';
    styleElement.style.top = '10px';
    styleElement.style.right = '10px';
    styleElement.style.backgroundColor = '#4F46E5';
    styleElement.style.color = 'white';
    styleElement.style.padding = '2px 8px';
    styleElement.style.borderRadius = '0 0 0 4px';
    styleElement.style.fontSize = '12px';
    styleElement.textContent = card.style;
    previewElement.appendChild(styleElement);
    
    // 添加图片或占位符
    if (card.imageUrl.startsWith('/samples')) {
      const placeholderDiv = document.createElement('div');
      placeholderDiv.style.width = '100%';
      placeholderDiv.style.height = '100%';
      placeholderDiv.style.display = 'flex';
      placeholderDiv.style.flexDirection = 'column';
      placeholderDiv.style.alignItems = 'center';
      placeholderDiv.style.justifyContent = 'center';
      placeholderDiv.style.backgroundColor = '#f3f4f6';
      placeholderDiv.style.color = '#6B7280';
      
      const titleSpan = document.createElement('div');
      titleSpan.style.fontSize = '18px';
      titleSpan.style.marginBottom = '8px';
      titleSpan.textContent = 'Sample Card';
      
      const promptSpan = document.createElement('div');
      promptSpan.style.fontSize = '14px';
      promptSpan.style.textAlign = 'center';
      promptSpan.style.padding = '0 20px';
      promptSpan.textContent = card.prompt;
      
      placeholderDiv.appendChild(titleSpan);
      placeholderDiv.appendChild(promptSpan);
      previewElement.appendChild(placeholderDiv);
    } else {
      const img = document.createElement('img');
      img.src = card.imageUrl;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      previewElement.appendChild(img);
    }
    
    // 添加到DOM，渲染后截图，然后移除
    document.body.appendChild(previewElement);
    
    try {
      await downloadCardAsImage('temp-card-preview', `card-${card.style}-${Date.now()}`);
    } finally {
      // 清理临时元素
      if (document.getElementById('temp-card-preview')) {
        document.body.removeChild(previewElement);
      }
    }
  };

  const handleImageUpload = (imageData: string) => {
    setUserUploadedImage(imageData);
  };

  const getCardBackgroundStyle = () => {
    if (userUploadedImage) {
      return {
        backgroundImage: `url(${userUploadedImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    
    return { backgroundColor: '#f3f4f6' }; // 默认背景色
  };
  
  const handleCardDownload = async () => {
    if (!cardPreviewRef.current || !selectedCard) return;
    
    try {
      setIsDownloading(true);
      
      // 使用html2canvas下载为图片
      await downloadCardAsImage(
        'card-preview', 
        `${selectedCard.style}-card-${Date.now()}`
      );
      
    } catch (error) {
      console.error('Download failed:', error);
      alert(t('editor.downloadError'));
    } finally {
      setIsDownloading(false);
    }
  };
  
  const handleCardSave = () => {
    if (!selectedCard) return;
    
    try {
      setIsSaving(true);
      
      const cardConfig: CardConfig = {
        text: cardText,
        textColor: textColor,
        fontSize: fontSize,
        backgroundImage: userUploadedImage,
        originalCard: selectedCard
      };
      
      saveCardAsJSON(cardConfig, `card-config-${Date.now()}`);
      
      alert(t('editor.saveSuccess'));
    } catch (error) {
      console.error('Save failed:', error);
      alert(t('editor.saveError'));
    } finally {
      setIsSaving(false);
    }
  };

  // 将文本内容中的换行符转换为<br>标签
  const renderCardText = () => {
    if (!cardText) return null;
    
    // 将文本按换行符分割成数组，然后用<br>标签连接起来
    return cardText.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('app.name')} - {t('app.tagline')}</title>
        <meta name="description" content={t('app.description')} />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {!isEditMode ? (
          <>
            <CardGenerator onGenerate={handleGenerate} />
            
            {generatedCards.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{t('cards.generated')}</h2>
                <CardGrid 
                  cards={generatedCards} 
                  onUseTemplate={handleUseTemplate}
                  onDownload={handleDownload}
                />
              </div>
            )}
            
            <HowToUse className="mt-12" />
            
            <BusinessFeatures className="mt-12" />
            
            <FAQ className="mt-12" />
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{t('editor.title')}</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('editor.cardText')}
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                      value={cardText}
                      onChange={(e) => setCardText(e.target.value)}
                      placeholder={t('editor.textPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('editor.textColor')}
                    </label>
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="h-10 w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('editor.fontSize')} ({fontSize}px)
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="48"
                      value={fontSize}
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('editor.textAlign')}
                    </label>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setTextAlign('left')}
                        className={`px-4 py-2 border rounded-md ${
                          textAlign === 'left' 
                            ? 'bg-primary text-white' 
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        {t('editor.alignLeft')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextAlign('center')}
                        className={`px-4 py-2 border rounded-md ${
                          textAlign === 'center' 
                            ? 'bg-primary text-white' 
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        {t('editor.alignCenter')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextAlign('right')}
                        className={`px-4 py-2 border rounded-md ${
                          textAlign === 'right' 
                            ? 'bg-primary text-white' 
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        {t('editor.alignRight')}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('editor.uploadImage')}
                    </label>
                    <ImageUploader onImageUpload={handleImageUpload} />
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCardDownload}
                      disabled={isDownloading}
                      className="btn btn-primary"
                    >
                      {isDownloading ? t('editor.downloading') : t('editor.download')}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleCardSave}
                      disabled={isSaving}
                      className="btn btn-secondary"
                    >
                      {isSaving ? t('editor.saving') : t('editor.saveConfig')}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setIsEditMode(false)}
                      className="btn btn-outline"
                    >
                      {t('editor.cancel')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{t('editor.preview')}</h2>
                <div
                  id="card-preview"
                  ref={cardPreviewRef}
                  className="w-full aspect-square relative overflow-hidden rounded-lg"
                  style={getCardBackgroundStyle()}
                >
                  {selectedCard && !selectedCard.imageUrl.startsWith('/samples') && !userUploadedImage && (
                    <img 
                      src={selectedCard.imageUrl} 
                      alt="Card background" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  <div 
                    className="absolute inset-0 flex items-center justify-center p-6" 
                    style={{ textAlign }}
                  >
                    <p style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      {renderCardText()}
                    </p>
                  </div>
                  
                  {selectedCard && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                      {selectedCard.style}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 