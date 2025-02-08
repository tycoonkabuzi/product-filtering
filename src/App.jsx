import "./App.css";
import Home from "./views/Home";
import { Routes, Route, Link } from "react-router";
import Products from "./views/Products";

function App() {
  const products = [
    { id: "1", name: "Laptop", category: "laptops" },
    { id: "2", name: "Smartphone", category: "smartphones" },
    { id: "3", name: "Tablet", category: "tablets" },
  ];
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
      </Routes>
    </>
  );
}

export default App;
