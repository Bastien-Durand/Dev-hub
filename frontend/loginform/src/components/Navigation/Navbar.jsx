import styles from "../Navigation/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ulist}>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Create Account</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
