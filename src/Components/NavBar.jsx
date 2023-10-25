import { Link } from "react-router-dom";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

export const NavBar = () => {
 const { username } = useContext(UsernameContext);
 return (
  <nav>
   <Link to="/"> Home </Link> | <Link to="/articles"> View Articles </Link> | <Link to="/postarticle"> Post Article</Link> |
   <Link to="account"> {username === null ? "User Profile" : `${username}'s Profile`} </Link>
  </nav>
 );
};
