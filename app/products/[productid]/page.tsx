

import { ProductsService } from '@/app/services/products_service'
import ProductActions from './ProductActions';
import { Product } from '@/types/product'; 


type Props = {
  params: Promise<{ productid: string }>
}

export default async function ProductDetail({ params}:any) {
  
  const { productid } = await params   //  unwrap params
  const id = Number(productid)
  const product: Product = await ProductsService.getProductsById(id)
 
 

 return (
    <div className="container mt-5 min-vh-100">
      <img src={product.image} width="150" height="200"/>
       <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>AED{product.price}</h4>
        {/* Client component for router stuff */}
      <ProductActions product={product} />
    </div>
 )
}