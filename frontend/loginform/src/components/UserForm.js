import bcrypt from "bcryptjs";
import axios from "axios";
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
            value={userData.email}
          />
        </label>
        <hr />
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            value={userData.password}
          />
        </label>
        <hr />
        <label>
          Terms & Conditions <input type="checkbox" name="myCheckbox" />
        </label>
        <hr />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
