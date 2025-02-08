import "./App.css";
import Home from "./views/Home";
import { Routes, Route, Link } from "react-router";
import Products from "./views/Products";

function App() {
  const products = [
    {
      id: "1",
      name: "Acer",
      category: "laptops",
      description: "Reliable laptop with great performance for everyday tasks.",
    },
    {
      id: "2",
      name: "Mac",
      category: "laptops",
      description: "Premium Apple laptop with macOS and a sleek design.",
    },
    {
      id: "3",
      name: "Hp",
      category: "laptops",
      description: "Versatile HP laptop suitable for work and entertainment.",
    },
    {
      id: "4",
      name: "Iphone",
      category: "smartphones",
      description:
        "Apple's flagship smartphone with an advanced camera system.",
    },
    {
      id: "5",
      name: "Tablet",
      category: "tablets",
      description:
        "Portable tablet ideal for media consumption and productivity.",
    },
    {
      id: "6",
      name: "Toshiba",
      category: "laptops",
      description: "Durable laptop known for its longevity and solid build.",
    },
    {
      id: "7",
      name: "Samsung S3",
      category: "smartphones",
      description: "Affordable Samsung smartphone with a vibrant display.",
    },
    {
      id: "8",
      name: "Dell XPS 13",
      category: "laptops",
      description:
        "Ultra-thin laptop with a stunning display and high performance.",
    },
    {
      id: "9",
      name: "Lenovo ThinkPad",
      category: "laptops",
      description:
        "Business laptop known for its excellent keyboard and reliability.",
    },
    {
      id: "10",
      name: "Google Pixel 7",
      category: "smartphones",
      description:
        "Google's latest smartphone with an advanced AI-powered camera.",
    },
    {
      id: "11",
      name: "iPad Pro",
      category: "tablets",
      description:
        "Powerful tablet with a Liquid Retina display and Apple Pencil support.",
    },
    {
      id: "12",
      name: "Asus ROG Zephyrus",
      category: "laptops",
      description:
        "High-end gaming laptop with a powerful GPU and fast refresh rate.",
    },
    {
      id: "13",
      name: "OnePlus 11",
      category: "smartphones",
      description: "Fast and smooth Android smartphone with a premium build.",
    },
    {
      id: "14",
      name: "Samsung Galaxy Tab S8",
      category: "tablets",
      description:
        "Flagship Android tablet with an AMOLED display and S Pen support.",
    },
    {
      id: "15",
      name: "Sony Xperia 5 III",
      category: "smartphones",
      description:
        "Compact Android phone with a 120Hz display and great cameras.",
    },
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
