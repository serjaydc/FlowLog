import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

import Layout from "./layout/Layout";
import ProtectedLayout from "./layout/ProtectedLayout";
import GuestLayout from "./layout/GuestLayout";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route element={<GuestLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Route>

              <Route element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  );
};

export default App;
