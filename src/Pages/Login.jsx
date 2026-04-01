import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Registration successful");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log("Backend error:", error.response?.data);
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#f9f9f9]">
      {/* Left Side Image */}
      <section className="relative h-[320px] sm:h-[420px] md:h-screen overflow-hidden">
        <img
          src={assets.login_img || assets.about_img}
          alt="Fashion login"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute z-10 top-8 left-6 sm:top-10 sm:left-10">
          <h1 className="prata-regular text-2xl sm:text-3xl tracking-[0.25em] uppercase text-white">
            Forever
          </h1>
        </div>
      </section>

      {/* Right Side Form */}
      <section className="flex items-center justify-center px-6 py-14 sm:px-10 md:px-14 lg:px-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl text-gray-900 prata-regular sm:text-5xl">
              {currentState === "Login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="mt-3 text-sm tracking-wide text-gray-500">
              {currentState === "Login"
                ? "Sign in to your account"
                : "Create your account to continue"}
            </p>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-7">
            {currentState === "Sign Up" && (
              <div>
                <label className="block mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Your name"
                  required
                  className="w-full px-0 py-3 text-sm bg-transparent border-t-0 border-b border-gray-300 outline-none border-x-0 focus:border-black"
                />
              </div>
            )}

            <div>
              <label className="block mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="name@example.com"
                required
                className="w-full px-0 py-3 text-sm bg-transparent border-t-0 border-b border-gray-300 outline-none border-x-0 focus:border-black"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  Password
                </label>
                {currentState === "Login" && (
                    <Link to="/forgot-password" className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 cursor-pointer hover:text-black transition">
                    Forgot Password?
                  </p>
                </Link>
                )}
              </div>

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="••••••••"
                required
                className="w-full px-0 py-3 text-sm bg-transparent border-t-0 border-b border-gray-300 outline-none border-x-0 focus:border-black"
              />
            </div>

            {currentState === "Login" && (
              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label
                  htmlFor="remember"
                  className="text-[11px] uppercase tracking-[0.2em] text-gray-500"
                >
                  Remember me
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition disabled:opacity-70"
            >
              {loading
                ? currentState === "Login"
                  ? "Signing In..."
                  : "Creating Account..."
                : currentState === "Login"
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>

          <div className="relative flex items-center py-8">
            <div className="flex-grow border-t border-gray-200" />
            <span className="mx-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Or
            </span>
            <div className="flex-grow border-t border-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="border border-gray-300 py-4 text-[11px] uppercase tracking-[0.2em] text-gray-700 hover:bg-gray-50 transition">
              Google
            </button>
            <button className="border border-gray-300 py-4 text-[11px] uppercase tracking-[0.2em] text-gray-700 hover:bg-gray-50 transition">
              Apple
            </button>
          </div>

          <div className="pt-8 text-center">
            {currentState === "Login" ? (
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setCurrentState("Sign Up")}
                  className="font-semibold text-black cursor-pointer hover:underline"
                >
                  Create one
                </span>
              </p>
            ) : (
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrentState("Login")}
                  className="font-semibold text-black cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;