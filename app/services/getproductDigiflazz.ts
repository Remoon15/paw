
import axios from "axios";

interface Product {
    product_name: string;
    category: string;
    brand: string;
    // ... informasi lainnya
  }

export async function GetApi(category: string , brand: string) {

    const datas = {
        "cmd" : "prepaid",
        "username": process.env.APP_USERNAME_DIGIFLAZZ,
      }
    try {
        const response = await axios.post(`${process.env.APP_URL_DIGIFLAZZ}/price-list` , datas)
        const dataRes: Product[] = await response.data.data
        // console.log(dataRes); 
        
        const FilterData = dataRes.filter(product => 
            product.category === category && product.brand === brand)
            return FilterData
        
    } catch (error) {
        console.error("error",error)
        return []
    }

}