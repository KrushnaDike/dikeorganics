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
import { ProtectedRoute } from 'protected-route-react';
import Dashboard from "./pages/Admin/Dashboard"
import AdminProducts from "./pages/Admin/Products"
import Users from "./pages/Admin/Users"
import AddProduct from "./pages/Admin/AddProduct"
import EditProduct from "./pages/Admin/EditProduct"

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

            {/* ADMIN ROUTES */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App

