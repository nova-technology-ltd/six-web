import Landing from "./pages/Landing";
import OurServices from "./pages/OurServices";
import Support from "./pages/Support";
import RegLog from "./pages/RegLog";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/support" element={<Support />} />
        <Route path="/registration" element={<RegLog />} />
        <Route path="/about-us" element={<About />} />{" "}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
