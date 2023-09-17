import styles from "./Footer.module.css";
import bottomVector1 from "../../assets/images/Vector 57.svg";
import bottomVector2 from "../../assets/images/Vector 58.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfo2}></div>
      </div>
      <img
        className={styles.bottomVector1}
        src={bottomVector1}
        alt="bottomVector1"
      ></img>
      <img
        className={styles.bottomVector2}
        src={bottomVector2}
        alt="bottomVector2"
      ></img>
    </footer>
  );
}

export default Footer;
