import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { List } from "./pages/List";
import { About } from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    
    
    <NavBar />

    <Routes>
      
      <Route path="/" element={<List/>} />
      <Route path="/about" element={<About/>} />

    </Routes>

    </>
  );
}

export default App;
