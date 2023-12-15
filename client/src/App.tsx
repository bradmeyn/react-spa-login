import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/shared/ProtectedRoute";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
