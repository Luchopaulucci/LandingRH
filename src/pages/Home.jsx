import Contact from './../components/Contact';
import Team from './../components/Team';
import Clients from './../components/Clients';
import Services from './../components/Services';
import MissionVisionValues from './../components/MissionVisionValues';
import AboutUs from './../components/AboutUs';
import Hero from './../components/Hero';

const Home = () => {
  return (
    <div className="max-w-full">
      <Hero />
      <AboutUs />
      <MissionVisionValues />
      <Services />
      <Clients />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
