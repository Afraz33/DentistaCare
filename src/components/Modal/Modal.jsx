import React, { useState } from "react";
import styles from "./Modal.module.css";
import cityData from "../../city.json";
function Modal({
  lat,
  lon,

  handleLatChange,
  handleLonChange,
}) {
  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [cityRecommendations, setCityRecommendations] = useState([]);

  const handleCityChange = (e) => {
    console.log(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    setCity(e.target.value);

    // Filter city recommendations based on user input
    const filteredCities = cityData.filter((data) =>
      data.city.toLowerCase().startsWith(inputValue)
    );

    // Limit the number of recommendations to a reasonable amount (e.g., 10)

    setCityRecommendations(filteredCities.length === 0 ? null : filteredCities);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const fetchLocation = () => {
  //   // Search for the ZIP code in the JSON data
  //   const zipData = zipLatLongData.find((data) => data.ZIP === parseInt(zip));

  //   console.log(zip);
  //   if (zipData) {
  //     // If ZIP code is found, update the latitude and longitude fields
  //     handleLatChange(zipData.LAT);
  //     handleLonChange(zipData.LNG);
  //   } else {
  //     // Handle case where ZIP code is not found
  //     alert("ZIP code not found in data.");
  //   }
  // };

  const fetchLocation = () => {
    // Search for the street and number in the JSON data
    const locationData = cityData.find((data) => {
      return data.city === city;
    });

    if (locationData) {
      // If the street and number are found, update the latitude and longitude fields
      handleLatChange(locationData.lat);
      handleLonChange(locationData.lng);
    } else {
      // Handle case where street and number are not found
      alert("City not found in data.");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.modal_overlay}>
          {" "}
          {/* Apply the z-index to this element */}
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
              <h2 style={{ marginLeft: "2.6rem" }}>Location Details</h2>
              <p style={{ marginTop: "1rem", marginLeft: "2.6rem" }}>
                Please Enter your details
              </p>
            </div>

            <div className={styles.input_group}>
              <label htmlFor="lat">City : </label>
              <input type="text" value={city} onChange={handleCityChange} />
            </div>
            <ul className={styles.list}>
              {cityRecommendations?.map((data, i) => (
                <li
                  onClick={() => setCity(data.city)}
                  className={styles.listItems}
                  key={i}
                >
                  {data.city}
                </li>
              ))}
            </ul>
            <button className={styles.button_UI} onClick={fetchLocation}>
              Show on map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
