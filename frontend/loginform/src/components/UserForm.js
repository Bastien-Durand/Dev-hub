import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

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
