import { useState, useEffect } from "react";

import styles from "./Footer.module.css";
import bottomVector1 from "../../assets/images/Vector 57.svg";
import bottomVector2 from "../../assets/images/Vector 58.svg";
import facebook from "../../assets/images/🦆 icon _facebook_.svg";
import youtube from "../../assets/images/🦆 icon _youtube_.svg";
import instagram from "../../assets/images/🦆 icon _instagram_.svg";
import copyright from "../../assets/images/🦆 icon _copyright_.svg";
import location from "../../assets/images/tabler_location.svg";
import email from "../../assets/images/carbon_email.svg";
import Map from "../map/Map";
function Footer({ lat, lon }) {
  const [activeContent, setActiveContent] = useState("about");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Function to handle viewport width change
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // E
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfo2}>
          <div className={styles.footerGrid}>
            <div className={styles.logo_and_socials}>
              <h1 className={styles.footerLogo}>DentistaCare</h1>
              <h3 className={styles.followUs}>
                Follow Us{" "}
                <span
                  onClick={() =>
                    setActiveContent((prevContent) =>
                      prevContent === "followUs" ? null : "followUs"
                    )
                  }
                  className={styles.button}
                >
                  {showButtons ? "+" : ""}
                </span>
              </h3>
              {activeContent === "followUs" && (
                <div className={styles.socialIcons}>
                  <img src={instagram} alt="instagram"></img>
                  <img src={facebook} alt="facebook"></img>
                  <img src={youtube} alt="youtube"></img>
                </div>
              )}
              <div className={styles.copyrights}>
                <img src={copyright} alt="copyright"></img>
                <p className={styles.copyrightText}>
                  First stop Dental All Right Reserved
                </p>
              </div>
            </div>
            <div>
              <h1 className={styles.usefulLinks}>
                {" "}
                Useful Links{" "}
                <span
                  onClick={() =>
                    setActiveContent((prevContent) =>
                      prevContent === "usefulLinks" ? null : "usefulLinks"
                    )
                  }
                  className={styles.button}
                >
                  {showButtons ? "+" : ""}
                </span>
              </h1>
              {(!showButtons || activeContent === "usefulLinks") && (
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
              )}
            </div>
            <div className={styles.contactInfo}>
              <h1 className={styles.contact}>
                Contact{" "}
                <span
                  onClick={() =>
                    setActiveContent((prevContent) =>
                      prevContent === "contact" ? null : "contact"
                    )
                  }
                  className={styles.button}
                >
                  {showButtons ? "+" : ""}
                </span>
              </h1>
              {(!showButtons || activeContent === "contact") && (
                <>
                  <p className={styles.number}>0000-1122778</p>
                  <p className={styles.number}>009988-2221</p>{" "}
                </>
              )}
            </div>
            <div className={styles.email_location}>
              <div className={styles.inquiry}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img className={styles.mail} src={email} alt="email"></img>
                  <h2 className={styles.inquiryText}>
                    Inquiry{" "}
                    <span
                      onClick={() =>
                        setActiveContent((prevContent) =>
                          prevContent === "email" ? null : "email"
                        )
                      }
                      className={styles.button}
                    >
                      {showButtons ? "+" : ""}
                    </span>
                  </h2>
                </div>
                {(!showButtons || activeContent === "email") && (
                  <p className={styles.email}>dentistacare@gmail.com</p>
                )}
              </div>

              <div className={styles.findUs}>
                <img
                  style={{ marginTop: "-0.5rem" }}
                  src={location}
                  alt="location"
                ></img>
                <h2 className={styles.inquiryText}>Find Us</h2>
              </div>
              <Map lat={lat} lon={lon} />
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
