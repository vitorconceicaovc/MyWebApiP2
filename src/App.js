import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from "./pages/Home";
import { EmployeesList } from "./pages/EmployeesList";
import { CategoriesList } from "./pages/CategoriesList";
import { About } from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
    
    <NavBar />
    <Footer />

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/employeeslist" element={<EmployeesList/>} />
      <Route path="/categorieslist" element={<CategoriesList />} />
      <Route path="/about" element={<About/>} />

    </Routes>

    </>
  );
}

export default App;
