import MulterUploadForm from './components/MulterUploadForm';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-100 p-4 transition-colors dark:bg-slate-950">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <MulterUploadForm />
    </main>
  );
}