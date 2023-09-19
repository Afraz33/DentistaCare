import React, { useState } from "react";
import styles from "./Modal.module.css";
import zipLatLongData from "../../zip_lat_long.json";
function Modal({
  handleLatChange,
  handleLonChange,
  lat,
  lon,
  zip,
  handleZipChange,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchLocation = () => {
    // Search for the ZIP code in the JSON data
    const zipData = zipLatLongData.find((data) => data.ZIP === parseInt(zip));

    console.log(zip);
    if (zipData) {
      // If ZIP code is found, update the latitude and longitude fields
      handleLatChange(zipData.LAT);
      handleLonChange(zipData.LNG);
    } else {
      // Handle case where ZIP code is not found
      alert("ZIP code not found in data.");
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
              <h2>Location Details</h2>
              <p style={{ marginTop: "1rem" }}>Please Enter your details</p>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lat">Lat : </label>
              <input
                type="text"
                id="lat"
                name="lat"
                value={lat}
                onChange={handleLatChange}
              />
            </div>

            <div className={styles.input_group}>
              <label htmlFor="lon">Lon : </label>
              <input
                type="text"
                id="lon"
                name="lon"
                value={lon}
                onChange={handleLonChange}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lat">Zip : </label>
              <input type="text" value={zip} onChange={handleZipChange} />
            </div>
            <button className={styles.button_UI} onClick={fetchLocation}>
              Enter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
