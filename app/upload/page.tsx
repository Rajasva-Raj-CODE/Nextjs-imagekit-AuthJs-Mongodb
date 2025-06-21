"use client";

import VideoUploadForm from "../components/VideoUploadForm";

export default function VideoUploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Upload New Reel
                </h1>
                <p className="mt-1 text-indigo-100">
                  Share your creative content with the community
                </p>
              </div>
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-white opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Progress Indicator (optional) */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-indigo-600 rounded-full p-1">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700">
                  Upload Content
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-indigo-600 h-1.5 rounded-full"
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="px-6 py-8 sm:px-8">
            <VideoUploadForm />
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Cancel
            </button>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                Save as Draft
              </button>
              <button className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition shadow-sm">
                Publish Reel
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Upload Guidelines
            </h3>
          </div>
          <div className="px-6 py-4">
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">
                  Videos should be between 15-90 seconds
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Maximum file size: 100MB</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Supported formats: MP4, MOV, AVI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
