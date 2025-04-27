/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [srtUrl, setSrtUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSrtUrl(""); // Clear previous download link
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://freehindicaptions.onrender.com/generate-captions", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to generate captions");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      // Set the download URL for the user to download manually (optional)
      setSrtUrl(url);

      // Auto download
      const a = document.createElement("a");
      const contentDisposition = res.headers.get("Content-Disposition");
      const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
      const filename = filenameMatch ? filenameMatch[1] : "captions.srt";

      a.href = url;
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-white text-center p-4">
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-1 bg-white shadow-md z-10">
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo_FHC.png"
              alt="Free Hindi Captions Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors duration-200"
          >
            About Us
          </a>
        </div>
      </nav>

      <div className="mt-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Free Hindi Captions</h1>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Convert MP3 audio files to Hindi captions in seconds. Easily download and use them for videos or podcasts.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 bg-white max-w-md mx-auto">
          <input
            type="file"
            accept=".mp3"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block bg-red-500 text-white py-2 px-4 rounded font-semibold"
          >
            Select MP3 Audio File
          </label>
          <p className="mt-2 text-sm text-gray-600">or drop MP3 audio here</p>
        </div>

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className={`px-6 py-2 rounded-full text-white font-semibold ${loading ? "bg-teal-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Generating..." : "Generate Captions"}
        </button>
        <div>
          <h1 className="text-black font-bold mb-6 max-w-xl mx-auto p-4 text-xl">
            <a href="https://www.linkedin.com/in/arun-sharma-5b58aa23a/" target="_blank" rel="noopener noreferrer">
              Visit the Creator (click here) ▶️
            </a>
          </h1>
        </div>
        {/* Optional download link if user wants to click manually */}
        {srtUrl && (
          <div className="mt-4">
            <a
              href={srtUrl}
              download
              className="text-blue-600 underline font-medium"
            >
              Download SRT File
            </a>
          </div>
        )}
      </div>

      <footer className="absolute bottom-0 w-full text-center text-sm text-gray-600 py-2">
        © Free Hindi Captions 2025 • Your Audio Caption Tool
      </footer>
    </main>
  );
}
