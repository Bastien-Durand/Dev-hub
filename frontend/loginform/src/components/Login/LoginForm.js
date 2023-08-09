import axios from "axios";
import validator from "validator";
import "../Login/loginform.css";
import { useState } from "react";

var currentToken = "";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(userData.email)) {
      const url = "http://localhost:8080/login";

      axios
        .post(url, {
          email: userData.email,
          password: userData.password,
        })
        .then(function (response) {
          currentToken = response.data.accessToken;
          console.log(`currentToken: ${currentToken}`);
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(userData);
    }
  };

  return (
    <div className="loginFormLayout">
      <div className="formTitle">
        <h1>Log in</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="firstFormDiv">
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeHandler}
              value={userData.email}
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
              value={userData.password}
              required
              min={6}
              max={20}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
              title="
                  Password must be between 6 to 20 characters &#013; and contain at
                  least one numeric digit, one uppercase and one lowercase
                  letter
              "
            />
          </label>
          <label></label>

          <button type="submit">Log in</button>

          <a href="#">Create an account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
