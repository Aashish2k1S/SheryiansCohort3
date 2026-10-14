import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, FileText, StickyNote, Sparkles } from "lucide-react";

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

    const fieldClass =
        "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white shadow-inner shadow-black/10 outline-none backdrop-blur-xl transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:bg-white/[0.09] focus:ring-4 focus:ring-cyan-300/10";

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080b18] px-4 py-10 text-white sm:px-6 lg:px-8">
            {/* Ambient color blooms behind the glass surfaces */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 overflow-hidden"
            >
                <div className="absolute -left-32 -top-28 h-96 w-96 rounded-full bg-violet-600/25 blur-[110px]" />
                <div className="absolute -right-20 top-1/4 h-112 w-md rounded-full bg-cyan-500/15 blur-[130px]" />
                <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <header className="mb-12 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.18em] text-cyan-100/90 shadow-lg shadow-black/10 backdrop-blur-2xl">
                        <Sparkles size={14} />
                        YOUR PERSONAL SPACE
                    </div>

                    <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-3xl border border-white/25 bg-linear-to-br from-white/20 to-white/4 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_40px_rgba(34,211,238,0.12)] backdrop-blur-2xl">
                        <StickyNote size={32} strokeWidth={1.6} />
                    </div>

                    <h1 className="bg-linear-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                        Notes <span className="font-light">Studio</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300/75 sm:text-base">
                        A calm space for your thoughts, ideas, and little sparks
                        of inspiration.
                    </p>
                </header>

                {/* Glass note form */}
                <section className="mx-auto mb-14 max-w-2xl rounded-4xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:p-8">
                    <div className="mb-7 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                            <Plus size={23} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight text-white">
                                Create a note
                            </h2>
                            <p className="mt-1 text-sm text-slate-300/65">
                                Capture a thought before it drifts away.
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
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Give your note a name..."
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
                                className={fieldClass}
                                aria-invalid={!!errors.title}
                            />
                            {errors.title && (
                                <p className="mt-2 text-sm text-rose-300">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium text-slate-200"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                placeholder="Let your thoughts flow..."
                                {...register("description", {
                                    required: "Description is required",
                                    validate: (value) =>
                                        value.trim().length > 0 ||
                                        "Description cannot be empty",
                                })}
                                className={`${fieldClass} resize-y leading-7`}
                                aria-invalid={!!errors.description}
                            />
                            {errors.description && (
                                <p className="mt-2 text-sm text-rose-300">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-slate-400/80">
                                Your ideas, collected in one place.
                            </p>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-100/30 bg-linear-to-r from-cyan-300/90 to-violet-300/90 px-5 py-3 font-semibold text-slate-950 shadow-[0_8px_30px_rgba(103,232,249,0.18),inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(103,232,249,0.28)] focus:outline-none focus:ring-4 focus:ring-cyan-200/20 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Plus size={18} />
                                Add note
                            </button>
                        </div>
                    </form>
                </section>

                {/* Notes collection */}
                <section>
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                                Your collection
                            </p>
                            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                Your notes
                            </h2>
                            <p className="mt-2 text-sm text-slate-300/65">
                                Every idea has a place to land.
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-slate-100 shadow-lg shadow-black/10 backdrop-blur-xl">
                            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                            {notes.length}{" "}
                            {notes.length === 1 ? "note" : "notes"}
                        </span>
                    </div>

                    {notes.length === 0 ? (
                        <div className="rounded-4xl border border-dashed border-white/20 bg-white/[0.035] px-6 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-slate-300/80 shadow-inner">
                                <FileText size={29} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-medium text-white">
                                Nothing here just yet
                            </h3>
                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-300/60">
                                Your next great idea might be one note away. Use
                                the form above to get started.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {notes.map((note) => (
                                <article
                                    key={note.id}
                                    className="group flex min-w-0 flex-col rounded-[1.75rem] border border-white/15 bg-white/6.5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/9 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25),0_0_30px_rgba(34,211,238,0.06)] sm:p-6"
                                >
                                    <div className="mb-4 flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <h3 className="wrap-break-word text-lg font-semibold leading-snug text-white">
                                                {note.title}
                                            </h3>
                                            <p className="mt-2 text-xs text-slate-400">
                                                {note.createdAt}
                                            </p>
                                        </div>
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/15 bg-violet-200/8 text-violet-100/90">
                                            <FileText
                                                size={18}
                                                strokeWidth={1.6}
                                            />
                                        </div>
                                    </div>

                                    <p className="mb-6 flex-1 wrap-break-word whitespace-pre-wrap text-sm leading-7 text-slate-200/75">
                                        {note.description}
                                    </p>

                                    <div className="border-t border-white/10 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => deleteNote(note.id)}
                                            aria-label={`Delete note: ${note.title}`}
                                            className="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-rose-300/90 transition hover:border-rose-300/20 hover:bg-rose-300/10 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/20"
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

                <footer className="mt-16 pb-2 text-center text-xs text-slate-500/80">
                    Made for your next bright idea{" "}
                    <span className="text-cyan-200">✦</span>
                </footer>
            </div>
        </main>
    );
};

export default App;
