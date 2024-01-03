import Sin from "./pages/Login"
import Logon from "./pages/Logon"
import Ho from "./pages/Ho";
import Tri from "./pages/Tri"
import { Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Cbe from "./pages/Cbe";
import Madu from "./pages/Madu";
import Che from "./pages/Che";
import Kanya from "./pages/Kanya";
import Hom1 from "./pages/Home1";
import Co from "./pages/Co";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sin/>}></Route>
        <Route path="/Signup" element={<Logon/>}></Route>
        <Route path="/Home" element={<Ho/>}></Route>
        <Route path="/Trips" element={<Tri/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Coimbatore" element={<Cbe/>}></Route>
        <Route path="/Madurai" element={<Madu/>}></Route>
        <Route path="/Chennai" element={<Che/>}></Route>
        <Route path="/KanyaKumari" element={<Kanya/>}></Route>
        <Route path="/Home1" element={<Hom1/>}></Route>
        <Route path="/Contact" element={<Co/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
