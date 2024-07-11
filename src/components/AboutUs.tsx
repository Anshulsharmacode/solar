import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-800px m-auto p-20 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Aditya Solar Solutions</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        India’s fastest-growing solar system company and a proud certified vendor under the prestigious PM Surya Ghar Yojana.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Promise</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        As a government-empanelled vendor, we uphold the highest standards of quality and reliability in every solar project we undertake, ensuring you get the best.
      </p>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Our vision is to democratize clean energy, making it accessible to every home and business across India. We are dedicated to driving a sustainable future powered by renewable energy.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Benefit from PM Surya Ghar Yojana</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Our certification highlights our commitment to quality and government-backed support. With the PM Surya Ghar Yojana, we offer substantial subsidies, making solar installations highly cost-effective for you. We simplify the application process to ensure you receive maximum benefits effortlessly.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Seamless Experience</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        At Aditya Solar Solutions, we provide a hassle-free journey from initial consultation to ongoing maintenance. Our comprehensive end-to-end solutions ensure efficiency, reliability, and maximum energy savings for your home or business.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Flexible Financing Options</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Switching to solar is made easy and affordable with our 0% EMI financing plans. Invest in solar energy without financial strain and start enjoying immediate savings on your electricity bills.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Cyclone-Proof, Safe Rooftop Solar</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Our installations are engineered to withstand severe weather conditions, including storms and winds up to 170 km/h, ensuring safety and durability.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional Maintenance Included</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Every installation includes a 5-year professional maintenance plan, giving you peace of mind and ensuring continued optimal performance of your solar system.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Aditya Solar Solutions</h2>
      <p className="text-base text-gray-700 leading-normal mb-6">
        Let us help you harness the power of the sun and achieve energy independence effortlessly with our reliable, high-quality solar solutions.
      </p>

      <button className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold uppercase rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out" onClick={() => window.open('tel:+1234567890')}>
        Call to Action Button
      </button>
    </div>
  );
};

export default AboutUs;
