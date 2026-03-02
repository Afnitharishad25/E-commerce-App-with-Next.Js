"use client";
import { Product } from "@/types/product";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { useState } from "react";

type Props = {
  product: Product,
};

function ProductCard({ product }: Props) {
  const {  addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="col-md-3 mb-4">
      {" "}
      {/*for product card display */}
      <div className="card h-100">
        <Link href={`/products/${product.id}`} className="btn btn-sm">
          <img src={product.image} className="card-img-top w-50" height="200"/>
        </Link>
        <div className="card-body text-center">
          <h6 className="text-truncate">{product.title}</h6>
          <p>AED {product.price}</p>

          {/* button for Add to cart  */}
          <button
            className={`btn ${added ? "btn-success" : "btn-primary"}`}
            onClick={() => {
              addToCart(product);
              setAdded(true);

              setTimeout(() => {
                setAdded(false);
              }, 3000);
            }}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
