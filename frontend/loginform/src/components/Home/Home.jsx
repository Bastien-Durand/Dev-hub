import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <h1>Welcome to the homepage</h1>
      </div>
      <div className={styles.homeSubtext}>
        <p>View your content below</p>
      </div>
    </div>
  );
};

export default Home;
