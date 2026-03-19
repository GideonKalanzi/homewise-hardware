import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function Dashboard(){

const navigate = useNavigate();

const logout = () => {
localStorage.removeItem("user");
navigate("/");
};

return(

<div className="container">

<h2>Dashboard</h2>

<p>Welcome to Homewise Admin Panel</p>

<h3>Quick Actions</h3>

<button>Add Product</button>
<br/><br/>
<button>Manage Inventory</button>
<br/><br/>
<button onClick={logout}>Logout</button>

</div>

)

}

export default Dashboard;
