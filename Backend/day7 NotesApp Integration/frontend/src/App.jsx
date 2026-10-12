import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, FileText, StickyNote } from "lucide-react";

const App = () => {
    const [notes, setNotes] = useState([]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { title: "", description: "" } });

    const onSubmit = (data) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: data.title.trim(),
            description: data.description.trim(),
            createdAt: new Date().toLocaleDateString(),
        };

        setNotes((prev) => [newNote, ...prev]);
        reset();
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-200">
                        <StickyNote size={30} />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Notes App
                    </h1>

                    <p className="mt-3 text-sm text-slate-500 sm:text-base">
                        Organize your thoughts. Keep your ideas in one place.
                    </p>
                </header>

                {/* Note Form */}
                <section className="mx-auto mb-12 max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
                            <Plus size={22} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">
                                Create a note
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Write down something worth remembering.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                        noValidate
                    >
                        <div>
                            <label
                                htmlFor="title"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                placeholder="Enter note title"
                                {...register("title", {
                                    required: "Title is required",
                                    validate: (value) =>
                                        value.trim().length > 0 ||
                                        "Title cannot be empty",
                                    maxLength: {
                                        value: 100,
                                        message:
                                            "Title cannot exceed 100 characters",
                                    },
                                })}
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                aria-invalid={!!errors.title}
                            />

                            {errors.title && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Description
                            </label>

                            <textarea
                                id="description"
                                rows={4}
                                placeholder="Write your thoughts here..."
                                {...register("description", {
                                    required: "Description is required",
                                    validate: (value) =>
                                        value.trim().length > 0 ||
                                        "Description cannot be empty",
                                })}
                                className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                aria-invalid={!!errors.description}
                            />

                            {errors.description && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >
                            <Plus size={19} />
                            Add Note
                        </button>
                    </form>
                </section>

                {/* Notes Grid */}
                <section>
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">
                                Your Notes
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                All your thoughts, in one place.
                            </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                            {notes.length}{" "}
                            {notes.length === 1 ? "note" : "notes"}
                        </span>
                    </div>

                    {notes.length === 0 ? (
                        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                                <FileText size={28} />
                            </div>

                            <h3 className="text-lg font-semibold text-slate-700">
                                No notes yet
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Create your first note using the form above.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {notes.map((note) => (
                                <article
                                    key={note.id}
                                    className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg sm:p-6"
                                >
                                    <div className="mb-4 flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <h3 className="wrap-break-word text-lg font-semibold text-slate-800">
                                                {note.title}
                                            </h3>
                                            <p className="mt-1 text-xs text-slate-400">
                                                {note.createdAt}
                                            </p>
                                        </div>

                                        <div className="shrink-0 rounded-lg bg-indigo-50 p-2 text-indigo-600">
                                            <FileText size={18} />
                                        </div>
                                    </div>

                                    <p className="mb-6 flex-1 whitespace-pre-wrap wrap-break-word text-sm leading-7 text-slate-600">
                                        {note.description}
                                    </p>

                                    <div className="border-t border-slate-100 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => deleteNote(note.id)}
                                            aria-label={`Delete note: ${note.title}`}
                                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
                                        >
                                            <Trash2 size={16} />
                                            Delete
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default App;
