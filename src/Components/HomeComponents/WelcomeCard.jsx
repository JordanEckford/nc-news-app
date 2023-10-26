import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext } from "react";
export const WelcomeCard = () => {
 const { username } = useContext(UsernameContext);
 return (
  <>
   <h2>Hello, {username}</h2>
  </>
 );
};
