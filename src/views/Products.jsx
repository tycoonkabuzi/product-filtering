import { Link, useSearchParams } from "react-router";
const Products = ({ products }) => {
  const categories = products.reduce((acc, product) => {
    !acc.includes(product.category) ? acc.push(product.category) : "";
    return acc;
  }, []);
  const [searchParams] = useSearchParams();
  const filteredArray = products.filter((product) => {
    return product.category === searchParams.get("category");
  });

  const productToDisplay = filteredArray.length <= 0 ? products : filteredArray;

  return (
    <div className="products">
      <ol>
        {productToDisplay.map((product, index) => (
          <li key={index}>
            <span className="bold-text">{product.name}</span> :{" "}
            {product.description}
          </li>
        ))}
      </ol>

      <p>Categories:</p>
      <ul>
        <li>
          <Link to="/products">All</Link>
        </li>
        {categories.map((product, index) => (
          <li key={index}>
            <Link to={`/products?category=${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
