import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SurveillanceFeature from "./components/SurveillanceFeature";
import Contact from './components/Contact';  
import Footer from './components/Footer';
import ClientsSuccessStories from './components/ClientsSuccessStories';
import Blog from './components/Blog';
import VisibilityExhibition from './components/VisibilityExhibition';
import UseCase from './components/UseCase';
import AkshaShowcase from './components/AkshaShowcase';
import Carousel from './components/carousel';
import FeatureBar from './components/FeatureBar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <SurveillanceFeature />

        <section id="use-cases">
          <UseCase />
        </section>

        <section id="applications">
          <Carousel />
        </section>

        <FeatureBar />
        
        <section id="features">
          <AkshaShowcase />
        </section>

        <Blog />
        <VisibilityExhibition />
        <ClientsSuccessStories />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
