const Background = () => {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-28 h-96 w-96 rounded-full bg-violet-600/25 blur-[110px]" />
            <div className="absolute -right-20 top-1/4 h-112 w-md rounded-full bg-cyan-500/15 blur-[130px]" />
            <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
        </div>
    );
};

export default Background;