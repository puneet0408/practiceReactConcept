import { useContext } from "react";

import ProductDispatchContext from "../context/ProductDispatchContext";

function useProductDidpatch(){
  return useContext(ProductDispatchContext);
}

export default useProductDidpatch ; 

