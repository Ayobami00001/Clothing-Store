import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate, useParams } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

const ResetPassword = () => {
  const { backendUrl } = useContext(ShopContext);
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      return toast.error("Please fill in all fields");
    }

    if (newPassword.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${backendUrl}/api/user/reset-password`,
        {
          token,
          newPassword,
        }
      );

      if (data.success) {
        toast.success(data.message || "Password reset successful");
        navigate("/login");
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Invalid or expired reset link"
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
            Reset Password
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Enter your new password below.
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            New Password
          </label>

          <div className="flex items-center px-3 py-3 border rounded-xl">
            <LockKeyhole className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full text-sm outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <div className="flex items-center px-3 py-3 border rounded-xl">
            <LockKeyhole className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full text-sm outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;