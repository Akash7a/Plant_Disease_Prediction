import React from "react";
import Dp from "../assets/Db_Arshu.webp";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      {/* Contact Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        {/* Image */}
        <img
          src={Dp}
          alt="Arslan Khan"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
        />
        {/* Name and Title */}
        <h1 className="text-2xl font-bold text-gray-800">Arslan Khan</h1>
        <p className="text-green-600 font-medium">B.Tech, Third Year</p>
        <p className="text-gray-600">Prasad Institute of Technology</p>

        {/* Email */}
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">Email:</p>
          <a
            href="mailto:arslan.khan@gmail.com"
            className="text-blue-500 hover:underline"
          >
            arslan.khan@example.com
          </a>
        </div>
      </div>

      {/* About the Project */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mt-8 text-left">
        <h2 className="text-xl font-bold text-gray-800 mb-4">About This Project</h2>
        <p className="text-gray-700 mb-4">
          This platform, <span className="text-green-600 font-semibold">PlantLeafAI</span>, is designed to empower farmers and researchers with 
          cutting-edge AI technology to identify plant leaf diseases. By simply uploading an image of the affected leaf, users can receive accurate
          disease predictions and actionable insights to ensure healthy crops.
        </p>
        <p className="text-gray-700 mb-4">
          Built with React.js and Tailwind CSS, this project showcases a seamless user experience with modern styling and responsive design. 
          Features include image upload, real-time AI analysis, and detailed results for better crop management.
        </p>
        <p className="text-gray-700">
          If you have any questions, feedback, or collaboration ideas, feel free to reach out to <span className="text-green-600 font-semibold">Arslan Khan</span> using the contact information provided above.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;