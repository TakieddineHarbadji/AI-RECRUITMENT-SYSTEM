import React, { useState, useCallback } from 'react';
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

export default function Dropzone({ id, text , SVG ,files,setFiles}) {
  const [highlight, setHighlight] = useState(false);

  // Handle the file drop event
  const handleDrop = useCallback((event) => {
    event.preventDefault();
    setHighlight(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  }, [files, setFiles]);
 

  // Handle the drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    setHighlight(true);
  };
  

  // Handle the drag leave event
  const handleDragLeave = () => {
    setHighlight(false);
  };

  // Handle the click event to trigger file input (if not using drag and drop)
  const handleClick = () => {
    document.getElementById(id).click();
  };

  // Handle the file selection (from the click)
  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={`w-full max-w-4xl border-4 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
          highlight ? 'bg-blue-100 border-blue-600' : 'bg-white border-gray-300'
        } shadow-lg transform hover:scale-105 `}
      >
        {SVG}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{text}</h3>
        <p className="text-lg text-gray-600 mb-6">
          Or click to select files.
        </p>

        <input
          id={id}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />

        {/* Display the selected files */}
        {files.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-medium text-gray-700">Selected Files:</h3>
            <ul className="mt-4 text-left">
              {files.map((file, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  <span className="font-medium">{file.name}</span> - {file.size} bytes
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
