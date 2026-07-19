import { Link } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";
import PasswordInput from "../../Components/Auth/PasswordInput";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Register = () => {

    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setError("");

        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const photo = form.photo.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const terms = form.terms.checked;

        if (!name) {
            return setError("Full name is required.");
        }

        if (!email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                return setError("Please enter a valid email address.");
            }
            return setError("Email is required.");
        }

        if (password.length < 8) {
            return setError("Password must be at least 8 characters.");
        }

        if (!/[A-Z]/.test(password)) {
            return setError("Password must contain at least one uppercase letter.");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Password must contain at least one lowercase letter.");
        }

        if (!/\d/.test(password)) {
            return setError("Password must contain at least one number.");
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return setError("Password must contain at least one special character.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        if (!terms) {
            return setError("Please accept the Terms & Conditions.");
        }

        console.log({
            name,
            email,
            photo,
            password,
        });
    };

    return (
        <AuthLayout
            title="Create Your Account ✨"
            subtitle="Start your next journey with GHURBO"
        >
            <form onSubmit={handleRegister} className="space-y-5">

                {/* Full Name */}
                <div>
                    <label className="block mb-2 font-medium">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-2 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Photo URL */}
                <div>
                    <label className="block mb-2 font-medium">
                        Photo URL
                    </label>

                    <input
                        type="text"
                        name="photo"
                        placeholder="Optional"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-2 font-medium">
                        Password
                    </label>

                    <PasswordInput
                        name="password"
                        placeholder="Create a password"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block mb-2 font-medium">
                        Confirm Password
                    </label>

                    <PasswordInput
                        name="confirmPassword"
                        placeholder="Confirm your password"
                    />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="mt-1"
                    />

                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <span className="text-sky-600 font-medium">
                            Terms & Conditions
                        </span>
                    </label>
                </div>

                {
                    error && (
                        <p className="rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-600">
                            {error}
                        </p>
                    )
                }

                {/* Register Button */}
                <button
                    className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:scale-[1.02]"
                >
                    Create Account
                </button>

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google */}
            <button className="w-full rounded-xl border border-gray-300 py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition">

                <FcGoogle size={22} />

                Continue with Google

            </button>

            <p className="text-center mt-8">
                Already have an account?

                <Link
                    to="/login"
                    className="ml-2 text-sky-600 font-semibold"
                >
                    Login
                </Link>
            </p>

        </AuthLayout>
    );
};

export default Register;