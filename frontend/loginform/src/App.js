import CreateAccountForm from "./components/CreateAccountForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CreateAccountForm />
      <LoginForm />
    </div>
  );
};

export default App;
