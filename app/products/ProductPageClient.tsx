"use client";

import ProductList from "../products/ProductList"
import { useSearch } from "@/context/SearchContext";
import {Product} from "@/types/product"


type Props = {
  products: Product[];
};

export default function ProductPageClient({ products }: Props) {
  const { search ,clearSearch} = useSearch()
  
 return (
    <>
      
      <ProductList  products={products} search={search} clear={clearSearch} />
    </>
  );
}