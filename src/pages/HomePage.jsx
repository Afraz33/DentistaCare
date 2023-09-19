import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
function HomePage({ lat, lon }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer lat={lat} lon={lon} />
    </div>
  );
}

export default HomePage;
