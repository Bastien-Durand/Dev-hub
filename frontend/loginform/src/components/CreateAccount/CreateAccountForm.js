import axios from "axios";
import validator from "validator";
import "../CreateAccount/createaccountform.css";
import { useState } from "react";

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

        axios
          .post(url, {
            email: userData.email,
            password: userData.password,
          })
          .then(function (response) {
            console.log(response);
            alert(response.data.message);
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
    <div className="createAccountFormLayout">
      <div className="formTitle">
        <h1>Create a new account</h1>
      </div>
      <div className="formSubtext">
        <p>It's quick and easy.</p>
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
          <label>
            <div classname="termsAndConditionsLayout">
              <p className="termsAndConditions">
                People who use our service may have uploaded your contact
                information to this service. <a href="#">Learn more</a>.
              </p>
              <p className="termsAndConditions">
                By clicking Sign Up, you agree to our <a href="#">Terms</a>.
                Learn how we collect, use and share your data in our{" "}
                <a href="#">Privacy Policy</a>
                and how we use cookies and similar technology in our{" "}
                <a href="#">Cookies</a> Policy. You may receive SMS
                notifications from us and can opt out at any time.
              </p>
            </div>
          </label>

          <button type="submit">Create Account</button>

          <a href="#">Already have an account?</a>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
