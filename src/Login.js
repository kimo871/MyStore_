import './index.css';
import *  as API from './Api';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState ,useEffect} from 'react';
import Navbar from './Navbar';
import {Button} from '@mui/material';
function Login({search}){
   let [email,upEmail] =useState(" ");
   let [users,edit] =useState([]);
   let [pass,upPass] = useState(" ");
  // let[err,find] =useState(false);
   let navigate =useNavigate();

   useEffect(()=>{
     const i = async ()=>{
     	const o = await API.getUsers();
     	edit(o.record.Users);
     	console.log(o.record.Users);
     }
     i();
     
   },[])

	function check(event){
		console.log("Email is " + email);
		console.log("Password is " + pass);
		event.preventDefault();
		let result = users.filter((user)=> (user.email ===email && user.password ===pass));
    if(result.length >0){
    search(result[0]);
    navigate("/")
    }
    return result;
 
	}
return (<>
<Navbar logged={false} form={true}/>
<div className="Container">
<div className="form">
<h1><center>Login To Your Shop Account.</center></h1>
 <form onSubmit={check}>
 <label className="email">
   Email :
   <br/>
   <br/>
  <input type="text" value={email} onChange={(event)=> upEmail(event.target.value)} placeholder="Enter Your email..." name="email"/>
  </label>
  <label className="email">
  
   Password :
   <br/>
   <br/>
  <input type="password"  value={pass} onChange={(event)=> upPass(event.target.value)} placeholder="Enter Your password..." name="pass"/>
  </label>
  
  <Button  type="submit" variant="contained" color="primary">Apply</Button>
  </form>
</div>
</div>
</>
)	

}

export default Login;