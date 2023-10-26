import { Link } from "react-router-dom";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

export const NavBar = () => {
 const { username } = useContext(UsernameContext);
 return (
  <nav className="main-navbar">
   <Link className="navbar-link" to="/home">
    Home
   </Link>
   <Link className="navbar-link" to="/articles">
    View Articles
   </Link>
   <Link className="navbar-link" to="/postarticle">
    Post Article
   </Link>
   <Link className="navbar-link" to="account">
    {username === null ? "User Profile" : `${username}'s Profile`}
   </Link>
  </nav>
 );
};
