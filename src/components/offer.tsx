import React, { useState } from "react";
import { Sun, Phone, X } from "lucide-react";

const OfferPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="bg-green-700 text-white py-3 px-4 rounded-t-lg relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <Sun className="h-6 w-6 text-yellow-300" />
            <p className="text-xl font-bold">Special Offer</p>
          </div>
        </div>
        <div className="p-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Get a professional website starting from ₹2,500 or $40
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Contact us for details or your own custom website.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="https://launchleap.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
            >
              Visit launchleap.in
            </a>
            <a
              href="tel:+917489989634"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              <Phone className="h-4 w-4 mr-2 inline" />
              Call: +91 7489 989 634
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
