import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navigation/Navbar";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./index.css";

const App = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          display: "grid",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateAccountPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
