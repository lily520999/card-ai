import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocale } from '@/contexts/LocaleContext';

export default function PrivacyPolicy() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('app.name')} - Privacy Policy</title>
        <meta name="description" content="Privacy Policy for AI Card Generator" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to AI Card Generator. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and 
              tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
            <p>
              When you use our AI Card Generator service, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Account information: When you create an account, we collect your name, email address, and password.</li>
              <li>Usage data: We collect information about how you use our services, such as the features you use and the time you spend on our platform.</li>
              <li>Content you generate: We store the card designs you create using our platform.</li>
              <li>Images you upload: Any images uploaded to customize your cards.</li>
              <li>Technical data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
            <p>
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We may share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>With service providers: We may share your information with service providers to perform services on our behalf.</li>
              <li>For business transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li>With your consent: We may disclose your personal information for any other purpose with your consent.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method 
              of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, 
              we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Data Protection Rights</h2>
            <p>
              You have the following data protection rights:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The right to access, update or delete the information we have on you.</li>
              <li>The right of rectification - the right to have your information corrected if that information is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right of restriction - the right to request that we restrict the processing of your personal information.</li>
              <li>The right to data portability - the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
              <li>The right to withdraw consent - the right to withdraw your consent at any time where we relied on your consent to process your personal information.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>By email: privacy@aicardgenerator.com</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 