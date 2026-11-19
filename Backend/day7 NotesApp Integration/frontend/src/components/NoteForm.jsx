import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";

const NoteForm = ({ onAddNote }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: { title: "", description: "" } });

    const onSubmit = (data) => {
        onAddNote(data);
        reset();
    };

    // Note: text-base on mobile prevents iOS input zoom, switching to text-sm on tablet (md)
    const fieldClass =
        "w-full rounded-xl md:rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 md:py-3.5 text-base md:text-sm text-white shadow-inner shadow-black/10 outline-none backdrop-blur-xl transition placeholder:text-slate-400 focus:border-cyan-300/60 focus:bg-white/[0.09] focus:ring-4 focus:ring-cyan-300/10";

    return (
        <section className="mx-auto mb-12 md:mb-16 max-w-2xl rounded-3xl md:rounded-4xl border border-white/15 bg-white/[0.07] p-5 md:p-7 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
            <div className="mb-6 md:mb-7 flex items-center gap-4">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <Plus size={20} className="md:w-5.75 md:h-5.75" />
                </div>
                <div>
                    <h2 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                        Create a note
                    </h2>
                    <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-slate-300/65">
                        Capture a thought before it drifts away.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5" noValidate>
                <div>
                    <label htmlFor="title" className="mb-1.5 md:mb-2 block text-sm font-medium text-slate-200">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Give your note a name..."
                        {...register("title", {
                            required: "Title is required",
                            validate: (value) => value.trim().length > 0 || "Title cannot be empty",
                            maxLength: { value: 100, message: "Title cannot exceed 100 characters" },
                        })}
                        className={fieldClass}
                        aria-invalid={!!errors.title}
                    />
                    {errors.title && (
                        <p className="mt-2 text-xs md:text-sm text-rose-300">{errors.title.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="description" className="mb-1.5 md:mb-2 block text-sm font-medium text-slate-200">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={4}
                        placeholder="Let your thoughts flow..."
                        {...register("description", {
                            required: "Description is required",
                            validate: (value) => value.trim().length > 0 || "Description cannot be empty",
                        })}
                        className={`${fieldClass} resize-y leading-relaxed`}
                        aria-invalid={!!errors.description}
                    />
                    {errors.description && (
                        <p className="mt-2 text-xs md:text-sm text-rose-300">{errors.description.message}</p>
                    )}
                </div>

                {/* Stacks on mobile, aligns horizontally on tablet/desktop */}
                <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-slate-400/80 text-center md:text-left order-2 md:order-1">
                        Your ideas, collected in one place.
                    </p>
                    <button
                        type="submit" 
                        disabled={isSubmitting}
                        className="order-1 md:order-2 inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-xl md:rounded-2xl border border-cyan-100/30 bg-linear-to-r from-cyan-300/90 to-violet-300/90 px-5 py-3 font-semibold text-slate-950 shadow-[0_8px_30px_rgba(103,232,249,0.18),inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(103,232,249,0.28)] focus:outline-none focus:ring-4 focus:ring-cyan-200/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <Plus size={18} />
                        Add note
                    </button>
                </div>
            </form>
        </section>
    );
};

export default NoteForm;