import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SurveillanceFeature from "./components/SurveillanceFeature";
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientsSuccessStories from './components/ClientsSuccessStories';
import Blog  from './components/Blog';
import VisibilityExhibition from './components/VisibilityExhibition';
import UseCase from './components/UseCase';
import AkshaShowcase from './components/AkshaShowcase';
import Carousel from './components/carousel';
import FeatureBar from './components/FeatureBar';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Centered content wrapper */}
      <main className="">
        <SurveillanceFeature />
        <UseCase />
        <Carousel />
        <FeatureBar />
        <AkshaShowcase />
        <Blog/>
        <VisibilityExhibition/>
        <ClientsSuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
