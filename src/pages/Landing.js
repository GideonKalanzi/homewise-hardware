import { useState } from "react";
import "../styles/main.css";
import productsData from "../data/productsData.js";
import Chatbot from "../components/Chatbot";

function Landing(){

const [selectedCategory, setSelectedCategory] = useState("All");

// 🔹 Extract categories dynamically
const categories = ["All", ...productsData.map(c => c.category)];

// 🔹 Flatten all products into usable format
const allProducts = productsData.flatMap(category =>
category.items.map(item => ({
name: item,
category: category.category,
price: Math.floor(Math.random() * 90000) + 10000, // temp pricing
image: "https://via.placeholder.com/150"
}))
);

// 🔹 Filter products based on selected category
const filteredProducts =
selectedCategory === "All"
? allProducts
: allProducts.filter(p => p.category === selectedCategory);

// 🔹 Add to cart
const addToCart = (product) => {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
window.dispatchEvent(new Event("storage"));
alert("Added to cart");
};

return(

    <div>

        {/* HERO */}
        <div className="hero">
            <h1>Homewise Hardware</h1>
            <p>Everything you need, across all branches</p>
        </div>

        <div className="container">

            <div className="layout">

                {/* LEFT SIDE - CATEGORIES */}
                <div className="sidebar">
                    <h3>Categories</h3>

                    {categories.map((cat,index)=>(
                    <div 
                        key={index}
                        className={`category ${selectedCategory===cat?"active":""}`}
                        onClick={()=>setSelectedCategory(cat)}
                        >
                        {cat}
                    </div>
                    ))}

                </div>

                {/* RIGHT SIDE - PRODUCTS */}
                <div className="main-content">

                    <h2>{selectedCategory} Products</h2>

                    <div className="products">

                        {filteredProducts.map((p,index)=>(
                        <div key={index} className="card">

                            <img src={p.image} alt={p.name}/>

                            <h3>{p.name}</h3>
                            <p className="price">UGX {p.price.toLocaleString()}</p>

                            <button onClick={()=>addToCart(p)}>
                            Add to Cart
                            </button>

                        </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
        <Chatbot setSelectedCategory={setSelectedCategory} />

    </div>

);

}

export default Landing;
