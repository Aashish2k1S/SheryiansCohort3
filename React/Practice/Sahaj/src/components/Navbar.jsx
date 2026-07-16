import { ChevronDown, PhoneCall } from "lucide-react";

const Navbar = () => {
    return (
        <div className="p-4 flex flex-row items-center justify-between gap-4">
            <img
                className="w-20 border-2 border-white rounded"
                src="https://retail.sahaj.co.in/o/sahaj-non-loggedin-theme/images/logo.jpg"
                alt="logo"
            />

            <ul className="list-none flex flex-row items-center justify-center gap-4">
                <li>Home</li>
                <li className="flex flex-row items-center justify-center gap-1">
                    Services <ChevronDown size={16} strokeWidth={3} />
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                    Raise your concern
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                    Join us <ChevronDown size={16} strokeWidth={3} />
                </li>
                <li className="flex flex-row items-center justify-center gap-1">
                    {" "}
                    Talk to us <ChevronDown size={16} strokeWidth={3} />
                </li>
            </ul>
            <ul className="list-none flex flex-row items-center justify-center gap-4">
                <li className="w-14 cursor-pointer transition-all hover:scale-120">
                    <img
                        src="https://retail.sahaj.co.in/o/sahaj-non-loggedin-theme/images/bolobolo-icon.svg"
                        alt=""
                    />
                </li>
                <li>
                    <button
                        className="py-2 px-3 rounded-full bg-transparent text-amber-600 font-semibold border-2 border-amber-600 
                    flex flex-row items-center justify-center gap-1 transition-all 
                    hover:bg-amber-600 hover:text-white hover:scale-90"
                    >
                        <PhoneCall size={18} strokeWidth={3} /> Apply for BC
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
