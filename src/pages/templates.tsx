import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';
import Image from 'next/image';

// Sample template categories
const templateCategories = [
  { id: 'business', name: 'Business', count: 12 },
  { id: 'birthday', name: 'Birthday', count: 24 },
  { id: 'holiday', name: 'Holiday', count: 18 },
  { id: 'wedding', name: 'Wedding', count: 15 },
  { id: 'thank-you', name: 'Thank You', count: 20 },
  { id: 'invitation', name: 'Invitation', count: 22 }
];

// Sample templates
const sampleTemplates = Array(12).fill(0).map((_, index) => ({
  id: `template-${index + 1}`,
  title: `Template ${index + 1}`,
  category: templateCategories[index % templateCategories.length].id,
  imageUrl: `https://picsum.photos/seed/template${index + 1}/400/300`
}));

export default function Templates() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredTemplates = activeCategory === 'all' 
    ? sampleTemplates 
    : sampleTemplates.filter(template => template.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Browse Templates - AI Card Generator</title>
        <meta name="description" content="Browse our collection of AI-generated card templates for any occasion." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Browse Templates</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Explore our collection of professionally designed templates. Choose from a variety of styles for any occasion.
          </p>
        </section>
        
        {/* Categories */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-4 py-2 rounded-full ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Templates
            </button>
            
            {templateCategories.map(category => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>
        
        {/* Templates Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTemplates.map(template => (
              <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={template.imageUrl}
                    alt={template.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                  <p className="text-sm text-gray-500 capitalize mb-4">{template.category.replace('-', ' ')}</p>
                  <button className="btn btn-primary w-full">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 