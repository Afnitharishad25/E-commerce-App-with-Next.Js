 import { ServiceBase } from "./ServiceBase"
 import { Product } from "@/types/product"


 export class ProductsService extends ServiceBase{
  
    /* To fetch All Products  */
    static async getProducts():Promise <Product[]> {
      const productResponse = await fetch(this.getUrl('/products'),{
        next:{revalidate:60}
      })
      if (!productResponse.ok){
        console.error("API ERROR:",productResponse.status)
        return []
      }
     return await productResponse.json()
    }

    /* To fetch single Product */
    static getProductsById = async (id:number) => {
      const productResponse = await fetch(this.getUrl(`/products/${id}`),{
         next:{revalidate:60}
      })
      if (!productResponse.ok){
        console.error("Failed to fetch product:", productResponse.status)
      }
      return await productResponse.json()
    }


    
}

