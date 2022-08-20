import {IconButton,Badge} from '@mui/material';
import {Link} from 'react-router-dom';
import {ShoppingCart,Favorite,Login,Logout} from '@mui/icons-material';
function Navbar({user,logged,form}){
	return (
        <div class="navbar">
      <h2>MyStore</h2>
     <div class="rest">
       <div>
      {(logged) && (
      <>
      <Link to={'/cart/'+user.id}>
      <IconButton aria-label="cart">
      <Badge badgeContent={user.cart.length.toString()}  color="primary" aria-label="cart">
      <ShoppingCart className="icon"/>
      </Badge>
      </IconButton>
      </Link>
       
      <Link to={'/fav/'+user.id}>
      <IconButton aria-label="cart">
      <Badge badgeContent={user.favorites.length.toString()} color="primary" aria-label="cart">
      <Favorite className="icon"/>
      </Badge>
      </IconButton>
      </Link>

       <IconButton aria-label="cart">
    <Link to="/login"><Logout className="icon"/></Link>
      </IconButton>
      </>
       )}

      {(!logged && !form) &&(   
       <>
      <IconButton aria-label="cart">
    <Link to="/login"><Login className="icon"/></Link>
      </IconButton>
      </>
      )}
      </div>
      </div>

      
    

      </div>

      
    
	)
}

export default Navbar;