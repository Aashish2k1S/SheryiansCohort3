import { useSelector } from "react-redux";

const Dashboard = () => {
    const students = useSelector((state) => state.student.students);


    const totalStudents = students.length;

    const activeStudents = students.filter((student) => student.status === "Active").length;

    const inactiveStudents = students.filter((student) => student.status === "Inactive").length;

    const departments = new Set(students.map((student) => student.department)).size;

    const cards = [
        {
            title: "Total Students",
            value: totalStudents,
        },
        {
            title: "Active Students",
            value: activeStudents,
        },
        {
            title: "Inactive Students",
            value: inactiveStudents,
        },
        {
            title: "Departments",
            value: departments,
        },
    ];

    

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="rounded-xl border bg-white p-6 shadow-sm"
                >
                    <h3 className="text-gray-500 text-sm font-medium">
                        {card.title}
                    </h3>

                    <p className="mt-2 text-3xl font-bold">{card.value}</p>
                </div>
            ))}
        </section>
    );
};

export default Dashboard;
