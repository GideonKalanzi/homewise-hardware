import { useState } from "react";
import "../styles/main.css";

function Landing(){

    const [selectedCategory, setSelectedCategory] = useState("All");

    const products = [
        {
            name:"Electric Drill",
            price:85000,
            category:"Tools",
            image:"https://images.unsplash.com/photo-1586864387789-628af9feed72"
        },
        {
            name:"Hammer",
            price:12000,
            category:"Tools",
            image:"https://images.unsplash.com/photo-1604668915840-580c30026e5e"
        },
        {
            name:"PVC Pipe",
            price:18000,
            category:"Plumbing",
            image:"https://images.unsplash.com/photo-1581090700227-4c4c8b6c98c5"
        },
        {
            name:"Paint Bucket",
            price:25000,
            category:"Construction",
            image:"https://images.unsplash.com/photo-1598300056249-3c6c2dff7e94"
        }
    ];

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storage")); //update navbar cart count by triggering event
        alert("Added to cart");
    };

    const filteredProducts =
    selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

    return(

    <div>

    <div className="hero">
    <h1>Homewise Hardware</h1>
    <p>Everything you need, across all branches</p>
    </div>

    <div className="container">

    <div className="layout">

    {/* LEFT SIDE - CATEGORIES */}
    <div className="sidebar">
    <h3>Categories</h3>

    <div className={`category ${selectedCategory==="All"?"active":""}`} 
    onClick={()=>setSelectedCategory("All")}>All</div>

    <div className={`category ${selectedCategory==="Tools"?"active":""}`} 
    onClick={()=>setSelectedCategory("Tools")}>Tools</div>

    <div className={`category ${selectedCategory==="Plumbing"?"active":""}`} 
    onClick={()=>setSelectedCategory("Plumbing")}>Plumbing</div>

    <div className={`category ${selectedCategory==="Construction"?"active":""}`} 
    onClick={()=>setSelectedCategory("Construction")}>Construction</div>

    </div>



    {/* RIGHT SIDE - PRODUCTS */}
    <div className="main-content">

    <h2>{selectedCategory} Products</h2>

    <div className="products">

        {filteredProducts.map((p,index)=>(
            <div key={index} className="card">

                <img src={p.image} alt={p.name}/>

                <h3>{p.name}</h3>
                <p className="price">UGX {p.price}</p>

                <button onClick={()=>addToCart(p)}>
                Add to Cart
                </button>

            </div>
        ))}

    </div>

    </div>

    </div>

    </div>

    </div>

    )

}

export default Landing;
