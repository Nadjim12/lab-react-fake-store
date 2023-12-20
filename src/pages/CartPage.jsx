import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts/5");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cartData = await response.json();

        const productIds = cartData.products.map((product) => product.productId);
        const productsResponse = await fetch(
          `https://fakestoreapi.com/products`
        );
        const productsData = await productsResponse.json();

        const productsInCart = productsData.filter((product) =>
          productIds.includes(product.id)
        );

        setCart(productsInCart);
      } catch (error) {
        console.log("Error fetching cart data:", error);
        setError(error.message);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: {product.price}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;