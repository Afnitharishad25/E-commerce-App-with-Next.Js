 import { ServiceBase } from "./ServiceBase"
 import { Product } from "@/types/product"


 export class ProductsService extends ServiceBase{
  
    /* To fetch All Products  */
    static async getProducts():Promise <Product[]> {
      const productResponse = await fetch(this.getUrl('/products'),{
        cache: "no-store"
      })
      if (!productResponse.ok){
        throw new Error('failed to fetch products')
      }
     return await productResponse.json()
    }

    /* To fetch single Product */
    static getProductsById = async (id:number) => {
      const productResponse = await fetch(this.getUrl(`/products/${id}`))
      if (!productResponse.ok){
        throw new Error('failed to fetch product')
      }
      return await productResponse.json()
    }


    
}

