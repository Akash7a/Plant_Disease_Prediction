import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isPredicted, setIsPredicted] = useState(false);  // New state to track prediction completion

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();   

    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    const fileInput = document.getElementById('uploadImage');
    const file = fileInput.files[0];  // Access the selected file directly

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); 

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setPrediction(response.data.prediction);
      setIsPredicted(true);  // Mark prediction as complete
    } catch (error) {
      console.error("Error during prediction", error);
      alert("Failed to get prediction");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section id="home" className="bg-green-100 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-3xl font-bold text-green-800 mb-4">
            Identify Plant Leaf Diseases Instantly
          </h2>
          <p className="text-lg sm:text-base text-green-700 mb-8">
            Upload a leaf image and get accurate disease predictions to ensure healthy crops.
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="uploadImage"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-green-700"
            >
              Upload Image
            </label>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <button
              type="submit"
              className="mt-4 mx-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-green-700"
            >
              Get Prediction
            </button>
          </form>
        </div>
      </section>

      <section id="scan" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl sm:text-2xl font-bold text-green-800 mb-8">Live Scan</h3>
          {selectedImage ? (
            <div className="relative inline-block">
              <img
                src={selectedImage}
                alt="Uploaded Leaf"
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-50 flex items-center justify-center text-white font-bold text-xl">
                Scanning...
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              No image uploaded yet. Please upload an image to scan.
            </p>
          )}

          {prediction && (
            <div className="mt-8">
              <h4 className="text-4xl font-semibold text-green-800 break-words sm:text-xl max-w-full">
                <span className="text-red-700">Disease Prediction</span>:<strong>{prediction}</strong>
              </h4>
              {isPredicted && (
                <p className="mt-4 text-green-600 font-semibold text-4xl sm:text-xl lg:text-4xl">
                  The prediction has been made successfully!
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;