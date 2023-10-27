import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext } from "react";
export const WelcomeCard = () => {
 const { username } = useContext(UsernameContext);
 return (
  <>
   <h2 className="welcome-header">Hello, Welcome to NC News</h2>
   <p className="home-text">This is a mock news site. Feel free to browse, post, comment or like articles</p>
  </>
 );
};
