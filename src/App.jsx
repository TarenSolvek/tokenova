import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Deals from './components/Deals';
import Essentials from './components/Essentials';
import Login from './components/Login'; 
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';


function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/essentials" element={<Essentials />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
