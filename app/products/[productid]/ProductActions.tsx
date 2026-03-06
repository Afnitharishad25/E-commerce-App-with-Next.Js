"use client"
import { useCart } from "@/context/cartContext"
import { useRouter } from "next/navigation"
import { useState } from "react";


type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail:string
  };
};


export default function ProductActions({product}:Props) {
  const { cart, addToCart } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);


  // ✅ check if product already in cart
  const isInCart = cart.some(
    (item) => item.id === product.id
  );

  const handleClick = () => {
    if (isInCart) {
      router.push("/cart"); // 👉 Go to Cart
    } else {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail:product.thumbnail
      });

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  };


  return (
    <div className="d-flex gap-2 mt-3">
      <button className="btn btn-dark" onClick={() =>router.push('/products')}>❮ Back</button>
    
       <button
        className={`btn ${
          isInCart||added ? "btn-dark" : "btn-success"
        }`}
        onClick={handleClick}
        
      >
        {added
          ? "Added ✓"
          : isInCart
          ? "Go to Cart"
          : "Add to Cart"}

      </button>
    </div>
  )
}