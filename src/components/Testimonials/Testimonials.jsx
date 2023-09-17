import styles from "./Testimonials.module.css";
import fluent_teeth from "../../assets/images/fluent_teeth.svg";
function Testimonials() {
  return (
    <section className={styles.Testimonials}>
      <div className={styles.numbers}>
        <div className={styles.numbersText}>
          <h1 className={styles.count}>100+</h1>
          <p className={styles.description}>Happy Patients</p>
        </div>
        <div className={styles.numbersText}>
          <h1 className={styles.count}>50+</h1>
          <p className={styles.description}>Online Appointment</p>
        </div>
        <div className={styles.numbersText}>
          <h1 className={styles.count}>5+</h1>
          <p className={styles.description}>Years of Experience</p>
        </div>
        <div className={styles.numbersText}>
          <h1 className={styles.count}>10+</h1>
          <p className={styles.description}>Doctor & Staff</p>
        </div>
      </div>
      <img
        className={styles.TestimonialsImage}
        src={fluent_teeth}
        alt="fluent_teeth"
      ></img>
    </section>
  );
}

export default Testimonials;
