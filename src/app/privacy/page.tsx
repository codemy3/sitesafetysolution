import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F4F6F8] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-200/80">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-sm sm:text-base text-textLight leading-relaxed">
          <p>
            Site Safety Solutions Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. The personal information we collect may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Business details</li>
          </ul>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your requests for services.</li>
          </ul>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. GDPR Compliance</h2>
          <p>
            If you are a resident of the European Economic Area (EEA) or the United Kingdom (UK), you have certain data protection rights under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at symon@sitesafety-solutions.co.uk.
          </p>
        </div>
      </div>
    </main>
  );
}
