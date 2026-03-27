import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { MoodProvider } from "./context/MoodContext";

import Layout from "./layout/Layout";
import ProtectedLayout from "./layout/ProtectedLayout";
import GuestLayout from "./layout/GuestLayout";

import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <AuthProvider>
      <MoodProvider>
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
      </MoodProvider>
    </AuthProvider>
  );
};

export default App;
