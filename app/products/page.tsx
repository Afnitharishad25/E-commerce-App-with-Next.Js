export const dynamic = "force-dynamic";


import { ProductsService } from "../services/products_service";
import ProductPageClient from "./ProductPageClient";

async function products() {
  const products = await ProductsService.getProducts();

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">ProductList</h3>
      <div className="row">
        <ProductPageClient products={products} />
      </div>
    </div>
  );
}

export default products;
