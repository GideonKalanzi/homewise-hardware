import { useState, useEffect } from "react";
import "../styles/main.css";

function Checkout(){

const [cart, setCart] = useState([]);
const [paymentMethod, setPaymentMethod] = useState("Cash");
const [transactionId, setTransactionId] = useState("");
const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
const [branch, setBranch] = useState("Nyendo");

useEffect(() => {
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
setCart(storedCart);
}, []);

// 🔥 calculate total
const total = cart.reduce((sum, item) => sum + item.price, 0);

// 🔥 place order
const placeOrder = () => {

if(cart.length === 0){
alert("Cart is empty");
return;
}

if(paymentMethod === "Mobile Money" && !transactionId){
alert("Enter transaction ID");
return;
}

const newOrder = {
id: "ORD" + Date.now(),
items: cart,
total: total,
paymentMethod: paymentMethod,
transactionId: paymentMethod === "Mobile Money" ? transactionId : null,
deliveryMethod: deliveryMethod,
branch: branch,
status: "Pending",
date: new Date().toLocaleString()
};

let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(newOrder);
localStorage.setItem("orders", JSON.stringify(orders));

// clear cart
localStorage.removeItem("cart");

alert("Order placed successfully!");

// optional refresh
window.location.reload();
};

return(

<div className="container">

<h2>Checkout</h2>

{/* CART ITEMS */}
<h3>Your Items</h3>

{cart.length === 0 ? (
<p>No items in cart</p>
) : (
<ul>
{cart.map((item,index)=>(
<li key={index}>
{item.name} - UGX {item.price.toLocaleString()}
</li>
))}
</ul>
)}

<h3>Total: UGX {total.toLocaleString()}</h3>

<hr/>

{/* PAYMENT */}
<h3>Payment Method</h3>

<select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
<option>Cash</option>
<option>Mobile Money</option>
</select>

{paymentMethod === "Mobile Money" && (
<input 
type="text"
placeholder="Enter Transaction ID"
value={transactionId}
onChange={(e)=>setTransactionId(e.target.value)}
/>
)}

<hr/>

{/* DELIVERY */}
<h3>Delivery Method</h3>

<select value={deliveryMethod} onChange={(e)=>setDeliveryMethod(e.target.value)}>
<option>Pickup</option>
<option>Delivery</option>
</select>

<hr/>

{/* BRANCH */}
<h3>Select Branch</h3>

<select value={branch} onChange={(e)=>setBranch(e.target.value)}>
<option>Nyendo</option>
<option>Kyotera</option>
<option>Buwama</option>
<option>Kayabwe</option>
</select>

<br/><br/>

<button onClick={placeOrder}>
Place Order
</button>

</div>

);

}

export default Checkout;
