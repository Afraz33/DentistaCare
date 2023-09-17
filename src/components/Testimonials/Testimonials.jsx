import styles from "./Testimonials.module.css";
import fluent_teeth from "../../assets/images/fluent_teeth.svg";
import MaskGroup from "../../assets/images/Mask group.png";
import React from "react";
import Slider from "react-slick";
function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
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
      <h2 className={styles.TestimonialsHeading}>
        What Patient says{" "}
        <span className={styles.TestimonialsHeadingSecondary}>About Us</span>
      </h2>
      <Slider className={styles.slider} {...settings}>
        <div className={styles.testimonialCard}>
          <img
            className={styles.MaskGroup}
            src={MaskGroup}
            alt="MaskGroup"
          ></img>
          <h3 className={styles.testimonialText}>
            Absolutely the best dental team! Dental assistants , hygienists, and
            office staff are all excellent!” — Nikeyy.
          </h3>
        </div>
        <div className={styles.testimonialCard}>
          <img
            className={styles.MaskGroup}
            src={MaskGroup}
            alt="MaskGroup"
          ></img>
          <h3 className={styles.testimonialText}>
            Absolutely the best dental team! Dental assistants , hygienists, and
            office staff are all excellent!” — Nikeyy.
          </h3>
        </div>
        <div className={styles.testimonialCard}>
          <img
            className={styles.MaskGroup}
            src={MaskGroup}
            alt="MaskGroup"
          ></img>
          <h3 className={styles.testimonialText}>
            Absolutely the best dental team! Dental assistants , hygienists, and
            office staff are all excellent!” — Nikeyy.
          </h3>
        </div>
      </Slider>
      <img
        className={styles.TestimonialsImage}
        src={fluent_teeth}
        alt="fluent_teeth"
      ></img>
    </section>
  );
}

export default Testimonials;
