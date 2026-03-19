import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/cart" element={<Cart/>}/>
</Routes>

</BrowserRouter>

)

}

export default App;
