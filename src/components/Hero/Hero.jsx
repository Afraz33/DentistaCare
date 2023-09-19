import styles from "./Hero.module.css";
import heroSectionVector from "../../assets/images/heroSectionVector.svg";
import heroImage from "../../assets/images/heroSectionImage.png";
import vector1 from "../../assets/images/Vector 54.svg";
import vector2 from "../../assets/images/Vector 55.svg";

function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <h2 className={styles.Caption}>
            {" "}
            Say Everything with{" "}
            <span className={styles.CaptionGradient}>Your Smile</span>
          </h2>
          <div className={styles.description}>
            DentistaCare is a top-rated local practice for cosmetic,prevention,
            and restorative dentistry on First Hill.
          </div>
          <div className={styles.appointment}>
            <button className={styles.appointmentButton}>
              Request Appointment
            </button>
            <p className={styles.contactDetails}>
              or call <span className={styles.number}>+1 00099933777</span>
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <img
            className={styles.heroSectionVector}
            src={heroSectionVector}
            alt="heroSectionVector"
          ></img>
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="heroImage"
          ></img>
        </div>
      </div>
      <div className={styles.bottomVector}>
        <img className={styles.vector1} src={vector1} alt="vector1"></img>
        <img className={styles.vector2} src={vector2} alt="vector2"></img>
      </div>
    </section>
  );
}

export default Hero;
