import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NewTable from './Components/NewTable/NewTable';
import Companies from './Components/Companies/Companies';
import Testimonial from './Components/Testimonial/Testimonial';
import Categories from './Components/Categories/Categories';
import Overview from './Components/Overview/Overview';
import DSA from './Components/DSA/DSA';
import Languages from './Components/Languages/Languages';
import Environment from './Components/Environment/Environment';
import BigO from './Components/BigO/BigO';
import AboveFooter from './Components/AboveFooter/AboveFooter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <NewTable />
      <Companies />
      <Testimonial />
      <Categories />
      <Overview />
      <DSA />
      <Languages />
      <Environment />
      <BigO />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
