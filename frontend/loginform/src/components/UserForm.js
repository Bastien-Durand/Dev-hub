import bcrypt from "bcryptjs";
import axios from "axios";
import "./userform.css";
import { useState } from "react";

const UserForm = () => {
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
    console.log(userData);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(userData.password, salt);

    console.log(hash);

    const url = "http://localhost:8080/create";

    axios
      .post(url, {
        email: userData.email,
        password: hash,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="formLayout">
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
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChangeHandler}
              value={userData.email}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
              value={userData.password}
            />
          </label>
          <label>
            <div classname="termsAndConditionsLayout">
              <p className="termsAndConditions">
                People who use our service may have uploaded your contact
                information to Facebook. <a href="#">Learn more</a>.
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

export default UserForm;
