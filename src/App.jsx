import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Proof from './components/sections/Proof';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Approach from './components/sections/Approach';
import Contact from './components/sections/Contact';
import './App.css';

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><Proof /><About /><Skills /><Experience /><Work /><Approach /><Contact /></main><Footer /></>;
}
