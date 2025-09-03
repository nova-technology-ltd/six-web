import Landing from "./pages/Landing";
import OurServices from "./pages/OurServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
