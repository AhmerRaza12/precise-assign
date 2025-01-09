import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleClick = () => {
    document.getElementById("file").click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div>
      <label htmlFor="file" className="block text-gray-800 font-semibold mb-1">
     File Upload
      </label>

  
      <div
        className="flex flex-col items-center gap-4 bg-gray-100 text-3xl border-dashed border-2 border-black text-primary  rounded-lg  focus:outline-none focus:ring focus:ring-primary focus:border-primary w-full justify-center p-10"
        onClick={handleClick}  
        onDragOver={handleDragOver} 
        onDrop={handleDrop} 
        style={{ cursor: "pointer" }}
      >
        <MdOutlineFileUpload className="h-10 w-10 bg-black rounded-full p-2" />
        <p className="" >Drag the file or <span className=" text-black">browse </span></p>
      </div>

      <input
        type="file"
        id="file"
        className="hidden"
        onChange={handleFileSelect}
      />

      {file && (
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-500 text-sm">{file.name}</p>

          <button
            onClick={handleRemoveFile}
            className="text-red-500 text-sm cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
