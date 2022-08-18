import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';
import * as API from './Api';
import Navbar from './Navbar';
function Cart(){
let [user , update] = useState(undefined);
const {id} = useParams();
useEffect(()=>{
	console.log(id);
	const y = async ()=>{
		console.log(id);
const o = await API.getUsers();
console.log(o.record.Users);
for (let item of o.record.Users){
if(parseInt(id) === item.id){
	console.log(item);
	update(item);
}
}
}
y();
},[])
return (<div>
<Navbar logged={false} form={true}/>
<div class="MyCart-c">
 <h2> Your Cart</h2>
 <hr/>
 <div class="Carts">
 {user !== undefined && (
 	user.cart.map((item)=>{return(
 	<div class="col-11 cart">
 	<br/>
 	<div class="flex">
 	<div>
   <div class='img-conte'><img src={item.image}/></div>
   </div>
   <div>
   <h3>{item.title}</h3>
   <h4>{item.price} $</h4>
   </div>
   </div>
   </div>
)})
   
   )}
  </div>
</div>
</div>

)	


}


export default Cart;