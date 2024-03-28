"use client"

import React, { useState, useEffect } from 'react';

const FeedbackAlert = ({ type, message, onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  // Hide the alert after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
      onClose(); // Execute onClose callback after hiding the alert
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  let alertColorClasses = '';
  switch (type) {
    case 'success':
      alertColorClasses = 'bg-green-100 text-green-800';
      break;
    case 'error':
      alertColorClasses = 'bg-red-100 text-red-800';
      break;
    default:
      alertColorClasses = 'bg-blue-100 text-blue-800';
  }

  return (
    <>
      {showAlert && (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center h-screen">
          <div className="w-1/3 bg-white p-4 rounded-md shadow-lg absolute top-0 transform -translate-y-full transition-transform duration-300">
            <div className={`p-4 rounded-md ${alertColorClasses}`}>
              <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackAlert;
