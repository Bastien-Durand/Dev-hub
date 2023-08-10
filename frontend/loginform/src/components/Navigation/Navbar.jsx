import { NavLink } from "react-router-dom";
import styles from "../Navigation/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ulist}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
