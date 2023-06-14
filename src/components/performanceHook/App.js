import { useState , useTransition } from "react";

import { generateProducts } from "./data";

const dummyProduct = generateProducts();

function filterProduct(filterItem) {
  if (!filterItem) {
    return dummyProduct;
  }
  return dummyProduct.filter((product) => product.includes(filterItem));
}

function App() {
  const [ispending , startTransation]  = useTransition()
  const [filterItem, setFilterItem] = useState("");

  const filterProducts = filterProduct(filterItem);
  console.log(filterProducts);
  function UpdateTransition (e){
    startTransation(()=>{
      setFilterItem(e.target.value)
    })
  }
  return (
    <div>
      <input type="text" onChange={UpdateTransition} />
   {ispending&&<p>
    updatingList....
    </p>}
      {filterProducts.map((product) => {
        return (
          <div>
            <p>{product}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
