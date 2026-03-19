import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = () => {

const storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && storedUser.email === email && storedUser.password === password){
navigate("/dashboard");
}else{
alert("Invalid credentials");
}

};

return(

<div className="auth-container">

<div className="auth-box">

<h2>Login</h2>

<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

<button onClick={handleLogin}>Login</button>

</div>

</div>

)

}

export default Login;
