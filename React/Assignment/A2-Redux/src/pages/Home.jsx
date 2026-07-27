import Dashboard from "../components/Dashboard";
import Searchbar from "../components/Searchbar";
import Filter from "../components/Filter";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
    return (
        <>
            <div className="mb-8">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>Welcome to the Student Management Dashboard.</p>
            </div>

            <Dashboard />

            <div className="my-6 flex items-center justify-between gap-4">
                <Searchbar /> <Filter />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <StudentForm />
                </div>

                <div className="lg:col-span-2">
                    <StudentList />
                </div>
            </div>
        </>
    );
};

export default Home;
