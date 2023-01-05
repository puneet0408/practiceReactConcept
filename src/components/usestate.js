import { React, useState } from "react";

function UseState() {

  // common mistakes of useState 

  //---------------- 1 usestate function update --------------------------
//       const [number , setNumber] = useState(0);
//       const increase =() =>{
//           setNumber (number + 1)
//       }  // it take initial value or updated value of state 
//       const increaseAsync =() =>{
//           setTimeout(()=>{
//               setNumber ((currentValue)=>currentValue + 1) // but if we using function version it take current value of state 
//           },2000)
//       }
//    return(
//       <div>
//              <button onClick={ increase} > increase </button>
//              <button onClick={ increaseAsync} > increaseAsync </button>
//              <h1>{number}</h1>
//       </div>
//    )




  // ----------------- 2 initialization problem

//   const [user , setUser]= useState();
//   // if we declare user weth blank state and try to acess user it give us a white screeen. 
//   // try to initalize your state with empty state like "" , () ,{} accord  to your need 
//   // write here which trpe of data you will store here 

//   return (
//       <div> 
//           <div>
//               <h2>user : </h2>
//           userName is : {user?.name}
//           {/* userName is : { user && user.name} */}
//           {/* ? use to verify user have some value or not or we can say true comdition */}
//           </div>
//       </div>

//       // we use ? for verifing an object of an  array 
//   )


  // ------------ 3 change my initate state value or we can say change predefine value in state 

//   const [input ,setInput] = useState("");
//   const [user,setUser] = useState ({
//       name:"Ricky",
//       email:"1234@ff",
//       image:["g.jpg", "p.png" ]
//   })

// //   if i want to change the name directly this will update my whole object and my updated name value will left only . for updating value in initally declare object we use spread operator.

//       const changeName = () =>{
//           setUser(prev=>({...prev,name : input}))
//       }

//       console.log(user);

//       return(
//           <div>
//               <h2>
//                   User :
//               </h2>
//               <input onChange={ (e)=> setInput(e.target.value)}
//               placeholder="enter userName"/>
//               <button onClick={changeName} >
//   change username 
//               </button>
//               <span> useName is : {user.name} </span>
//           </div>
//       )


//   const [signupForm, setForm] =useState({
//       name: "",
//       email: "",
//       number: "",
//       address: "",
//       password: "",
//       confirm_password: "",
//     });

//     function handleChange(event) {
//       const { name, value } = event.target;
//       setForm((prevInput) => ({
//         ...prevInput,
//         [name]: value,
//       }));
//     }

//     function HandleSubmit(event) {
//       event.preventDefault();
//       event.target.reset();

//     }

//   console.log(signupForm);

//   return(
//       <div>
//           <form onSubmit={HandleSubmit} style={{ width: "100%" }}>
//           <div className="IPWithError">
//             <div class="input-group has-validation">

//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 type="text"
//                 maxLength="20"
//                 class="form-control"
//                 onChange={handleChange}
//                 value={signupForm.name}
//               />
//             </div>

//           </div>
//           <div className="IPWithError">
//             <div class="input-group has-validation">

//               <input
//                 name="email"
//                 placeholder="email"
//                 type="text"
//                 maxLength="30"
//                 onChange={handleChange}
//                 value={signupForm.email}
//                 class="form-control"
//               />
//             </div>

//           </div>
//           <div className="IPWithError">
//             <div class="input-group has-validation">

//               <input
//                 name="number"
//                 placeholder="mobile no"
//                 type="text"
//                 onChange={handleChange}
//                 value={signupForm.number}
//                 minlength="10"
//                 maxlength="10"
//                 class="form-control"
//               />
//             </div>

//           </div>
//           <div>
//             <div class="input-group has-validation">

//               <input
//                 name="address"
//                 placeholder="address"
//                 onChange={handleChange}
//                 value={signupForm.address}
//                 type="text"
//                 class="form-control"
//               />
//             </div>
//           </div>
//           <div className="IPWithError">
//             <div class="input-group has-validation">

//               <input
//                 name="password"
//                 placeholder="Password"
//                 type="password"
//                 onChange={handleChange}
//                 value={signupForm.password}
//                 class="form-control"
//               />
//             </div>

//           </div>
//           <div className="IPWithError">
//             <div class="input-group has-validation">

//               <input
//                 name="confirm_password"
//                 placeholder="Confirm Password"
//                 type="password"
//                 onChange={handleChange}
//                 value={signupForm.confirm_password}
//                 class="form-control"
//               />
//             </div>

//           </div>
//           <div>
//             <button

//             >
//              submit
//             </button>
//           </div>
//         </form>
//       </div>
//   )



  const [products, setprodict] = useState([
    { id: 1, title: "black sneakers", quantity: 1 },
    { id: 2, title: "red t-shirt", quantity: 1 },
    { id: 3, title: "blue jeans", quantity: 1 }
  ])

  const [selectedId, setselectedId] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedId);
  console.log(selectedId);

  const increment = (id) => {
    setprodict((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 }
        } else return product;
      });
    });
  };

  const handleChoose = (id) => {
    setselectedId(id);
  }


  return (
    <div>
      <h4>All products</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)} >
              choose
            </button>
          </span>
          <div className="quantity" >
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increment(product.id)} >
              +
            </button>
          </div>
        </div>
      ))}
      <h4>selected product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  )
}

export default UseState;