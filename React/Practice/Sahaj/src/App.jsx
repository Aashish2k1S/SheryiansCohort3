import Routor from "./routes/Routor";
import Navbar from "./components/Navbar";

const App = () => {  
    return (
        <div className="h-screen w-screen bg-gray-900 text-white p-4">
            <Navbar />
            <Routor />
        </div>
    );
};

export default App;
