import Dashboard from "../components/Dashboard";
import Filter from "../components/Filter";
import Searchbar from "../components/Searchbar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

                <p>Welcome to the Student Management Dashboard.</p>
            </div>

            <Dashboard />

            <div className="my-6">
                <Searchbar />
                <Filter />
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
