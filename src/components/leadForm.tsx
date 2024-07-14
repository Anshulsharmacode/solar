import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  monthlyBillOptions: string;
  pinCode: string;
  city: string;
  email: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    monthlyBillOptions: "",
    pinCode: "",
    city: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBadgeClick = (badge: string): void => {
    setFormData({
      ...formData,
      monthlyBillOptions: badge,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Prepare data object to send
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      monthlyBillOptions: formData.monthlyBillOptions,
      pinCode: formData.pinCode,
      city: formData.city,
      email: formData.email,
    };

    console.log("Form Data:", data);

    // Here you can perform API calls or further processing
    // Reset form after submission if needed
    setFormData({
      firstName: "",
      lastName: "",
      monthlyBillOptions: "",
      pinCode: "",
      city: "",
      email: "",
    });
  };
  return (
    <div
      id="leadform"
      className="pt-4 md:p-8 lg:p-24 flex flex-col md:flex-row justify-between items-center min-h-screen bg-primary-500"
    >
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-left text-white mb-0 lg:mb-8 p-8 lg:p-28">
        <h2 className="text-3xl lg:text-6xl font-bold">Claim your</h2>
        <h2 className="text-3xl lg:text-6xl font-bold text-primary-900">
          FREE consultation
        </h2>
        <h2 className="text-3xl lg:text-6xl font-bold mb-4">now!</h2>
        <p className="mb-4 text-sm lg:text-base">
          Receive honest insights from our solar professionals. No pressure,
          only proceed if you're confident.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 p-12">
        <form
          className="mx-auto bg-white p-4 lg:p-12 rounded shadow-lg border-radius-24"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Monthly Bill Options
            </label>
            <div className="mt-1 flex flex-wrap justify-start text-sm">
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 mb-2 ${
                  formData.monthlyBillOptions === "less than ₹1500"
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("less than ₹1500")}
              >
                less than ₹1500
              </div>
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 mb-2 ${
                  formData.monthlyBillOptions === "₹1500 - ₹2500"
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("₹1500 - ₹2500")}
              >
                ₹1500 - ₹2500
              </div>
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 mb-2 ${
                  formData.monthlyBillOptions === "₹2500 - ₹4000"
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("₹2500 - ₹4000")}
              >
                ₹2500 - ₹4000
              </div>
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 mb-2 ${
                  formData.monthlyBillOptions === "₹4000 - ₹8000"
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("₹4000 - ₹8000")}
              >
                ₹4000 - ₹8000
              </div>
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 mb-2 ${
                  formData.monthlyBillOptions === "more than ₹8000"
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("more than ₹8000")}
              >
                more than ₹8000
              </div>
              {/* Add more options as needed */}
            </div>
          </div>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="pinCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Yes, reduce my electricity bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
