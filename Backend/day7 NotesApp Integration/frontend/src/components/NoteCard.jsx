import { FileText, Trash2 } from "lucide-react";

const NoteCard = ({ note, onDelete }) => {
    return (
        <article className="group flex min-w-0 flex-col rounded-[1.75rem] border border-white/15 bg-white/6.5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/9 hover:shadow-[0_24px_60px_rgba(0,0,0,0.25),0_0_30px_rgba(34,211,238,0.06)] sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="wrap-break-word text-lg font-semibold leading-snug text-white">
                        {note.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400">{note.createdAt}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/15 bg-violet-200/8 text-violet-100/90">
                    <FileText size={18} strokeWidth={1.6} />
                </div>
            </div>

            <p className="mb-6 flex-1 wrap-break-word whitespace-pre-wrap text-sm leading-7 text-slate-200/75">
                {note.description}
            </p>

            <div className="border-t border-white/10 pt-4">
                <button
                    type="button"
                    onClick={() => onDelete(note.id)}
                    aria-label={`Delete note: ${note.title}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-rose-300/90 transition hover:border-rose-300/20 hover:bg-rose-300/10 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300/20"
                >
                    <Trash2 size={16} />
                    Delete
                </button>
            </div>
        </article>
    );
};

export default NoteCard;