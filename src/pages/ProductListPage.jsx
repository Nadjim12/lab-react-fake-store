import { useState, useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
const fetchProducts= async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
     } catch (error) {
    console.log ("Error fetching products:", error);
    }
  };
 fetchProducts();
},[]);


  return (
    <div className="ProductListPage">
       <h1>Product List</h1>
       <ul>
      {products.map((product) => (
      <li key={product.id}><Link to={`/product/details/${product.id}`}>{product.title}</Link></li>
       ))}
       </ul>
    </div>
  );
}

export default ProductListPage;


