import { useState, useEffect } from "react";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";

function Cart(){

    const [cart,setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
    }, []);

    const removeItem = (index) => {
        let newCart = [...cart];
        newCart.splice(index,1);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage")); //update navbar cart count by triggering event
    };

    const total = cart.reduce((sum,item)=> sum + item.price,0);

    return(
        <div className="container">
            <h2>Your Cart</h2>

            {cart.length === 0 && <p>No items in cart</p>}

            {cart.map((item,index)=>(
                <div key={index} className="card">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <p className="price">UGX {item.price}</p>

                    <button onClick={()=>removeItem(index)}>Remove</button>
                </div>
            ))}

            <h3 style={{marginTop:"20px"}}>Total: UGX {total}</h3>

            <button onClick={() => navigate("/checkout")}>Checkout</button>

        </div>
    )

}

export default Cart;
