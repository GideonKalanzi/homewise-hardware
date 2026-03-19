import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/main.css";

function Navbar(){

const [cartCount, setCartCount] = useState(0);

// update cart count whenever localStorage changes
useEffect(()=>{
    const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
    };

    updateCart(); // initial load
    window.addEventListener("storage", updateCart);
}, []);

const isLoggedIn = localStorage.getItem("user");

return(
    <div className="navbar">

        <div className="logo">Homewise Hardware</div>

        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({cartCount})</Link>

            {!isLoggedIn && <Link to="/login">Login</Link>}
            {!isLoggedIn && <Link to="/signup">Signup</Link>}

            {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}

        </div>

    </div>
);
}

export default Navbar;
