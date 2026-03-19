import { Link } from "react-router-dom";
import "../styles/main.css";

function Home(){

return(

<div>

<div className="hero">
<h1>Hardware Made Easy</h1>
<p>Check stock across all branches before you move</p>
</div>

<div className="container">

<h2>Popular Products</h2>

<div className="products">

<div className="card">
<h3>Electric Drill</h3>
<p className="price">$85</p>
<Link to="/product"><button>View</button></Link>
</div>

<div className="card">
<h3>Steel Hammer</h3>
<p className="price">$12</p>
<Link to="/product"><button>View</button></Link>
</div>

<div className="card">
<h3>PVC Pipe</h3>
<p className="price">$18</p>
<Link to="/product"><button>View</button></Link>
</div>

</div>

</div>

</div>

)

}

export default Home;
