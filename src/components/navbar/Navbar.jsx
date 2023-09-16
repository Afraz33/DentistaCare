import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h2 className={styles.logoText}>DentistaCare</h2>
      <ul className={styles.list}>
        <Link className={styles.listItems}>Home</Link>
        <Link className={styles.listItems}>Services</Link>
        <Link className={styles.listItems}>Team</Link>
        <Link className={styles.listItems}>Testimonial</Link>
      </ul>
      <button className={styles.button_UI}>Get Started</button>
    </nav>
  );
}

export default Navbar;
