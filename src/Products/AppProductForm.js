import React, { useImperativeHandle, useRef, useState } from "react";
import { useEffect } from "react";
import useProductDidpatch from "./hooks/Dispatch";
import { forwardRef } from "react";
 

const AddProduct = forwardRef(function AddProduct({ editableProduct }, ref) {
  const dispatch = useProductDidpatch();

  const iRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        iRef.current.focus();
      },
    };
  });

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
    if (editableProduct) {
      dispatch({ type: "UPDATE", payload: product });
    } else {
      dispatch({ type: "ADD", payload: product });
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
          ref={iRef}
          type="text"
          onChange={handleChange}
          name="Machine"
          placeholder="Machine Name"
          value={product.Machine}
        />
        <input
          ref={ref}
          type="text"
          onChange={handleChange}
          name="materialName"
          placeholder="MaterialName"
          value={product.materialName}
        />
        <button onClick={handleSubmit}>
          {editableProduct ? "edit" : "Add"} Product
        </button>

       
      </div>
    </div>
  );
});

export default AddProduct;
