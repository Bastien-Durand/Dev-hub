import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create" element={<CreateAccountPage />} />
      </Routes>
    </>
  );
};

export default App;
