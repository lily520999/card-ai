import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';

export default function TermsOfService() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('app.name')} - Terms of Service</title>
        <meta name="description" content="Terms of Service for AI Card Generator" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using AI Card Generator ("the Service"), you agree to be bound by these Terms of Service 
              ("Terms"). If you disagree with any part of the terms, you may not access the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>
              AI Card Generator is an AI-powered tool that allows users to create customized cards for various occasions based on text 
              prompts and style selections. The Service may include features such as card generation, customization, downloading, and saving.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              Some features of the Service may require you to register for an account. You agree to keep your password secure and 
              will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username 
              you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p>
              Our Service allows you to create, post, link, store, share and otherwise make available certain information, text, graphics, 
              or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its 
              legality, reliability, and appropriateness.
            </p>
            <p className="mt-4">
              By posting Content on or through the Service, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.</li>
              <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the 
              exclusive property of AI Card Generator and its licensors. The Service is protected by copyright, trademark, and other laws of 
              both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or 
              service without the prior written consent of AI Card Generator.
            </p>
            <p className="mt-4">
              Cards generated through the Service:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>You retain ownership of the cards you generate using the Service.</li>
              <li>You grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your Content in any existing or future media.</li>
              <li>You may use generated cards for personal or commercial purposes, subject to our fair usage policy.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Prohibited Uses</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To generate or distribute content that is offensive, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm the Company or users of the Service.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall AI Card Generator, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
              we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will 
              be determined at our sole discretion.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>By email: terms@aicardgenerator.com</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 