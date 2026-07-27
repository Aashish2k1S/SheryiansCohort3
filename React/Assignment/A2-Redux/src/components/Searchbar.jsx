import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/students/studentSlice";

const Searchbar = () => {
    const dispatch = useDispatch();

    const search = useSelector((state) => state.students.search);

    return (
        <div className="relative">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="w-full rounded-lg border py-3 pl-10 pr-4"
            />
        </div>
    );
};

export default Searchbar;
