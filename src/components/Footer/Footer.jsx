import styles from "./Footer.module.css";
import bottomVector1 from "../../assets/images/Vector 57.svg";
import bottomVector2 from "../../assets/images/Vector 58.svg";
import facebook from "../../assets/images/🦆 icon _facebook_.svg";
import youtube from "../../assets/images/🦆 icon _youtube_.svg";
import instagram from "../../assets/images/🦆 icon _instagram_.svg";
import copyright from "../../assets/images/🦆 icon _copyright_.svg";
import location from "../../assets/images/tabler_location.svg";
import email from "../../assets/images/carbon_email.svg";
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
            <div>
              <h1 className={styles.usefulLinks}> Useful Links</h1>
              <div className={styles.usefulLinksGrid}>
                <div className={styles.gridColumn}>
                  <h4 className={styles.gridText}>About Us</h4>
                  <h4 className={styles.gridText}>Services</h4>
                  <h4 className={styles.gridText}>FAQ</h4>
                  <h4 className={styles.gridText}>Dentist</h4>
                </div>
                <div className={styles.gridColumn}>
                  <h4 className={styles.gridText}>Help</h4>
                  <h4 className={styles.gridText}>Privacy Policy</h4>
                </div>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <h1 className={styles.contact}>Contact</h1>
              <p className={styles.number}>0000-1122778</p>
              <p className={styles.number}>009988-2221</p>
            </div>
            <div className={styles.email_location}>
              <div className={styles.inquiry}>
                <img
                  style={{ marginTop: "-1rem" }}
                  src={email}
                  alt="email"
                ></img>
                <h2 className={styles.inquiryText}>Inquiry</h2>
              </div>
              <p className={styles.email}>dentistacare@gmail.com</p>
              <div className={styles.findUs}>
                <img
                  style={{ marginTop: "-0.5rem" }}
                  src={location}
                  alt="location"
                ></img>
                <h2 className={styles.inquiryText}>Find Us</h2>
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
