


// useState................

// import React, { useRef, useState } from "react";
// const Form = () => {
//     const [product, setProduct] = useState({
//         title: "",
//         desc: "",
//         price: 0,
//         category: "",
//         tags: [],
//         // images: {
//         //     sm: "",
//         //     md: "",
//         //     lg: ""
//         // },
//         quantity: 0,
//     });


//     console.log(product);




//     const handlehange = event => {
//         const { name, value } = event.target;
//         setProduct((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     }

//     const tagRef = useRef();

//     console.log(tagRef);

//     const handleTag = (e) => {
//         e.preventDefault();
//         const tags = tagRef.current.value.split(",");
//         tags.forEach(tag => {
//             setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }))
//         });

//     };



//     const handleRemoveTag = (tag) => {
//         setProduct((prev) => ({
//             ...prev,

//             tags: prev.tags.filter((t) => t !== tag),
//         }));
//     };

//     function HandleSubmit(event) {
//         event.preventDefault();
//         event.target.reset();
//     }

//     const increment = () => {
//         setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
//     };

//     const decrement = () => {
//         if (product.quantity > 0) (
//             setProduct((prev) => ({
//                 ...prev,
//                 quantity: prev.quantity - 1,
//             })))
//     };

//     return (
//         <div onSubmit={HandleSubmit} >
//             <form>
//                 <input type="text"
//                     placeholder="Title"
//                     name="title"
//                     onChange={handlehange} />
//                 <input type="text"
//                     placeholder="Desc"
//                     name="desc"
//                     onChange={handlehange} />
//                 <input type="text"
//                     placeholder="Price"
//                     name="price"
//                     onChange={handlehange} />
//                 <p>Category:</p>
//                 <select name="category"
//                     onChange={handlehange} >
//                     <option value="sneakers">Sneakers</option>
//                     <option value="tshirts">T-shirts</option>
//                     <option value="jeans">Jeans</option>
//                 </select>
//                 <p>Tags:</p>
//                 <textarea ref={tagRef} placeholder="Seperate tage with comma...">
//                 </textarea>
//                 <button onClick={handleTag} >
//                     Add Tags
//                 </button>
//                 <div className="tags">
//                     {product.tags.map((tag) => (
//                         <small key={tag} onClick={() => handleRemoveTag(tag)}>
//                             <button type="button" >{tag}</button>
//                         </small>
//                     ))}
//                 </div>
//                 <div className="quantity" >
//                     <button type="button" onClick={increment} > + </button>
//                     <span>Quantity ({product.quantity})</span>
//                     <button type="button" onClick={decrement} > - </button>
//                 </div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Form;



// useReducer------------------------


import { useReducer, useRef } from "react";
import { INITIAL_STATE , formReducer } from "./formReducer";



const Form = () => {
 

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };

  return (

    //USING USEREDUCER
    
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button onClick={() => dispatch({ type: "DECREASE" })} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: "INCREASE" })} type="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;