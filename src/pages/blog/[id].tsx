import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Post type definition
interface Post {
  title: string;
  date: string;
  author: string;
  authorTitle: string;
  category: string;
  content: string;
  imageUrl: string;
}

// Create a record type for posts
type PostsRecord = Record<string, Post>;

// Sample blog post data
const blogPosts: PostsRecord = {
  'post-1': {
    title: 'How to Create Professional Birthday Cards with AI',
    date: '2023-1-1',
    author: 'Mike Johnson',
    authorTitle: 'Product Designer',
    category: 'Design Tips',
    content: `
      <p>In the digital age, personalized birthday cards remain one of the best ways to express your wishes. With AI technology, you can now easily create professional-quality birthday cards without any design experience.</p>
      
      <h2>Choose the Right Theme</h2>
      <p>First, consider the recipient's preferences and personality. Is it formal or fun? Traditional or modern? The AI Card Generator offers various theme options, allowing you to quickly find a suitable style.</p>
      
      <h2>Use Personalized Prompts</h2>
      <p>In the prompt box, describe your desired card style in as much detail as possible. For example, "Create a colorful cartoon birthday card with dinosaurs and rainbows for my 7-year-old niece, vibrant and playful" will produce better results than simply "children's birthday card".</p>
      
      <h2>Adjust and Refine</h2>
      <p>The initial AI-generated draft may need some adjustments. Use the editing tools to add personalized text, adjust colors, or regenerate until you get a satisfactory result.</p>
      
      <h2>Add Personal Information</h2>
      <p>Don't forget to add your personal signature and wishes. These details will make your AI-generated card more warm and personal.</p>
      
      <h2>Advanced Tips</h2>
      <p>Try combining different style keywords like "watercolor", "vintage", or "minimalist" to create unique visual effects.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/blog1/1200/600'
  },
  'post-2': {
    title: 'How to Create Professional Wedding Invitations with AI',
    date: '2023-2-2',
    author: 'Sarah Thompson',
    authorTitle: 'Wedding Planner',
    category: 'AI Technology',
    content: `
      <p>Wedding invitations are an important element in the wedding preparation process, not only conveying wedding information but also reflecting the couple's taste and wedding theme. With AI technology, you can easily create professional-level wedding invitations.</p>
      
      <h2>Determine Wedding Style and Theme</h2>
      <p>Before starting your design, establish the overall style and color scheme of the wedding. Is it a romantic pink tone? Or a modern minimalist style? This will guide your AI generation process.</p>
      
      <h2>Write the Perfect Prompt</h2>
      <p>Describe your desired invitation style in detail, including colors, patterns, and typography preferences. For example: "Create a wedding invitation with watercolor floral borders, pink and green tones, elegant calligraphy font, and a modern minimalist layout."</p>
      
      <h2>Add Wedding Details</h2>
      <p>Use the editing features to add key wedding information: names of the couple, date, time, location, and RSVP details. Ensure all text is clear and readable, and coordinates with the overall design.</p>
      
      <h2>Personalize</h2>
      <p>Consider adding special elements, such as the couple's monogram or meaningful symbols, to make the invitation more unique.</p>
      
      <h2>Try Different Variations</h2>
      <p>Don't settle for the first result. Try generating multiple versions, and choose the best design or combine elements from different designs.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/blog2/1200/600'
  }
};

// Generate simple data for other articles
for (let i = 3; i <= 12; i++) {
  const categories = ['Design Tips', 'AI Technology', 'Tutorials', 'Business Applications', 'Product Updates'];
  blogPosts[`post-${i}`] = {
    title: `How to Create Professional ${['Birthday Cards', 'Wedding Invitations', 'Business Cards', 'Holiday Cards', 'Thank You Cards', 'Party Invitations'][i % 6]} with AI`,
    date: `2023-${i % 12 + 1}-${i % 28 + 1}`,
    author: ['Mike Johnson', 'Sarah Thompson', 'David Lee', 'Emily Chen', 'Alex Rodriguez'][i % 5],
    authorTitle: ['Product Designer', 'Content Creator', 'Card Designer', 'Marketing Specialist', 'UX Designer'][i % 5],
    category: categories[i % categories.length],
    content: `<p>This is sample blog post content. In a real application, this would contain detailed tutorials and instructions.</p>
              <h2>Main Section Title</h2>
              <p>Detailed content and step-by-step instructions would be displayed here. You can follow these steps to create professional-level card designs.</p>
              <h2>Advanced Tips</h2>
              <p>Here you would find professional tips and suggestions to help you achieve the best results.</p>`,
    imageUrl: `https://picsum.photos/seed/blog${i}/1200/600`
  };
}

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const post = id ? blogPosts[id as string] : undefined;
  
  // Handle loading state and 404
  if (router.isFallback || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {router.isFallback ? (
            <p className="text-xl">Loading...</p>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="mb-6">Sorry, the article you're looking for doesn't exist.</p>
              <Link href="/blog" className="btn btn-primary">
                Return to Blog Home
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{post.title} - Blog - AI Card Generator</title>
        <meta name="description" content={`Learn ${post.title.toLowerCase()}, professional tips and advice.`} />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        {/* Article Header */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Return to Blog Home
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <p className="font-medium">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.authorTitle}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 w-full max-w-4xl mx-auto mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>
        </section>
        
        {/* Article Content */}
        <article className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* Share and Related Articles */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="border-t border-b border-gray-200 py-8 mb-10">
            <div className="flex justify-between items-center">
              <p className="font-medium">Share this article:</p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(blogPosts)
              .filter(([key, _]) => key !== id)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <Link key={key} href={`/blog/${key}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 