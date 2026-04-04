import { useState } from "react";
import "../styles/main.css";
import productsData from "../data/productsData.js";

function Chatbot({ setSelectedCategory }){

const [open, setOpen] = useState(false);
const [messages, setMessages] = useState([
{ sender: "bot", text: "Hi 👋 How can I help you today?" }
]);
const [input, setInput] = useState("");

const handleSend = () => {

if(!input.trim()) return;

const userMessage = { sender: "user", text: input };
let botReply = { sender: "bot", text: "" };

const text = input.toLowerCase();

let foundCategory = null;

// 🔍 1. CHECK CATEGORY MATCH
for (let category of productsData) {
if (text.includes(category.category.toLowerCase())) {
foundCategory = category.category;
break;
}
}

// 🔍 2. CHECK PRODUCT MATCH (if no category found)
if (!foundCategory) {
for (let category of productsData) {
for (let item of category.items) {

// handle both string or object products
const productName = typeof item === "string" ? item : item.name;

if (text.includes(productName.toLowerCase())) {
foundCategory = category.category;
break;
}
}

if (foundCategory) break;
}
}

// 🎯 RESPONSE LOGIC
if (foundCategory) {
botReply = {
sender: "bot",
text: `Got you 👍 Showing ${foundCategory}`
};
setSelectedCategory(foundCategory);
} else {
botReply = {
sender: "bot",
text: "Try asking about tools, locks, paints, nails… 👀"
};
}

// UPDATE CHAT
setMessages(prev => [...prev, userMessage, botReply]);
setInput("");
};

return(

<>
{/* FLOATING BUTTON */}
<div className="chatbot-button" onClick={()=>setOpen(!open)}>
💬
</div>

{/* CHAT WINDOW */}
{open && (
<div className="chatbot-box">

<div className="chatbot-header">
Chat Support
</div>

<div className="chatbot-messages">
{messages.map((msg,index)=>(
<div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
{msg.text}
</div>
))}
</div>

<div className="chatbot-input">
<input 
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Type a message..."
/>
<button onClick={handleSend}>Send</button>
</div>

</div>
)}
</>

);

}

export default Chatbot;
