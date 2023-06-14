import React, { useReducer, useRef } from "react";
import Data from "./data";
import AddProductForm from "./AppProductForm";
import ProductList from "./productList";
import { useState } from "react";
import ProductContext from "./context/productContext";
import ProductDispatchContext from "./context/ProductDispatchContext";

function Products() {
  const [editableProduct, setEditableProduct] = useState(null);

  function vedioReducer(ProductDb, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...ProductDb, { ...action.payload, key: ProductDb.length + 1 }];
      case "DELETE":
        return ProductDb.filter((item) => item.key !== action.payload);
      case "UPDATE":
        const Index = ProductDb.findIndex(
          (prod) => prod.key === action.payload.key
        );
        const newProduct = [...ProductDb];
        newProduct.splice(Index, 1, action.payload);
        setEditableProduct(null);
        return newProduct;
      default:
        return ProductDb;
    }
  }

  const [ProductDb, dispatch] = useReducer(vedioReducer, Data);

  const editProduct = (id) => {
    setEditableProduct(ProductDb.find((prod) => prod.key === id));
  };

  const ref = useRef("");

  

  function handleClick(){
    ref.current.focus();
  }

  return (
    <ProductContext.Provider value={ProductDb}>
      <ProductDispatchContext.Provider value={dispatch}>
        <div>
        <button onClick={handleClick} >Focus</button>
          <AddProductForm ref={ref} editableProduct={editableProduct} />
          <ProductList editProduct={editProduct} />
        </div>
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
}

export default Products;
