import { useState, useEffect } from "react";
import "../styles/main.css";

function Cart(){

const [cart,setCart] = useState([]);

useEffect(()=>{
const stored = JSON.parse(localStorage.getItem("cart")) || [];
setCart(stored);
}, []);

const removeItem = (index) => {
let newCart = [...cart];
newCart.splice(index,1);
setCart(newCart);
localStorage.setItem("cart", JSON.stringify(newCart));
};

return(
<div className="container">
<h2>Your Cart</h2>

{cart.length === 0 && <p>No items in cart</p>}

{cart.map((item,index)=>(
<div key={index} className="card">
<h3>{item.name}</h3>
<p className="price">${item.price}</p>
<button onClick={()=>removeItem(index)}>Remove</button>
</div>
))}

</div>
)

}

export default Cart;
