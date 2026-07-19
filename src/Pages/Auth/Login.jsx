import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import AuthLayout from "../../Components/Auth/AuthLayout";
import PasswordInput from "../../Components/Auth/PasswordInput";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const { signIn, googleSignIn } = useAuth();

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();

        setError("");

        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Login Successful!");

                form.reset();

                navigate(from, { replace: true });
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-credential":
                        setError("Invalid email or password.");
                        break;

                    case "auth/user-not-found":
                        setError("No account found with this email.");
                        break;

                    case "auth/wrong-password":
                        setError("Incorrect password.");
                        break;

                    default:
                        setError(err.message);
                }
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google Login Successful!");

                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <AuthLayout
            title="Welcome Back 👋"
            subtitle="Sign in to continue your journey"
        >
            <form onSubmit={handleLogin} className="space-y-5">

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Password */}

                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <PasswordInput
                        name="password"
                        required
                        placeholder="Enter your password"
                    />
                </div>

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-sky-600 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {error && (
                    <p className="rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-sky-700"
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

            {/* Google Login */}

            <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full rounded-xl border border-gray-300 py-3 flex items-center justify-center gap-3 transition hover:bg-gray-100"
            >
                <FcGoogle size={22} />

                Continue with Google
            </button>

            <p className="mt-8 text-center text-gray-600">
                Don't have an account?

                <Link
                    to="/register"
                    className="ml-2 font-semibold text-sky-600 hover:underline"
                >
                    Register
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Login;