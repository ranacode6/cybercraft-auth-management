// src/components/DataDeletionPage.js

import React from 'react';

const DataDeletionInstruction = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Data Deletion Instructions
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          We respect your privacy and are committed to providing you with
          control over your data. If you wish to delete your account and all
          associated data, please follow the instructions below:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How to Delete Your Data
        </h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          <li>
            <strong>Step 1: Log in to Your Account</strong> - Visit our website
            and log in with your credentials.
          </li>
          <li>
            <strong>Step 2: Navigate to Your Account Settings</strong> - After
            logging in, click on your profile icon in the top right corner and
            select "Account Settings" from the dropdown menu.
          </li>
          <li>
            <strong>Step 3: Request Data Deletion</strong> - In the account
            settings menu, click on the "Privacy" tab, and you will see the
            "Delete Account" option. Click on it.
          </li>
          <li>
            <strong>Step 4: Confirm Your Request</strong> - You will be prompted
            with a confirmation message. Please review the information and click
            on the "Confirm" button to proceed with the deletion process.
          </li>
          <li>
            <strong>Step 5: Receive Confirmation</strong> - Once your data has
            been deleted, you will receive a confirmation email notifying you of
            the deletion.
          </li>
        </ol>

        <p className="mt-6 text-lg text-gray-700">
          Please note that once your data is deleted, it cannot be recovered. If
          you have any further questions, feel free to contact our support team
          at <strong>support@example.com</strong>.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionInstruction;
