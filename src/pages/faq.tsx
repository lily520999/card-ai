import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';

// FAQ item interface
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// FAQ categories
const categories = [
  'All',
  'General',
  'Templates',
  'Customization',
  'Pricing',
  'Technical',
  'Legal'
];

// FAQ data
const faqItems: FAQItem[] = [
  {
    question: "Is the AI Card Generator designed for secure commercial use?",
    answer: "Absolutely, our card template generator is specifically designed for business security and commercial use. All generated content is safely usable for commercial purposes, with no copyright or licensing concerns.",
    category: "General"
  },
  {
    question: "What is AI Card Generator?",
    answer: "AI Card Generator is a generative AI technology that allows you to create various card templates using just descriptive prompts. Simply describe what you want to see, and our AI will generate customized card designs for you.",
    category: "General"
  },
  {
    question: "How can I most effectively use the AI Card Generator?",
    answer: "The more specific your prompt is, the better card template options you'll get that match your needs. Include details about the style you want, your industry, occasion, or theme in your prompt to yield better results.",
    category: "General"
  },
  {
    question: "What are the standard card dimensions?",
    answer: "Our card templates automatically adjust to 5 x 7 inches, which is the standard card size. You can use the resize feature to input your custom dimensions if needed for specific purposes.",
    category: "Technical"
  },
  {
    question: "Can I customize the templates after generation?",
    answer: "Yes, after generating card templates, you can customize them by adding your own text, changing colors, uploading background images, and adjusting font sizes and styles.",
    category: "Customization"
  },
  {
    question: "Can I download the cards I create?",
    answer: "Yes, all users can download their created cards in JPG format. Pro and Business plan subscribers can also download cards with transparent backgrounds in PNG format.",
    category: "Technical"
  },
  {
    question: "Is there a limit to how many cards I can generate?",
    answer: "Free plan users can generate up to 5 cards per day. Pro plan subscribers have unlimited generation capability, and Business plans include bulk generation features.",
    category: "Pricing"
  },
  {
    question: "Can I use the generated cards for commercial purposes?",
    answer: "Yes, all cards generated on our platform can be used for commercial purposes. We ensure that you have the necessary rights to use the designs commercially.",
    category: "Legal"
  },
  {
    question: "How do I access my saved templates?",
    answer: "After logging in, you can access your saved templates from your account dashboard under the 'Saved Templates' section.",
    category: "Templates"
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied with our service, contact our support team for a full refund.",
    category: "Pricing"
  },
  {
    question: "Can I share my templates with team members?",
    answer: "Team sharing features are available on the Business plan, allowing multiple team members to access, edit, and use templates from a shared workspace.",
    category: "Pricing"
  },
  {
    question: "Is my data secure when using the AI Card Generator?",
    answer: "We take data security seriously. All user data and generated content is protected with industry-standard encryption, and we never share your data with third parties.",
    category: "Legal"
  }
];

export default function FAQ() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  // Filter FAQs based on active category and search query
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Frequently Asked Questions - AI Card Generator</title>
        <meta name="description" content="Find answers to common questions about the AI Card Generator platform." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Find answers to common questions about our platform, features, and services.
          </p>
        </section>
        
        {/* Search */}
        <section className="mb-10 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </section>
        
        {/* Categories */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        
        {/* FAQ Accordion */}
        <section className="mb-16 max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="text-lg font-semibold">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        expandedItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedItems.includes(index) && (
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700">{item.answer}</p>
                      <div className="mt-3 text-sm text-gray-500">
                        Category: {item.category}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500 mb-4">No matching questions found</p>
              <p className="text-gray-600">Try adjusting your search terms or category selection</p>
            </div>
          )}
        </section>
        
        {/* Contact Section */}
        <section className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">Still have questions?</h2>
          <p className="text-center text-gray-600 mb-6">
            If you couldn't find the answer you were looking for, feel free to contact our support team.
          </p>
          <div className="text-center">
            <button className="btn btn-primary">
              Contact Support
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 