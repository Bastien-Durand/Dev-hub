import axios from "axios";
import validator from "validator";
import styles from "../Login/loginform.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

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
      const url = "https://dev-hub-backend-lbe88.ondigitalocean.app/login";
      // http://localhost:8080/login

      axios
        .post(url, {
          email: userData.email,
          password: userData.password,
        })
        .then(function (response) {
          if (response.data.status === 404) {
            alert(response.data.message);
          } else {
            console.log(response);
            currentToken = response.data.accessToken;
            console.log(`currentToken: ${currentToken}`);
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(userData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.loginFormLayout}
    >
      <div className={styles.formTitle}>
        <h1>Log in</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.firstFormDiv}>
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

          <a href="/">Create an account</a>
          <a href="/">Forgot password?</a>
        </div>
      </form>
      <hr
        style={{
          color: "grey",
          width: "300px",
          marginTop: "15px",
        }}
      />

      <button style={{ marginTop: "15px" }}>Login with Google</button>
    </motion.div>
  );
};

export default LoginForm;
