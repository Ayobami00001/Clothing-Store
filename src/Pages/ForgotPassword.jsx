import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../Context/ShopContext";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Please enter your email");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${backendUrl}/api/user/forgot-password`,
        { email }
      );

      if (data.success) {
        toast.success(data.message || "Reset link sent to your email");
        setEmail("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Failed to send reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md p-8 bg-white border shadow-md rounded-2xl"
      >
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Forgot Password
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Enter your email address and we’ll send you a password reset link.
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email Address
          </label>

          <div className="flex items-center px-3 py-3 border rounded-xl">
            <Mail className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-sm outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;