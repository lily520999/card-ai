import React, { useState, useRef } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import Image from 'next/image';

interface ImageUploaderProps {
  onImageSelect?: (imageData: string) => void;
  onImageUpload?: (imageData: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, onImageUpload }) => {
  const { t } = useLocale();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const processFile = (file: File) => {
    // 检查文件类型
    if (!file.type.match('image.*')) {
      alert(t('imageUploader.invalidFileType'));
      return;
    }

    // 检查文件大小 (限制为 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert(t('imageUploader.fileTooLarge'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewImage(result);
      if (onImageSelect) onImageSelect(result);
      if (onImageUpload) onImageUpload(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{t('imageUploader.title')}</h3>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          isDragging ? 'border-primary bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
        
        {previewImage ? (
          <div className="relative mx-auto w-full max-w-xs h-40 mb-3">
            <Image
              src={previewImage}
              alt={t('imageUploader.uploadedImage')}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded"
            />
          </div>
        ) : (
          <div className="text-gray-500 mb-3">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-1">{t('imageUploader.dragAndDrop')}</p>
          </div>
        )}
        
        <div className={previewImage ? "mt-4" : ""}>
          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={handleBrowseClick}
          >
            {previewImage ? t('imageUploader.changeImage') : t('imageUploader.browseFiles')}
          </button>
          
          {previewImage && (
            <button
              type="button"
              className="btn bg-red-100 text-red-700 hover:bg-red-200"
              onClick={() => {
                setPreviewImage(null);
                if (onImageSelect) onImageSelect('');
                if (onImageUpload) onImageUpload('');
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
              }}
            >
              {t('imageUploader.removeImage')}
            </button>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          {t('imageUploader.supportedFormats')}
        </p>
      </div>
    </div>
  );
};

export default ImageUploader; 