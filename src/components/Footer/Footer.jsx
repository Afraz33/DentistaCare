import styles from "./Footer.module.css";
import bottomVector1 from "../../assets/images/Vector 57.svg";
import bottomVector2 from "../../assets/images/Vector 58.svg";
import facebook from "../../assets/images/🦆 icon _facebook_.svg";
import youtube from "../../assets/images/🦆 icon _youtube_.svg";
import instagram from "../../assets/images/🦆 icon _instagram_.svg";
import copyright from "../../assets/images/🦆 icon _copyright_.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfo2}>
          <div className={styles.footerGrid}>
            <div className={styles.logo_and_socials}>
              <h1 className={styles.footerLogo}>DentistaCare</h1>
              <h3 className={styles.followUs}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <img src={instagram} alt="instagram"></img>
                <img src={facebook} alt="facebook"></img>
                <img src={youtube} alt="youtube"></img>
              </div>
              <div className={styles.copyrights}>
                <img src={copyright} alt="copyright"></img>
                <p className={styles.copyrightText}>
                  First stop Dental All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
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
