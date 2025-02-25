import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ConfigProvider } from "antd"
import Header from "./components/HeaderMain"
import Home from "./pages/Home"
// import Products from "./pages/Products"
// import About from "./pages/About"
// import WhyColdPressed from "./pages/WhyColdPressed"
// import Contact from "./pages/Contact"
import "./index.css"
import Footer from "./pages/Footer"

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
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/why-cold-pressed" element={<WhyColdPressed />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App

