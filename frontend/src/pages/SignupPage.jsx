import { ArrowLeft, Mail, Stone, User, Lock } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const SignupPage = () => {
  const { user, signup, loading, error } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signup(username, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <section className="w-full h-screen pt-20">
      <div className="max-w-1/5 mx-auto px-4 py-4 bg-white border border-gray-300 rounded-xl">
        <div className="text-center mb-4">
          <div className="flex justify-center items-center gap-1 mb-2">
            <Stone className="size-8" />
            <span className="text-2xl font-bold">FlowLog</span>
          </div>
          <p className="text-neutral-500">Create your account to get started</p>
        </div>
        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm mb-1">
              Username
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <User className="text-neutral-500 size-5" />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=" outline-none placeholder:text-sm placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <Mail className="text-neutral-500 size-5" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" outline-none placeholder:text-sm placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <Lock className="text-neutral-500 size-5" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" outline-none placeholder:text-sm placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm mb-1">
              Confirm Password
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <Lock className="text-neutral-500 size-5" />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" outline-none placeholder:text-sm placeholder:text-neutral-500"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full  bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <div className="flex justify-center items-center gap-1 mb-8">
          <p className="text-neutral-500">Already have an account?</p>
          <Link to="/signin" className="hover:underline">
            Sign In
          </Link>
        </div>
        <div className="flex justify-center items-center gap-1 text-neutral-500 hover:text-black">
          <ArrowLeft className="size-5" />
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
