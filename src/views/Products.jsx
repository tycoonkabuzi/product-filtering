const Products = ({ products }) => {
  return (
    <div className="products">
      <ol>
        {products.map((product, index) => (
          <li key={index}>
            <span className="bold-text">{product.name}</span> :{" "}
            {product.description}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Products;
