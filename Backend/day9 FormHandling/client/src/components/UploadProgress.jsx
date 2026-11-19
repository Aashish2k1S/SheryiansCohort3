const UploadProgress = ({ progress }) => {
    if (progress === 0) return null;

    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Uploading...</span>
                <span>{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                    className="h-full rounded-full bg-indigo-600 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

export default UploadProgress; 