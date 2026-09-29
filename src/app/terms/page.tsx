import React from 'react';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#F4F6F8] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-200/80">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-6">Terms &amp; Conditions</h1>
        <div className="space-y-6 text-sm sm:text-base text-textLight leading-relaxed">
          <p>
            Welcome to Site Safety Solutions Ltd. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use our services if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Services Rendered</h2>
          <p>
            Site Safety Solutions Ltd provides health and safety consultancy, fire risk assessments, RAMS documentation, and site support. All advice is provided in accordance with standard UK health and safety regulations, including but not limited to CDM 2015 and MHSWR 1999.
          </p>

          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. Limitation of Liability</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties or representations as to the accuracy or completeness of the content. We shall not be liable for any damages arising out of or in connection with the use of our services.
          </p>
          
          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2 className="text-xl font-bold text-secondary mt-8 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at symon@sitesafety-solutions.co.uk.
          </p>
        </div>
      </div>
    </main>
  );
}
