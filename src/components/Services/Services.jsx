import styles from "./Services.module.css";
import ServicesVector from "../../assets/images/ServicesVector.svg";
import teeth_alignment from "../../assets/images/teeth_alignment.svg";
import teeth_surgery from "../../assets/images/teeth_surgery.svg";
import cavity from "../../assets/images/cavity.svg";
import Testimonials from "../Testimonials/Testimonials";
import greenArrow from "../../assets/images/green arrow.svg";
import yellowArrow from "../../assets/images/yellow arrow.svg";
import blueArrow from "../../assets/images/blue arrow.svg";
function Services() {
  return (
    <section className={styles.Services}>
      <img
        className={styles.image}
        src={ServicesVector}
        alt="ServicesVector"
      ></img>
      <h2 className={styles.heading}>
        Elevating Smiles To{" "}
        <span className={styles.headingSecondary}>
          Unforgettable Experiences
        </span>
      </h2>

      <div className={styles.servicesGrid}>
        <div className={styles.card}>
          <div className={styles.circle}>
            <img
              className={styles.cardVector}
              src={teeth_alignment}
              alt="teeth_alignment"
            ></img>
          </div>
          <h2 className={styles.cardTitle}>Teeth Alignment</h2>
          <p className={styles.cardDescription}>Get the Best Results</p>
          <div className={styles.learnArrow}>
            <p className={styles.cardButton}>Learn more</p>
            <img className={styles.arrow} src={blueArrow} alt="blueArrow"></img>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}>
            <img
              className={styles.cardVector}
              src={teeth_surgery}
              alt="teeth_surgery"
            ></img>
          </div>
          <h2 className={styles.cardTitle}>Teeth Surgery</h2>
          <p className={styles.cardDescription}>Get the Best Results</p>
          <div className={styles.learnArrow}>
            <p className={styles.cardButton} style={{ color: "#0AD0A1" }}>
              Learn more
            </p>
            <img
              className={styles.arrow}
              src={greenArrow}
              alt="greenArrow"
            ></img>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.circle}>
            <img className={styles.cardVector} src={cavity} alt="cavity"></img>
          </div>
          <h2 className={styles.cardTitle}>Teeth Surgery</h2>
          <p className={styles.cardDescription}>Get the Best Results</p>
          <div className={styles.learnArrow}>
            <p className={styles.cardButton} style={{ color: "#D9A44C" }}>
              Learn more
            </p>
            <img
              className={styles.arrow}
              src={yellowArrow}
              alt="yellowArrow"
            ></img>
          </div>
        </div>
      </div>
      <button className={styles.button_UI}>View all services</button>
      <Testimonials />
    </section>
  );
}

export default Services;
