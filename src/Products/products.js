import React from "react";
import Data from "./data";
import AddProductForm from "./AppProductForm";
import ProductList from "./productList";
import { useState } from "react";

function Products() {
  const [ProductDb, setProductDb] = useState(Data);
  const [editableProduct , setEditableProduct] = useState(null)

  function AddProducts(Product) {
    setProductDb([...ProductDb, { ...Product, key: ProductDb.length + 1 }]);
  }

  const DeleteProduct = (id) => {
    const RemaningProduct = ProductDb.filter((item) => item.key !== id);
    setProductDb(RemaningProduct);
  };
  const editProduct = (id) => {
    setEditableProduct(ProductDb.find((prod)=>prod.key===id))
  
  };

  function UpdateProduct(Product){
    const Index = ProductDb.findIndex((prod)=>prod.key===Product.key)
    const newProduct = [...ProductDb];
    newProduct.splice(Index , 1, Product)
    setProductDb(newProduct)
  }

  return (
    <div>
        
        <AddProductForm UpdateProduct={UpdateProduct} editableProduct={editableProduct} AddProductToDb={AddProducts} />
      <ProductList
        editProduct={editProduct}
        deleteProduct={DeleteProduct}
        ProductDb={ProductDb}
      />
    </div>
  );
}

export default Products;
