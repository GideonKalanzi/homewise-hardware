import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Dashboard from "./pages/Dashboard.js";
import Cart from "./pages/Cart.js";
import Checkout from "./pages/Checkout.js";

function App(){

return(

<Router>

<Navbar/>

<Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout />} />
</Routes>

</Router>

)

}
//deploy-link: https://gideonkalanzi.github.io/homewise-hardware/
export default App;
