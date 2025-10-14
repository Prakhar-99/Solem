import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const Navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
      <p className="text-2xl font-semibold mb-6">Page Not Found</p>

      {/* Image */}
      {/* <img
        src={notFoundImage}
        alt="Page Not Found"
        className="w-64 md:w-96 mb-6 object-contain"
      /> */}

      {/* Return Home Button */}
      <button
        onClick={() => Navigate("/")}
        className="bg-complement hover:bg-element hover:text-secondary hover:border text-element font-bold py-3 px-6 rounded-md shadow-md transition-colors"
      >
        Return to Home
      </button>
    </div>
  )
}

export default NotFound