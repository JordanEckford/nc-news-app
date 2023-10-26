import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext, useState } from "react";
import { UsernameInput } from "./UsernameInput";
import { getUsersByID } from "../../API";

export const Login = () => {
 const { username, setUsername } = useContext(UsernameContext);
 const [inputName, setInputName] = useState("");
 const [isError, setIsError] = useState(null);
 const [loggedIn, setLoggedIn] = useState(true);
 const [logoutConfirm, setLogoutConfirm] = useState(false);

 function updateUsername(event) {
  event.preventDefault();
  getUsersByID(inputName)
   .then(() => {
    setUsername(inputName);
    setLoggedIn(true);
    setIsError(false);
   })
   .catch(() => {
    setIsError(true);
   });
 }
 if (username === null)
  return (
   <>
    {username === null ? <h2>Hello!</h2> : <h2>Hello, {username}</h2>}
    <UsernameInput />
   </>
  );
 return (
  <>
   {username === null ? <h2>Hello!</h2> : <h2>Hello, {username}</h2>}
   {loggedIn && logoutConfirm === false ? (
    <button
     className="logout-button"
     onClick={() => {
      setLogoutConfirm(true);
     }}
    >
     Logout
    </button>
   ) : (
    <> </>
   )}
   {loggedIn && logoutConfirm ? (
    <>
     <p className="error-msg">Are you sure?</p>
     <button
      className="confirm-logout-button"
      onClick={() => {
       setLoggedIn(false);
       setUsername(null);
      }}
     >
      Confirm Logout
     </button>
    </>
   ) : (
    <></>
   )}
   {loggedIn ? <></> : <UsernameInput updateUsername={updateUsername} inputName={inputName} setInputName={setInputName} />}
   {isError ? <p className="error-msg">User doesn't exist!</p> : <></>}
  </>
 );
};
