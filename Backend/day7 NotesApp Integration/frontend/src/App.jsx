import { useState } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (data) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: data.title.trim(),
            description: data.description.trim(),
            createdAt: new Date().toLocaleDateString(),
        };
        setNotes((prev) => [newNote, ...prev]);
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080b18] px-4 py-10 text-white sm:px-6 lg:px-8">
            <Background />
            <div className="relative mx-auto max-w-7xl">
                <Header />
                <NoteForm onAddNote={addNote} />
                <NotesList notes={notes} onDeleteNote={deleteNote} />
                <Footer />
            </div>
        </main>
    );
};

export default App;