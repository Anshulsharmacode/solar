import React from 'react';

const PMSuryaGhar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          PM Surya Ghar: Muft Bijli Yojana
        </h1>
        <p className="text-xl text-center mb-8">
          Imagine never paying an electricity bill again. With the PM Surya Ghar: Muft Bijli Yojana, this dream can become your reality.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose PM Surya Ghar?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Free Electricity for Life:</strong> Say goodbye to monthly electricity bills! The Muft Bijli Yojana provides you with a substantial subsidy, covering up to 40% of your solar panel installation costs, ensuring you enjoy free electricity year-round.</li>
            <li><strong>Significant Government Savings:</strong> By reducing national electricity costs, this scheme helps the government save Rs. 75,000 crore annually, allowing more resources to be directed towards other critical areas.</li>
            <li><strong>Environmental Impact:</strong> By harnessing solar energy, you contribute to a greener planet, reducing carbon emissions and promoting sustainable living.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits Breakdown</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Tailored Solar Capacity for Your Home:</h3>
              <ul className="list-disc list-inside">
                <li>0-150 Units Monthly Consumption: 1 – 2 kW system</li>
                <li>150-300 Units Monthly Consumption: 2 – 3 kW system</li>
                <li>300 Units Monthly Consumption: Above 3 kW system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Substantial Subsidy:</h3>
              <ul className="list-disc list-inside">
                <li>Up to 2 kW: Rs. 30,000/- per kW</li>
                <li>Additional Capacity up to 3 kW: Rs. 18,000/- per kW</li>
                <li>Total Subsidy Cap for Systems  3 kW: Rs 78,000</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility and Requirements</h2>
          <p>If you are a homeowner with a valid proof of identity, address, electricity bill, and roof ownership certificate, you are eligible.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hassle-Free Application Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Online Registration:</strong> Visit the official portal. Provide your state, electricity distribution company, consumer number, mobile number, and email.</li>
            <li><strong>Login and Application:</strong> Log in with your consumer number and mobile number. Fill out the online application form.</li>
            <li><strong>Approval and Installation:</strong> Wait for feasibility approval from DISCOM. Install the solar plant with a registered vendor.</li>
            <li><strong>Commissioning and Subsidy:</strong> Post-installation, get the commissioning certificate from DISCOM. Submit your bank details online. Receive your subsidy within 30 days.</li>
          </ol>
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Join the PM Surya Ghar: Muft Bijli Yojana Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PMSuryaGhar;
