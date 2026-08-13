import { Link } from "react-router";

function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="px-6 py-40 md:px-10 md:py-48">
                <div className="mx-auto max-w-350">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        404 / Not Found
                    </p>

                    <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                        Nothing here.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-secondary">
                        The page you're looking for doesn't exist or may have
                        been moved.
                    </p>

                    <Link
                        to="/"
                        data-cursor="interactive"
                        className="py-4 mt-10 inline-flex text-sm text-accent transition-opacity hover:opacity-70"
                    >
                        ← Back to home
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default NotFound;
