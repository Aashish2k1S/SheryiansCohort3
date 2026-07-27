import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/features/students/studentSlice";

const Filter = () => {
    const dispatch = useDispatch();

    const { filter } = useSelector((state) => state.students);

    return (
        <select
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            className="w-full rounded-lg border p-3"
        >
            <option value="All">All Students</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>

            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="Mechanical">Mechanical</option>
        </select>
    );
};

export default Filter;