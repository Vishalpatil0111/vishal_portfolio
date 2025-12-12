// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Test() {

//     useEffect(async() => {
//         const res = await axios.get("https://fakestoreapi.com/products")
//         const data = await res.data
//         setProducts(data)

//     },[])

//     function handledelete(id) {
//         const newarr = products.filter(p => p.id !== id)
//         setProducts(newarr)
//     }

// const [products, setProducts] = useState([])
//   return (
//     <div>
//       {products.map((item) => (
//         <div key={item.id}  className="">
//               <h1 className='text-blue-400'>{item.title}</h1>
//               <button className='text-white border border-white' onClick={() => handledelete(item.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Test

// import React, { useState } from "react";

// export default function Test() {
//   const [dark, setDark] = useState(false);
//   return (
//     <div
//       className={`w-full h-screen ${
//         dark ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <button className="px-3 py-2 m-4 rounded-md border border-blue-200" onClick={() => setDark(!dark)}>
//         {dark ? "Light Mode" : "Dark Mode"}
//       </button>
     
//     </div>
//   );
// }

import React, { useState } from 'react'

function Test() {
  const [color, setColor] = useState('blue')


  return (
    <div className="w-full h-screen flex flex-col">
      <div
        style={{ backgroundColor: color, height: "100vh", padding: 20 }}
      ></div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default Test
