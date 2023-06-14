import React, { useState, useMemo, useDeferredValue, useId } from "react";
import "./product.css";
import ThemeContext from "./context/themeContext.js";
import useProductDidpatch from "./hooks/Dispatch";
import useProduct from "./hooks/Producrs";
import { useCallback } from "react";
import getMoreProduct from "./getMoreProduce";

const ProductList = ({ editProduct }) => {
  //const theme = useContext(ThemeContext);

  const ProductDb = useProduct();
  const dispatch = useProductDidpatch();
  // useId use for generating new and unique id every time
  const uid = useId();
  function getProduct() {
    dispatch({ type: "LOAD", payload: getMoreProduct });
  }
  const defProducts = useDeferredValue(ProductDb);

  // render - mounting
  //  useEffect(()=>{
  //  const id =  setInterval(()=>{
  //   console.log("video callling" , ProductDb.key)
  //   },3000)
  //   return()=>{
  //     clearInterval(id)
  //   }
  //  },[ProductDb.key])

  const fibfunction = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const [mode, setMode] = useState("darkMode");
  const [num] = useState(20);

  const fibMemoized = useMemo(() => {
    fibfunction(num);
  }, [num, fibfunction]);

  return (
    <ThemeContext.Provider value={mode}>
      <>
        {fibMemoized}

        <button
          onClick={() =>
            setMode(mode === "darkMode" ? "lightMode" : "darkMode")
          }
        >
          Mode
        </button>

        <button onClick={getProduct}>getMoreVedios</button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {defProducts.map((item) => {
            return (
              <>
                <div
                  id={uid}
                  className={mode}
                  key={item.key}
                  style={{
                    border: "1px solid black",
                    position: "relative",
                    margin: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <button
                      className={`"delete" ${mode}`}
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: item.key })
                      }
                    >
                      X
                    </button>
                    <button
                      className={`"edit" ${mode}`}
                      onClick={() => editProduct(item.key)}
                    >
                      edit
                    </button>
                  </div>

                  <div>
                    <img
                      src={item.Img}
                      alt="photos"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p>{item.Machine}</p>
                  <p>{item.materialName}</p>
                </div>
              </>
            );
          })}
        </div>
      </>
    </ThemeContext.Provider>
  );
};

export default ProductList;
