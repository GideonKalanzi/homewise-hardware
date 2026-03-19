import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function Signup(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();

const handleSignup = () => {
localStorage.setItem("user", JSON.stringify({email,password}));
navigate("/dashboard");
};

return(

<div className="auth-container">

<div className="auth-box">

<h2>Signup</h2>

<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

<button onClick={handleSignup}>Create Account</button>

</div>

</div>

)

}

export default Signup;
