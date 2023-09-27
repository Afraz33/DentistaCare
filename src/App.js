import HomePage from "./pages/HomePage";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
function App() {
  const [lat, setLat] = useState(""); // State for latitude input
  const [lon, setLon] = useState(""); // State for longitude input

  return (
    <div className="App">
      <Modal
        lat={lat}
        lon={lon}
        handleLatChange={setLat}
        handleLonChange={setLon}
      />
      <HomePage lat={lat} lon={lon} />
    </div>
  );
}

export default App;
