export const dynamic = "force-dynamic";


import { ProductsService } from "../services/products_service";
import ProductPageClient from "./ProductPageClient";

async function Products() {
  const products = await ProductsService.getProducts() || [];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">ProductList</h3>
      <ProductPageClient products={products} />
    </div>
  );
}

export default Products;
