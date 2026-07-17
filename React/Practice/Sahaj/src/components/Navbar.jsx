import { RiWhatsappLine } from "@remixicon/react";
import {
    ChevronDown,
    MailPlus,
    MailWarning,
    MessagesSquare,
    Phone,
    PhoneCall,
    PhoneMissed,
    StarPlus,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const [nestMenu, setNestMenu] = useState("");

    const navigate = useNavigate();

    // console.log(nestMenu);

    return (
        <div className="mb-4 p-4 flex flex-row items-center justify-between gap-4 bg-white text-gray-500 rounded-3xl">
            <img
                className="w-20 border-2 border-amber-600 rounded"
                src="https://retail.sahaj.co.in/o/sahaj-non-loggedin-theme/images/logo.jpg"
                alt="logo"
            />

            <ul className="list-none flex flex-row items-center justify-center gap-4">
                <li
                    onClick={() => navigate("./")}
                    className="cursor-pointer hover:text-black hover:border-b hover:border-gray-black active:text-black"
                >
                    Home
                </li>

                <li
                    onMouseEnter={() => setNestMenu("services")}
                    onMouseLeave={() => setNestMenu("")}
                    className="flex flex-row items-center justify-center transition hover:text-black relative hover:border-gray-500"
                >
                    Services{" "}
                    <ChevronDown
                        size={16}
                        strokeWidth={3}
                        className={`transition-transform duration-300 ${
                            nestMenu === "services" ? "rotate-180" : ""
                        }`}
                    />
                    <ul
                        onMouseEnter={() => setNestMenu("services")}
                        onMouseLeave={() => setNestMenu("")}
                        className={`dropdown-menu list-none absolute top-6 bg-white py-3 px-4 
                            ${nestMenu === "services" ? "flex" : "hidden"} flex-col items-start justify-start flex-nowrap text-nowrap gap-2 shadow-2xl rounded-xl transition`}
                    >
                        <li>
                            <a
                                href="/web/guest/services/e-governances"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                E-Governance
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/services/banking"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Banking Services
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/services/payment"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Payment Services
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/services/e-learning"
                                role="button"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                E-Learning
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/services/tours-and-travels"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Tours &amp; Travels
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/services/earn-more"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Earn More
                            </a>
                        </li>{" "}
                    </ul>
                </li>
                <li  onClick={() => navigate("./about")} 
                className="cursor-pointer hover:text-black hover:border-b hover:border-gray-black active:text-black">
                    Raise your concern
                </li>
                <li
                    onMouseEnter={() => setNestMenu("join")}
                    onMouseLeave={() => setNestMenu("")}
                    className="flex flex-row items-center justify-center transition hover:text-black relative hover:border-gray-500"
                >
                    Join us{" "}
                    <ChevronDown
                        size={16}
                        strokeWidth={3}
                        className={`transition-transform duration-300 ${
                            nestMenu === "join" ? "rotate-180" : ""
                        }`}
                    />
                    <ul
                        onMouseEnter={() => setNestMenu("join")}
                        onMouseLeave={() => setNestMenu("")}
                        className={`dropdown-menu list-none absolute top-6 bg-white py-3 px-4 
                            ${nestMenu === "join" ? "flex" : "hidden"} flex-col items-start justify-start flex-nowrap text-nowrap gap-2 shadow-2xl rounded-xl transition`}
                    >
                        <li>
                            <a
                                href="/web/guest/joinuspage"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Register Now
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/registration1?p_p_id=SMRegistration_WAR_SMRegistration&amp;p_p_lifecycle=0&amp;p_p_state=normal&amp;p_p_mode=view&amp;_SMRegistration_WAR_SMRegistration_action=viewknowYourRegistrationStatus"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Continue Application
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/guest/knowyourregstatus"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                Check Status
                            </a>
                        </li>{" "}
                        <li>
                            <a
                                href="/web/retail/how_to_register"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                How to Register
                            </a>
                        </li>{" "}
                    </ul>
                </li>
                <li
                    onMouseEnter={() => setNestMenu("talk")}
                    onMouseLeave={() => setNestMenu("")}
                    className="flex flex-row items-center justify-center transition hover:text-black relative hover:border-gray-500"
                >
                    Talk to us{" "}
                    <ChevronDown
                        size={16}
                        strokeWidth={3}
                        className={`transition-transform duration-300 ${
                            nestMenu === "talk" ? "rotate-180" : ""
                        }`}
                    />
                    <ul
                        onMouseEnter={() => setNestMenu("talk")}
                        onMouseLeave={() => setNestMenu("")}
                        className={`dropdown-menu list-none absolute top-6 bg-white py-3 px-4 
                            ${nestMenu === "talk" ? "flex" : "hidden"} flex-col items-start justify-start flex-nowrap text-nowrap gap-2 shadow-2xl rounded-xl transition`}
                    >
                        <li>
                            <a
                                href="tel:+918388088088"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <Phone size={16} strokeWidth={3} />{" "}
                                <strong>Mobile:</strong> +91-8388-088-088
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send/?phone=917605082854&amp;text=Hello%2C+I%27m+interested+in+Sahaj+services.&amp;type=phone_number&amp;app_absent=0"
                                target="_blank"
                                aria-label="Chat with us on WhatsApp at 7605082854"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <RiWhatsappLine size={18} />{" "}
                                <strong>WhatsApp:</strong> 7605082854
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:08069046500"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <PhoneMissed size={16} strokeWidth={3} />{" "}
                                <strong>Missed Call:</strong> 08069046500
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:support@sahaj.co.in"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <MailPlus size={16} strokeWidth={3} />{" "}
                                <strong>Email:</strong> support@sahaj.co.in
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:grievance@sahaj.co.in"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <MailWarning size={16} strokeWidth={3} />{" "}
                                <strong>Escalation:</strong>{" "}
                                grievance@sahaj.co.in
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.sahaj.sahajmitr&amp;pli=1"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <MessagesSquare size={16} strokeWidth={3} />{" "}
                                <strong>Start a Chat:</strong> Click On
                            </a>
                        </li>
                        <li>
                            <a
                                href="/training1?action=trainingSchedule"
                                className="dropdown-item decoration-0 text-gray-500 flex flex-row items-center justify-center gap-2 transition hover:text-black hover:border-b hover:border-black"
                            >
                                <StarPlus size={16} strokeWidth={3} />{" "}
                                <strong>Join Training</strong>
                            </a>
                        </li>
                    </ul>
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
                        className="icon py-2 px-3 rounded-full bg-transparent text-amber-600 font-semibold border-2 border-amber-600 
                    flex flex-row items-center justify-center gap-1 transition-all 
                    hover:bg-amber-600 hover:text-white hover:scale-95"
                    >
                        <PhoneCall size={18} strokeWidth={3} /> Apply for BC
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
