import React, { useState } from "react";
import { useEffect } from "react";

function AddProduct({ AddProductToDb, editableProduct , UpdateProduct }) {
  const initialState = {
    Machine: "",
    materialName: "",
  };
  const [product, setProduct] = useState(initialState);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editableProduct){
        UpdateProduct(product)
    }else{
    AddProductToDb(product);  
    }
    setProduct(initialState);
  };

  useEffect(() => {
    if (editableProduct) {
      setProduct(editableProduct);
    }
  }, [editableProduct]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          name="Machine"
          placeholder="Machine Name"
          value={product.Machine}
        />
        <input
          type="text"
          onChange={handleChange}
          name="materialName"
          placeholder="MaterialName"
          value={product.materialName}
        />
        <button onClick={handleSubmit}>{editableProduct?"edit":"Add"} Product</button>
      </div>
    </div>
  );
}

export default AddProduct;
