import { useRef, useState } from 'react';

const FileDropzone = ({ file, onFileSelect, error }) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (selectedFile) => {
    if (selectedFile) onFileSelect(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
        error
          ? 'border-rose-500 bg-rose-50/50 dark:border-rose-500 dark:bg-rose-950/30'
          : isDragging
            ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40'
            : 'border-slate-300 bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => handleFile(e.target.files[0])}
        className="hidden"
      />

      {file ? (
        <div className="flex flex-col items-center gap-3">
          {file.type.startsWith('image/') && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-28 w-28 rounded-lg object-cover shadow-sm"
            />
          )}
          <div className="text-sm">
            <p className="font-medium text-slate-800 dark:text-slate-100">
              {file.name}
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              {(file.size / 1024).toFixed(1)} KB — Click or drop to replace
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            PNG, JPG, WEBP, or PDF (max 5 MB)
          </p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone; 