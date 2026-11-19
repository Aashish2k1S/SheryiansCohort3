import { Sparkles, StickyNote } from "lucide-react";

const Header = () => {
    return (
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
                A calm space for your thoughts, ideas, and little sparks of inspiration.
            </p>
        </header>
    );
};

export default Header;