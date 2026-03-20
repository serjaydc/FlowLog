import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const API_URL = "http://localhost:5000/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setError(null);

    try {
      const res = await fetch(`${API_URL}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setUser(null);
        return;
      }

      setUser(data);
    } catch (error) {
      setUser(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signin = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      await fetchProfile();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username, email, password) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      await fetchProfile();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/signout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Logout failed");
        return;
      }

      setUser(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
