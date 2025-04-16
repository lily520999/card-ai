import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';
import Image from 'next/image';
import Link from 'next/link';

// Blog categories
const blogCategories = [
  { id: 'design', name: 'Design Tips', count: 8 },
  { id: 'ai', name: 'AI Technology', count: 15 },
  { id: 'tutorials', name: 'Tutorials', count: 12 },
  { id: 'business', name: 'Business Applications', count: 10 },
  { id: 'updates', name: 'Product Updates', count: 6 }
];

// Sample blog posts
const samplePosts = Array(12).fill(0).map((_, index) => ({
  id: `post-${index + 1}`,
  title: `How to Create Professional ${['Birthday Cards', 'Wedding Invitations', 'Business Cards', 'Holiday Cards', 'Thank You Cards', 'Party Invitations'][index % 6]} with AI`,
  category: blogCategories[index % blogCategories.length].id,
  date: `2023-${(index % 12) + 1}-${(index % 28) + 1}`,
  excerpt: 'Learn how to use our AI Card Generator to create stunning designs, and explore advanced features and tips...',
  imageUrl: `https://picsum.photos/seed/blog${index + 1}/600/400`
}));

export default function Blog() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredPosts = activeCategory === 'all' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - AI Card Generator</title>
        <meta name="description" content="Browse our blog to learn about card design tips, AI technology, and latest product updates." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Explore our latest articles on card design, AI technology, and creative inspiration
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
              All Articles
            </button>
            
            {blogCategories.map(category => (
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
        
        {/* Blog posts grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-52">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 capitalize">{post.category.replace('-', ' ')}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Subscribe section */}
        <section className="bg-primary text-white p-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog Updates</h2>
            <p className="mb-6">Get the latest design tips, tutorials, and product updates for the AI Card Generator</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md focus:outline-none text-gray-800"
              />
              <button className="btn bg-white text-primary hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 