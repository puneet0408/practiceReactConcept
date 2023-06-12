import React from "react";

const ProductList = ({ ProductDb, deleteProduct, editProduct }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {ProductDb.map((item) => {
        return (
          <div
            key={item.key}
            style={{
              border: "1px solid black",
              position: "relative",
              margin: "1rem",
            }}
          >
            <button
              onClick={() => deleteProduct(item.key)}
              style={{
                position: "absolute",
                Index: "9999",
                top: "0",
                left:"4rem",
                backgroundColor: "gray",
                borderRadius: "2rem",
                color: "white",
                padding: ".5rem",
              }}
            >
              X
            </button>
            <button
              onClick={() => editProduct(item.key)}
              style={{
                position: "absolute",
                Index: "9999",
                top: "0",
                left: "0",
                backgroundColor: "gray",
                borderRadius: "2rem",
                color: "white",
                padding: ".5rem",
              }}
            >
              edit
            </button>
            <div>
              <img src={item.Img} alt="photos" style={{ width: "100%" }} />
            </div>
            <p>{item.Machine}</p>
            <p>{item.materialName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
