import { Link } from "react-router-dom";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

export const NavBar = () => {
 const { username } = useContext(UsernameContext);
 return (
  <nav>
   <Link to="/">
    <a> Home </a>
   </Link>
   |
   <Link to="/articles">
    <a> View Articles </a>
   </Link>
   |{" "}
   <Link to="/postarticle">
    <a> Post Article </a>
   </Link>{" "}
   |
   <Link to="account">
    <a> {username === null ? "User Profile" : `${username}'s Profile`}</a>{" "}
   </Link>
  </nav>
 );
};
