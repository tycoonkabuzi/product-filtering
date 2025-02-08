const Products = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <p key={index}>{product.name}</p>
      ))}
    </>
  );
};
export default Products;
