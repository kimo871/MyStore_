import Navbar from './Navbar';
import Footer from './Footer';
import {useEffect , useState} from 'react';
import  "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';
import {IconButton,Button} from '@mui/material';
import {ShoppingCart,Favorite} from '@mui/icons-material';
import *  as API from './Api';
function Home({user,logged,Products}){
  let [userd,state]= useState(user);
  //let [show , define] = useState(false);
  useEffect(()=>{
   console.log(user);
  })

  function send(product,type){
    let t = async ()=>{
      let users = await API.getUsers();
      let user_x= users.record.Users.filter((item)=> item.id === user.id);
      for(let y in user_x[0]){
        if(y === type){
          let n = user_x[0][type].filter((item)=> item.id === product.id)
         n.length > 0 ? user_x[0][type].map((item)=>{
          if(item.id === product.id){return product}
            else{return item}
         }): user_x[0][y].push(product);
         users.record.Users = users.record.Users.map((item)=>{
         if(item.id === user.id){return user_x[0]}
          else{return item;}
         });
         console.log(users.record.Users);
         await API.updateUsers(users.record.Users);
         state(user_x[0]);
         
        }
      }
    }
    t();
  }


return (
<div className="app">
<Navbar user={userd} logged={logged} form={false} />
<br/>
      <br/>
      <div className="cont">
       {logged &&(
      <div className="Profile">
       <div className="user">
       <h2>Welcome Back  <FontAwesomeIcon className='icon-we' size='1x' icon={faHandshake} /> , {user.username} </h2>
       <h4 >We Will Always Notify you with latest offers on your mail : <span>{user.email}</span></h4>
       </div>
      </div>

      )}

        <center>
        
        <div class="input">
      <input className="input" placeholder="Search By Product Name , Category.." type="text" />
      </div>
      <br/>
      <div class="btns">
      <Button  type="submit" variant="contained" color="primary">Apply</Button>&nbsp;&nbsp;
      <Button variant="contained" color="primary">Reset</Button>
      </div>
      </center>
          <div className="m-3 box-container">
      <h2>Featured Products</h2>
      <div className="products-box">
       {Products.map((product)=>{
       	return (
         <div key={product.id} className="col-6">
         <div className="img-container"><img alt="text" src={product.image}/></div>
       	 <div className="body">
           <h4>{product.category}</h4>
           <div className="title">
           <h3>{product.title}</h3>
           <br/>
           <h4>{product.price} $</h4>
           </div>
           <div className="d-flex pt-1  ">
             <IconButton onClick={(e)=>{
              logged ? send(product,'cart') : alert("Login First")
             }} aria-label="cart">
             <ShoppingCart className="icon"/>
             </IconButton>
             <IconButton onClick={(e)=>{
              logged ? send(product,'favorites') : alert("Login First")
             }} aria-label="cart">
             <Favorite className="icon"/>
             </IconButton>
             </div>
        </div>
       	 </div>
       	)
       })}
  
      </div>
      </div>
      </div>
  <Footer/>
</div>
)	

}

export default Home;