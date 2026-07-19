import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">

            <input
                {...props}
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

        </div>
    );
};

export default PasswordInput;