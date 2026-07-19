import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../../Components/Auth/AuthLayout";
import useAuth from "../../Hooks/useAuth";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      return setError("Please enter your email.");
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent successfully!");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/user-not-found":
            setError("No account found with this email.");
            break;

          case "auth/invalid-email":
            setError("Invalid email address.");
            break;

          default:
            setError(err.message);
        }
      });
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email to receive a password reset link."
    >
      <form onSubmit={handleReset} className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white hover:bg-sky-700 transition"
        >
          Send Reset Link
        </button>
      </form>

      <p className="mt-6 text-center">
        Remember your password?

        <Link
          to="/login"
          className="ml-2 font-semibold text-sky-600"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;