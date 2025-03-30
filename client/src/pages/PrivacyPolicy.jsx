// PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        This Privacy Policy explains how we collect, use, and share your data
        when you use our services, including logging in through Facebook.
      </p>

      <h2 className="text-2xl font-medium mt-4 mb-2">Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect certain information when you log in using your Facebook
        account, including:
        <ul className="list-disc pl-6 space-y-2">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your Facebook profile information</li>
        </ul>
      </p>

      <h2 className="text-2xl font-medium mt-4 mb-2">
        How We Use Your Information
      </h2>
      <p className="text-lg mb-4">
        We use your information for the following purposes:
        <ul className="list-disc pl-6 space-y-2">
          <li>To authenticate and log you into our platform.</li>
          <li>To personalize your experience.</li>
          <li>
            To communicate with you about updates or promotions (if opted in).
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-medium mt-4 mb-2">Your Data Rights</h2>
      <p className="text-lg mb-4">
        You have the right to access, update, and delete your data. You can also
        revoke Facebook login access at any time through your Facebook settings.
      </p>

      <h2 className="text-2xl font-medium mt-4 mb-2">Data Sharing</h2>
      <p className="text-lg mb-4">
        We do not share your personal information with third parties except for
        the necessary purposes related to Facebook login.
      </p>

      <h2 className="text-2xl font-medium mt-4 mb-2">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions or concerns about our privacy practices,
        please contact us at{' '}
        <a href="mailto:support@example.com" className="text-blue-500">
          support@example.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
