import styles from "./Hero.module.css";
import heroSectionVector from "../../assets/images/heroSectionVector.svg";
import heroImage from "../../assets/images/heroSectionImage.png";
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
            <div className={styles.contactDetails}></div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <img src={heroSectionVector} alt="heroSectionVector"></img>
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="heroImage"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
