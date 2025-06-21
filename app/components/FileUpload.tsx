"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

interface FileUploadProps {
  onSuccess: (res: any) => void;
  onProgress?: (progress: number) => void;
  fileType?: "image" | "video";
}

const FileUpload = ({ onSuccess, onProgress, fileType }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //optional validation

  const validateFile = (file: File) => {
    if (fileType === "video") {
      if (!file.type.startsWith("video/")) {
        setError("Please upload a valid video file");
      }
    }
    if (file.size > 100 * 1024 * 1024) {
      setError("File size must be less than 100 MB");
    }
    return true;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !validateFile(file)) return;

    setUploading(true);
    setError(null);

    try {
      const authRes = await fetch("/api/auth/imagekit-auth");
      const auth = await authRes.json();

      const res = await upload({
        file,
        fileName: file.name,
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        signature: auth.signature,
        expire: auth.expire,
        token: auth.token,
        onProgress: (event) => {
          if (event.lengthComputable && onProgress) {
            const percent = (event.loaded / event.total) * 100;
            onProgress(Math.round(percent));
          }
        },
      });
      onSuccess(res);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {/* <input
        type="file"
        accept={fileType === "video" ? "video/*" : "image/*"}
        onChange={handleFileChange}
      />
      {uploading && <span>Loading....</span>} */}

      <div className="relative">
        {/* Glowing border effect on focus */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-50 group-focus-within:opacity-75 blur-sm transition-all duration-300 pointer-events-none"></div>

        {/* Main file input container */}
        <div className="relative bg-gray-800 border border-gray-700 rounded-lg group hover:border-gray-600 transition-all duration-300 overflow-hidden">
          <input
            type="file"
            accept={fileType === "video" ? "video/*" : "image/*"}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="file-upload"
          />

          <label
            htmlFor="file-upload"
            className="block px-6 py-10 text-center cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="p-4 rounded-full bg-gray-700/50 border border-gray-600 group-hover:border-purple-400/30 transition-colors duration-300">
                <svg
                  className={`w-8 h-8 ${
                    fileType === "video" ? "text-purple-400" : "text-blue-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {fileType === "video" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  )}
                </svg>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-white">
                  {fileType === "video"
                    ? "Upload a video reel"
                    : "Upload an image"}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {fileType === "video"
                    ? "MP4, MOV or AVI (Max 100MB)"
                    : "JPG, PNG or GIF (Max 50MB)"}
                </p>
              </div>

              <button
                type="button"
                className="px-5 py-2 mt-2 text-sm font-medium rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
              >
                Select File
              </button>
            </div>
          </label>
        </div>

        {/* Uploading indicator */}
        {uploading && (
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-purple-500 animate-spin"></div>
            </div>
            <span className="text-sm font-medium text-purple-400">
              Processing...
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default FileUpload;
