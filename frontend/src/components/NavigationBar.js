import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}> Picture</div>
        <div className={styles.userName}> MiniSoda17</div>
      </div>
      <div className={styles.navButtonsContainer}>
        <div> Home </div>
        <div> Experience </div>
        <div> Projects </div>
        <div> Skills </div>
      </div>
    </div>
  );
};

export default NavigationBar;
