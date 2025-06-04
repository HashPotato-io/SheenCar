import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import { UploadIcon } from "../icons";
import { CustomButton } from "./custom-button";

interface FileWithPreview extends File {
  preview?: string;
}

const CustomFileUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageAndVideoFiles = files.filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );

    if (imageAndVideoFiles.length + selectedFiles.length <= 10) {
      setSelectedFiles((prev) => [...prev, ...imageAndVideoFiles].slice(0, 10));
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const imageAndVideoFiles = files.filter(
      (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
    );

    if (imageAndVideoFiles.length + selectedFiles.length <= 10) {
      setSelectedFiles((prev) => [...prev, ...imageAndVideoFiles].slice(0, 10));
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="flex flex-col gap-[12px] w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[26px] font-[400] leading-[100%] tracking-[-1%] text-black font-['Gilroy-SemiBold']">
          Upload Images
        </h2>
        <p className="text-[12px] font-[400] leading-[100%] tracking-[0%] text-[#696969] font-['Poppins']">
          *You can upload maximum up to 10 images and 1 video.
        </p>
      </div>

      <div
        className={`
          relative w-full h-48 rounded-lg border-2 border-dashed bg-white p-6
          flex flex-col items-center justify-center gap-3 cursor-pointer
          transition-colors duration-200
          ${
            isDragOver
              ? "border-green-600 bg-green-50"
              : "border-green-700 hover:border-green-600 hover:bg-gray-50"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="w-12 h-12 flex items-center justify-center">
          <UploadIcon />
        </div>

        <div className="flex flex-col items-center gap-[8px] text-center">
          <p className="text-[14px] font-[400] leading-[100%] tracking-[0%] text-[#585353] font-['Poppins'] mb-1">
            Drag your file(s) to start uploading
          </p>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-[78.5px] flex-1 bg-[#E7E7E7]"></div>
            <p className="text-[14px] font-[400] leading-[100%] tracking-[0%] text-[#585353] font-['Poppins']">
              OR
            </p>
            <div className="h-[1px] flex-1 w-[78.5px] bg-[#E7E7E7]"></div>
          </div>
          <CustomButton
            variant="outline"
            customStyles={{ width: "134px", height: "40px" }}
            outlineColor="#003A2F"
          >
            Browse Files
          </CustomButton>
        </div>
      </div>

      {selectedFiles?.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Selected Files ({selectedFiles.length}/10)
          </h3>
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <UploadIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomFileUpload;
