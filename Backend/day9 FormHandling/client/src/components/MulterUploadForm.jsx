import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import FileDropzone from './FileDropzone';
import UploadProgress from './UploadProgress';

const API_URL = 'http://localhost:5000/api/upload';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const MulterUploadForm = () => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState({ type: '', message: '' });

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            document: null,
        },
    });

    const onSubmit = async (values) => {
        setStatus({ type: '', message: '' });

        // 1. Build FormData from React Hook Form values
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('document', values.document); // Matches upload.single('document')

        try {
            const { data } = await axios.post(API_URL, formData, {
                onUploadProgress: (event) => {
                    if (event.total) {
                        setProgress(Math.round((event.loaded * 100) / event.total));
                    }
                },
            });

            setStatus({
                type: 'success',
                message: data.message || 'File uploaded successfully!',
            });
            reset(); // Clears all fields + FileDropzone
        } catch (err) {
            setStatus({
                type: 'error',
                message: err.response?.data?.message || 'Upload failed. Check your server.',
            });
        } finally {
            setTimeout(() => setProgress(0), 1000);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
        >
            <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Multer FormData Upload
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Powered by React Hook Form +{' '}
                    <code className="text-indigo-600 dark:text-indigo-400">
                        multipart/form-data
                    </code>
                </p>
            </div>

            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="e.g., Project Proposal"
                        {...register('title', {
                            required: 'Title is required',
                            minLength: { value: 3, message: 'Minimum 3 characters' },
                        })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                    {errors.title && (
                        <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Description
                    </label>
                    <textarea
                        rows={3}
                        placeholder="Optional notes sent in req.body..."
                        {...register('description')}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                </div>

                {/* File Dropzone via Controller */}
                <div>
                    <Controller
                        name="document"
                        control={control}
                        rules={{
                            required: 'Please select a file to upload',
                            validate: (file) =>
                                file.size <= MAX_FILE_SIZE || 'File must be 5 MB or smaller',
                        }}
                        render={({ field }) => (
                            <FileDropzone
                                file={field.value}
                                onFileSelect={field.onChange}
                                error={Boolean(errors.document)}
                            />
                        )}
                    />
                    {errors.document && (
                        <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                            {errors.document.message}
                        </p>
                    )}
                </div>
            </div>

            <UploadProgress progress={progress} />

            {status.message && (
                <div
                    className={`rounded-lg px-4 py-3 text-sm font-medium ${status.type === 'success'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                        }`}
                >
                    {status.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isSubmitting ? 'Uploading...' : 'Upload FormData'}
            </button>
        </form>
    );
}
export default MulterUploadForm; 