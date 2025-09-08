import ProductItem from "./product-item";

const products = [
  { id: 1, name: "Wireless Mouse", price: 100, inStock: true },
  { id: 2, name: "Keyboard", price: 200, inStock: false },
  { id: 3, name: "Monitor", price: 300, inStock: true },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1>Products List</h1>
      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
