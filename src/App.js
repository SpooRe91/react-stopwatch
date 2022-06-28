import './App.css';
import { NavBar } from "./components/Navbar";
import { SideNavSearch } from "./components/SideNav";
import { Welcome } from "./components/Welcome";
import { Specials } from "./components/Specials";
import { CanvasOverlay } from './components/CanvasOverlay';
import { Menu } from './components/Menu';
import { Testimonials } from "./components/Testimonials";
import { TeamSection } from "./components/TeamSection";
import { Reservation } from "./components/Reservation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      {/* <body data-spy="scroll" data-target="#navbar" class="static-layout"> */}
        <NavBar />
        <SideNavSearch />
        <CanvasOverlay />
        <Welcome />
        <Specials />
        <Menu />
        <Testimonials />
        <TeamSection />
        <Reservation />
        <Footer />
      {/* </body> */}
    </div >
  );
}

export default App;
