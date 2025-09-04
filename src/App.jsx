import Landing from "./pages/Landing";
import OurServices from "./pages/OurServices";
import Support from "./pages/Support";
import RegLog from "./pages/RegLog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/support" element={<Support />} />
        <Route path="/registration" element={<RegLog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
