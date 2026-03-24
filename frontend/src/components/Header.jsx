import React from "react";
import { LogOut, Stone, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signout } = useAuth();
  return (
    <header className="w-full border-b border-gray-300">
      <div className="container mx-auto px-2 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-1">
            <Stone className="size-8" />
            <span className="text-2xl font-bold">FlowLog</span>
          </Link>
          <nav className="flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="signin"
                  className="border border-gray-300 rounded-lg px-8 py-2 hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                >
                  Sign In
                </Link>
                <Link
                  to="signup"
                  className="bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="profile"
                  className="flex items-center gap-1 bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                >
                  <User />
                  <span>{user.username}</span>
                </Link>
                <button
                  onClick={signout}
                  className="border border-gray-300 rounded-lg px-8 py-2 hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  <LogOut />
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
