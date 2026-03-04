import { Product } from "@/types/product"
import ProductCard from "./ProductCard/ProductCard";

type Props = {
  products: Product[];
  search: string;
  clear:()=> void
};

export default function ProductList({ products, search ,clear}: Props) {

  const searchTerm = (search ?? "").trim().toLowerCase()

  const filteredProducts = 
    searchTerm === ""
    ? products
    : products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm)
    );

  return (
    <div className="container  min-vh-100 mt-4">
    {/*Search info + Back button */}

      {search && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">
            Showing results for:
            <span className="text-primary"> "{search}"</span>
          </h5>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={clear}
          >
            ← Back to all products
          </button>
        </div>
      )}

    <div className="row">
      {filteredProducts.length === 0 && (
        <div className="col-12 text-center mt-4">
           <p className="text-muted">No products found</p>
        </div>
      )}

      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
</div>
  );
} 