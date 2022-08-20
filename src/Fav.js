import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useState} from 'react';
import Footer from './Footer';
import {IconButton,Button} from '@mui/material';
import {Delete} from '@mui/icons-material';
import * as API from './Api';
import Navbar from './Navbar';
function Fav(){
let [user,edit] = useState(undefined);
let[users,i]=useState(undefined);
const {id} = useParams();

useEffect(()=>{
	console.log(id);
	let t = async(n)=>{
		if(Array.isArray(user)){
		let g = await API.getUsers();
		console.log(g);
		let y = g.record.Users.filter((us)=> us.id === parseInt(n));
		console.log(y);
	    g.record.Users = g.record.Users.map((item)=>{if(item.id === parseInt(n)){
	     item['favorites'] = user;
	     return item;	
	    }
	    else{
	    	return item;
	    }
	});
	    console.log(g.record.Users);
	    await API.updateUsers(g.record.Users);
	}

      else{
        	let g = await API.getUsers();
		console.log(g);
		let y = g.record.Users.filter((us)=> us.id === parseInt(n));
      	edit(y[0]['favorites']);
      }
	  
	}
	t(id);
})


return (<div>
<Navbar logged={false} form={true}/>
<div class="MyCart-c">
 <h2> Your Favorites</h2>
 <hr/>
 <div class="Carts">
 {user !== undefined && (
 	user.map((item)=>{return(
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
   <div className="end">
   <IconButton onClick={(e)=>{
   	         let k = user.filter((us)=> us.id !== item.id );
             console.log(k);
             edit(k);
             }} aria-label="cart">
             <Delete className="icon delete"/>
             </IconButton>
   </div>
   </div>
   </div>
)})
 	)}


 	 
  </div>
</div>
<Footer/>
</div>

)	



}

export default Fav;