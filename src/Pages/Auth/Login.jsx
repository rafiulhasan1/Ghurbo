import { Link } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";
import PasswordInput from "../../Components/Auth/PasswordInput";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <AuthLayout
            title="Welcome Back 👋"
            subtitle="Sign in to continue your journey"
        >
            <form className="space-y-5">

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Password */}

                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <PasswordInput
                        placeholder="Enter your password"
                    />
                </div>

                <div className="text-right">

                    <Link
                        to="/forgot-password"
                        className="text-sky-600 hover:underline flex justify-end"
                    >
                        Forgot Password?
                    </Link>

                </div>

                <button
                    className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:scale-[1.02]"
                >
                    Login
                </button>

            </form>

            {/* Divider */}

            <div className="my-8 flex items-center">
                <div className="h-px flex-1 bg-gray-300"></div>

                <span className="px-4 text-gray-500">
                    OR
                </span>

                <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            {/* Google */}

            <button className="w-full rounded-xl border border-gray-300 py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition">

                <FcGoogle size={22} />

                Continue with Google

            </button>

            <p className="mt-8 text-center">

                Don't have an account?

                <Link
                    to="/register"
                    className="ml-2 font-semibold text-sky-600"
                >
                    Register
                </Link>

            </p>

        </AuthLayout>
    );
};

export default Login;