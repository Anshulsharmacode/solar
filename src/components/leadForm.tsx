import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  monthlyBillOptions: string[];
  pinCode: string;
  city: string;
  email: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    monthlyBillOptions: [],
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
    const index = formData.monthlyBillOptions.indexOf(badge);
    if (index === -1) {
      setFormData({
        ...formData,
        monthlyBillOptions: [...formData.monthlyBillOptions, badge],
      });
    } else {
      const updatedOptions = formData.monthlyBillOptions.filter(
        (option) => option !== badge
      );
      setFormData({
        ...formData,
        monthlyBillOptions: updatedOptions,
      });
    }
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
      monthlyBillOptions: [],
      pinCode: "",
      city: "",
      email: "",
    });
  };

  return (
    <div id="leadform" className="flex justify-between items-center h-screen">
      {/* Left Side Content */}
      <div className="flex-1 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Reduce Your Electricity Bill
        </h2>
        <p className="text-gray-600 mb-4">
          Fill out the form below to get started on reducing your monthly
          electricity bill.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 p-8">
        <form className="max-w-lg" onSubmit={handleSubmit}>
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
            <div className="mt-1 flex justify-left">
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 ${
                  formData.monthlyBillOptions.includes("Option 1")
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("Option 1")}
              >
                Option 1
              </div>
              <div
                className={`cursor-pointer border border-primary-500 text-black px-3 py-1 rounded-md mr-2 ${
                  formData.monthlyBillOptions.includes("Option 2")
                    ? "bg-primary-600 text-white"
                    : ""
                }`}
                onClick={() => handleBadgeClick("Option 2")}
              >
                Option 2
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
            className="bg-primary-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Yes, reduce my electricity bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
