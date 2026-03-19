import "../styles/main.css";

function Landing(){

    const addToCart = (product) => {

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");

//update navbar cart count by triggering event
window.dispatchEvent(new Event("storage"));
};

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

<div className="category">Tools</div>
<div className="category">Plumbing</div>
<div className="category">Electrical</div>
<div className="category">Construction</div>
<div className="category">Paint</div>

</div>



{/* RIGHT SIDE - PRODUCTS */}
<div className="main-content">

<h2>Products</h2>

<div className="products">

<div className="card">
<h3>Electric Drill</h3>
<p className="price">$85</p>
<button onClick={()=>addToCart({name:"Electric Drill", price:85})}>
Add to Cart
</button>
</div>

<div className="card">
<h3>Hammer</h3>
<p className="price">$12</p>
<button onClick={()=>addToCart({name:"Hammer", price:12})}>
Add to Cart
</button>
</div>

<div className="card">
<h3>PVC Pipes</h3>
<p className="price">$18</p>
<button onClick={()=>addToCart({name:"PVC Pipes", price:18})}>
Add to Cart
</button>
</div>

<div className="card">
<h3>Paint Bucket</h3>
<p className="price">$25</p>
<button onClick={()=>addToCart({name:"Paint Bucket", price:25})}>
Add to Cart
</button>
</div>

</div>

</div>

</div>

</div>

</div>

)

}

export default Landing;
