import HomePage from "./pages/HomePage";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
function App() {
  const [lat, setLat] = useState(""); // State for latitude input
  const [lon, setLon] = useState(""); // State for longitude input
  const [zip, setZip] = useState(601);

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleLatChange = (event) => {
    setLat(event.target.value);
  };

  const handleLonChange = (event) => {
    setLon(event.target.value);
  };
  return (
    <div className="App">
      <Modal
        zip={zip}
        handleZipChange={handleZipChange}
        lat={lat}
        lon={lon}
        handleLatChange={handleLatChange}
        handleLonChange={handleLonChange}
      />
      <HomePage lat={lat} lon={lon} />
    </div>
  );
}

export default App;
