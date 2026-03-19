import "../styles/main.css";

function Product(){

return(

<div className="container">

<h2>Electric Drill</h2>
<p className="price">UGX 85000</p>

<h3>Available in Branches</h3>

<table border="1" cellPadding="10" width="100%">

<tr>
<th>Branch</th>
<th>Status</th>
</tr>

<tr>
<td>Ntinda</td>
<td style={{color:"green"}}>In Stock</td>
</tr>

<tr>
<td>Mukono</td>
<td style={{color:"orange"}}>Low Stock</td>
</tr>

<tr>
<td>Entebbe</td>
<td style={{color:"red"}}>Out of Stock</td>
</tr>

</table>

<br/>

<button>Add to Cart</button>

</div>

)

}

export default Product;
