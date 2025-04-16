import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';
import Link from 'next/link';

// Pricing plan data
const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    description: 'Basic features for personal use',
    features: [
      '5 card generations per day',
      'Access to basic templates',
      'JPG downloads',
      'Limited styles',
      'Standard quality'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '9.99',
    description: 'Advanced features for professionals',
    features: [
      'Unlimited card generations',
      'Access to all templates',
      'PNG/JPG downloads with transparency',
      'All styles available',
      'High quality generation',
      'Customize card dimensions',
      'Priority support'
    ],
    cta: 'Start Pro Plan',
    popular: true
  },
  {
    id: 'business',
    name: 'Business',
    price: '29.99',
    description: 'Complete solution for businesses',
    features: [
      'Everything in Pro plan',
      'Team collaboration',
      'Branding options',
      'API access',
      'Bulk generation',
      'Analytics',
      'Dedicated support',
      'Custom integrations'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  const { t } = useLocale();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing Plans - AI Card Generator</title>
        <meta name="description" content="Choose a pricing plan that works for you - from free personal use to business solutions." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Choose a plan that works for you, from individual creators to large businesses.
          </p>
        </section>
        
        {/* Pricing toggle - monthly/annual */}
        <section className="mb-10">
          <div className="flex justify-center items-center space-x-4">
            <span className="text-gray-600">Monthly</span>
            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer bg-primary">
              <div className="absolute left-1 top-1 bg-white w-4 h-4 transition-transform duration-200 ease-in-out rounded-full"></div>
            </div>
            <span className="text-gray-600">Annual <span className="text-green-500 font-medium">Save 20%</span></span>
          </div>
        </section>
        
        {/* Pricing cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map(plan => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  plan.popular ? 'border-primary' : 'border-transparent'
                } transform transition-transform hover:-translate-y-1`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-1 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={plan.id === 'business' ? '/contact' : `/signup?plan=${plan.id}`}
                    className={`w-full py-3 px-4 rounded-lg font-medium block text-center ${
                      plan.popular 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be applied immediately.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept major credit cards, PayPal, and bank transfers for annual business plans.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 