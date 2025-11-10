import Header from "./components/Header";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Help from "./sections/Help";
import Hero from "./sections/Hero";
import Himalayas from "./sections/Himalayas";
import Photography from "./sections/Photography";
import PhotoSet from "./sections/PhotoSet";
import Slider from "./sections/Slider";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Photography />
      <PhotoSet />
      <Clients />
      <Himalayas />
      <Help />
      <Slider />
      <Footer />
    </main>
  );
};

export default App;
