import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useParams } from "react";
function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product details:", error);
      }
    };
  
    fetchProductDetails();
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
     <h1>Product Details</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
