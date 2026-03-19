import "../styles/main.css";

function Admin(){

return(

<div className="container">

<h2>Inventory Management</h2>

<table border="1" cellPadding="10" width="100%">

<tr>
<th>Product</th>
<th>Ntinda</th>
<th>Mukono</th>
<th>Entebbe</th>
<th>Action</th>
</tr>

<tr>
<td>Electric Drill</td>
<td>12</td>
<td>5</td>
<td>0</td>
<td><button>Edit</button></td>
</tr>

<tr>
<td>Hammer</td>
<td>40</td>
<td>10</td>
<td>3</td>
<td><button>Edit</button></td>
</tr>

</table>

</div>

)

}

export default Admin;
