import { createContext, useContext, useEffect, useState } from "react";

export const MoodContext = createContext();

const API_URL = "http://localhost:5000/board";

export const MoodProvider = ({ children }) => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMoods = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/mood`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setMoods(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createMood = async (mood) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/mood`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mood),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setMoods((prev) => [...prev, data.mood]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteMood = async (mood) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/mood/${mood._id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setMoods((prev) => prev.filter((m) => m._id !== mood._id));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoods();
  }, []);

  return (
    <MoodContext.Provider
      value={{
        moods,
        loading,
        error,
        createMood,
        deleteMood,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);

  if (!context) {
    throw new Error("useTodo must be used within TodoProvider");
  }

  return context;
};
