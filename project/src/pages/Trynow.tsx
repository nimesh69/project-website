import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { ImageUploader } from '../components/ImageEnhancer/ImageUploader';
import { ImageComparison } from '../components/ImageEnhancer/ImageComparison';
import { Sparkles } from 'lucide-react';

export function Trynow() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageSelect = async (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      setOriginalImage(imageData);
      processImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (imageData: string) => {
    setIsProcessing(true);
    // Simulate image processing - In a real app, you would call your AI model API here
    setTimeout(() => {
      setEnhancedImage(imageData);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-200 text-gray-950 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Facial Restoration & Enhancement
          </div>
          <h1 className="text-5xl font-serif mb-4">
          Rediscover Clarity & Beauty in Every Photo ✨
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our advanced AI technology revitalizes and restores facial images, bringing out the best in every detail. Upload your photo and witness enhanced resolution, sharper details, and clearer memories.
                let your face shine with the brilliance it deserves.
                                Start your journey to flawless image enhancement today!
          </p>
        </div>

        {!originalImage ? (
          <ImageUploader onImageSelect={handleImageSelect} />
        ) : (
          <div className="space-y-8">
            {isProcessing ? (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 mx-auto animate-spin text-orange-500" />
                <p className="mt-4 text-lg text-gray-700">Enhancing your image please wait patiently...</p>
              </div>
            ) : (
              enhancedImage && (
                <ImageComparison
                  originalImage={originalImage}
                  enhancedImage={enhancedImage}
                />
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}