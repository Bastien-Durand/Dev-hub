import axios from "axios";
import validator from "validator";
import styles from "../CreateAccount/createaccountform.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const CreateAccountForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isEmail(userData.email)) {
      const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (userData.password.match(passwordValidation)) {
        const url = "http://localhost:8080/create";
        // http://localhost:8080/create

        axios
          .post(url, {
            email: userData.email,
            password: userData.password,
          })
          .then(function (response) {
            if (response.status === 200) {
              console.log(response);
              alert(response.data.message);
            } else {
              alert("There was an error");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        return alert(
          "Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
        );
      }
    } else {
      return alert("Enter Valid Email");
    }

    console.log(userData);
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.createAccountFormLayout}
    >
      <div>
        <h1>Create a new account</h1>
      </div>
      <div className={styles.formSubtext}>
        <p>It's quick and easy.</p>
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
          <label>
            <div
              className={styles.termsAndConditionsLayout}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className={styles.termsAndConditions}>
                People who use our service may have uploaded your contact
                information to this service. <a href="/">Learn more</a>.
              </p>
              <p className={styles.termsAndConditions}>
                By clicking Create Account, you agree to our{" "}
                <a href="/">Terms</a>. Learn how we collect, use and share your
                data in our <a href="/">Privacy Policy</a> and how we use
                cookies and similar technology in our <a href="/">Cookies</a>{" "}
                Policy.
              </p>
            </div>
          </label>

          <button type="submit">Create Account</button>

          <a href="/">Already have an account?</a>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateAccountForm;
