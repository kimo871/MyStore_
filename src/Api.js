// Api Script
const Key = "$2b$10$fi/g9oiKX94dguYaK.XB2eLZ01AJlOdDbWlb6d.wkeTB/LGuwvz7e";
const url ="https://api.jsonbin.io/v3";
const user_bin ='62e911c470a3846ee75103e3';
const products_bin ='62e89aa060c3536f3fcd9ccd';
const headers={
	'method' :"GET",
	'X-Master-Key':Key
};
export const getAll = ()=>{
 return fetch(`${url}/b/${products_bin}/latest`,{headers}).then((res)=> res.json()).then((data)=> data)
}

export const getUsers = () =>{
	 return fetch(`${url}/b/${user_bin}/latest`,{headers}).then((res)=> res.json()).then((data)=> data)
}

export const updateUsers = (body) =>{
	return fetch(`${url}/b/${user_bin}`,{
	 'method':'PUT',
	 'headers':{
	 'Content-Type':'application/json',
	 'X-Master-Key':Key
	 },
	 'body': JSON.stringify({'Users':body})
	})
}


