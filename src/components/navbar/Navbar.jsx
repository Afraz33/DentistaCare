import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import NavIcon from "../../assets/images/bars-solid.svg";
import { useState, useEffect } from "react";
function Navbar() {
  const [navOptions, setNavOptions] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const lowWidthStyle = {
    position: isSmallScreen ? "fixed" : "",
    top: isSmallScreen ? "10%" : "",
    backgroundColor: "rgba(182, 242, 255, 0.2)",
  };
  const toggleNavOptions = () => {
    if (isSmallScreen) {
      setNavOptions(!navOptions);
    }
  };
  useEffect(() => {
    // Function to check screen width and update isSmallScreen state
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 1500);
    };

    // Add event listener to check screen width on window resize
    window.addEventListener("resize", checkScreenWidth);

    // Initial check
    checkScreenWidth();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <nav className={styles.Navbar}>
      <div className={styles.minScreen}>
        <h2 className={styles.logoText}>DentistaCare</h2>
        <svg
          onClick={toggleNavOptions}
          className={styles.navButton}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 480 512"
          style={{ marginTop: "15px" }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      {(!isSmallScreen || navOptions) && (
        <>
          <ul className={styles.list}>
            <Link className={styles.listItems}>Home</Link>
            <Link className={styles.listItems}>Services</Link>
            <Link className={styles.listItems}>Team</Link>
            <Link className={styles.listItems}>Testimonial</Link>
          </ul>
          <button className={styles.button_UI}>Get Started</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
