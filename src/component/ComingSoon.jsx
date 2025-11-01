import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 font-poppins">
      <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Hali ishlab chiqilmoqda 🚧
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Bu sahifa hali tayyor emas. Iltimos, keyinroq qayta urinib ko'ring.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
        >
          Ortga qaytish
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
