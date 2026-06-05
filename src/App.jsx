import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './App.css';

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><Work /><About /><Experience /><Contact /></main><Footer /></>;
}
