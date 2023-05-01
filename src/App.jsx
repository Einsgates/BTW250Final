import { BrowserRouter } from "react-router-dom";
import { About, Contact, Feedbacks, Emergency, Navbar, StarsCanvas } from './components';
import Mission from "./components/Mission";
import Strategy from "./components/Strategy";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-sky-900">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Emergency />
        <About />
        <Mission />
        <Strategy />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
