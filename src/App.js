import React from 'react';
import Login from "./Login";
import Home from "./Home";
import Cart from './Cart';
import { useEffect , useState  } from 'react';
import *  as API from './Api';
import {Routes,Route} from 'react-router-dom';

function App() {
  
	let [products,list] = useState([]);
	let [value,setQuery] = useState('');
  
    let[logged,change] =useState(false);
    let[user,u]=useState({});
/*
	function Submit(e) {
    console.log("Name value: " + value);
    e.preventDefault();
    let y = products.filter((item)=> item.title.toUpperCase().includes(value.toUpperCase()));
    if(y.length === 0){
    	alert("Products Not Found !");
    }

    else{
    	update(y);
    	setQuery('');
    }
  }
  */
    


  function search(data){
    change(true);
    u(data);
  }



  useEffect(()=>{
   const u = async ()=>{
    const y = await API.getAll();
    console.log(y.record);
    list(y.record.products);
  
        }
   u();

   return ()=>{
    console.log("no")
   }
  },[])

  return (

    <Routes>

    <Route exact path="/" element={<Home user={user} logged={logged} Products={products}/>}>
    </Route>

    <Route exact path="/login" element={<Login search={search}/>}>
    </Route>

     <Route exact path="/cart/:id" element={<Cart/>}>
    </Route>

    </Routes>
    
    
  );
}

export default App;
