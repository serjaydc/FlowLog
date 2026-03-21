import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const API_URL = "http://localhost:5000/tasks";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/todo`, {
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

      setTodos(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createTodo = async (todo) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/todo`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setTodos((prev) => [...prev, data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (todo) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/todo/${todo._id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setTodos((prev) => prev.map((t) => (t._id === todo._id ? data : t)));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (todo) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/todo/${todo._id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setTodos((prev) => prev.filter((t) => t._id !== todo._id));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        getTodos,
        createTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within TodoProvider");
  }

  return context;
};
