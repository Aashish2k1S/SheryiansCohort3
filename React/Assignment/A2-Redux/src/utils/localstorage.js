const STORAGE_KEY = "students";

export const loadStudents = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);

        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to load students:", error);
        return [];
    }
};

export const saveStudents = (students) => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(students)
        );
    } catch (error) {
        console.error("Failed to save students:", error);
    }
};