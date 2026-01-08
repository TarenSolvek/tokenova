import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Deals from './components/Deals';
import Essentials from './components/Essentials';
import Login from './components/Login'; 
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext';
import CarritoComponent from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';
import Marketplace from './components/Marketplace';
import ComoFunciona from './components/ComoFunciona';
import Aprender from './components/Aprender';
import SobreNosotros from './components/SobreNosotros';
import Empleos from './components/Empleos';
import Blog from './components/Blog';
import Comenzar from './components/Comenzar';
import Cartera from './components/Cartera';
import ProductListV2 from './components/ProductListV2';
import Verificacion from './components/Verificacion';
import DetallesCuenta from './components/DetallesCuenta';
import Logout from './components/Logout';
import { Helmet } from "react-helmet";



function App() {

  return (
    <CartProvider>
      <Router basename={import.meta.env.BASE_URL}>
        {/* Helmet global: título y metadatos para toda la app */}
        <Helmet>
          <title>Tokenova</title>
          <meta 
            name="description" 
            content="Tokenova." 
          />
          <meta 
            name="keywords" 
            content="Tokenova, SEO" 
          />
        </Helmet>

        <Header aria-label="Tokenova" />



   
      <main className="site-content">
        <Routes>
          <Route path="/administracion" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/carrito" element={<CarritoComponent />} />
          <Route path="/crud" element={<CrudProductos />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/aprender" element={<Aprender />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/empleos" element={<Empleos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comenzar" element={<Comenzar />} />
          <Route path="/cartera" element={<Cartera />} />
          <Route path="/verificacion" element={<Verificacion />} />
          <Route path="/detalles-cuenta" element={<DetallesCuenta />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/buy-tokens" element={<ProductListV2 />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
    </CartProvider>
  )
}

export default App
