import { FileText } from "lucide-react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, onDeleteNote }) => {
    return (
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
                    {notes.length} {notes.length === 1 ? "note" : "notes"}
                </span>
            </div>

            {notes.length === 0 ? (
                <div className="rounded-4xl border border-dashed border-white/20 bg-white/[0.035] px-6 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-slate-300/80 shadow-inner">
                        <FileText size={29} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium text-white">Nothing here just yet</h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-300/60">
                        Your next great idea might be one note away. Use the form above to get started.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note) => (
                        <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default NotesList;