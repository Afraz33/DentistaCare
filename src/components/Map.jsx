import { useEffect, useRef } from "react";
function Map({ lat, lon }) {
  console.log("Latitude:", lat);
  console.log("Longitude:", lon);

  return (
    <div>
      <iframe
        title="Map"
        //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387133.6685907772!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2suk!4v1634168488355!5m2!1sen!2suk"
        // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387133.6685907772!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNewYork%2C%20%$USA!5e0!3m2!1sen!2suk!4v1634168488355!5m2!1sen!2suk`}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.078579289779!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df101f4231e44d%3A0x5e5b7f6b0731b61f!2sNwYork%2C%20USA!5e0!3m2!1sen!2suk!4v1634168488355!5m2!1sen!2suk`}
        frameBorder="0"
        style={{
          width: "100%",
          height: "25rem",
          marginTop: "3rem",
          borderRadius: "9%",
        }}
        loading="lazy"
      />
    </div>
  );
}

export default Map;
