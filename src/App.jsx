import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConfigProvider } from "antd"
import Header from "./components/HeaderMain"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import WhyColdPressed from "./pages/WhyColdPressed"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import "./index.css"
import Footer from "./pages/Footer"
import ProductDetails from "./pages/ProductDetails"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from "./components/auth/Auth"

const theme = {
  token: {
    colorPrimary: "#B8860B",
    colorLink: "#B8860B",
    fontFamily: '"Playfair Display", serif',
  },
}

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <div className="App">
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-cold-pressed" element={<WhyColdPressed />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App

