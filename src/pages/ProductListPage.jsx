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
  }
 fetchProducts();
},[]);


<li key ={task.id}>{task}</li>
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;


