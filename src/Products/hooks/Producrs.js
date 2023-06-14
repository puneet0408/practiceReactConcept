
import  { useContext } from "react"
import ProductContext from "../context/productContext";



function useProduct(){
    return useContext(ProductContext)
}

export default useProduct;