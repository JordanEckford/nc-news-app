import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext, useEffect, useState } from "react";
import { UsernameInput } from "./UsernameInput";
import { getUsersByID } from "../../API";
import { CreateUser } from "./CreateUser";
import { AccountCard } from "./AccountCard";
import { LogoutButtons } from "./LogoutButtons";
import LoadingIcons from "react-loading-icons";

export const Login = () => {
 const { username, setUsername } = useContext(UsernameContext);
 const [inputName, setInputName] = useState("");
 const [userProfile, setUserProfile] = useState({});
 const [isError, setIsError] = useState(null);
 const [logoutConfirm, setLogoutConfirm] = useState(false);
 const [showCreateUser, setShowCreateUser] = useState(false);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  if (username === null) return;
  setIsLoading(true);
  getUsersByID(username).then((response) => {
   setUserProfile(response.data.user);
   setIsLoading(false);
  });
 }, []);

 function updateUsername(event) {
  event.preventDefault();
  getUsersByID(inputName)
   .then((response) => {
    setUserProfile(response.data.user);
    setUsername(inputName);
    setIsError(false);
    setShowCreateUser(false);
    setInputName("");
   })
   .catch(() => {
    setIsError(true);
   });
 }
 if (isLoading) return <LoadingIcons.BallTriangle stroke="#000549" />;
 return (
  <>
   <AccountCard isLoading={isLoading} userProfile={userProfile} username={username} />
   <LogoutButtons
    username={username}
    logoutConfirm={logoutConfirm}
    setLogoutConfirm={setLogoutConfirm}
    setUsername={setUsername}
    setShowCreateUser={setShowCreateUser}
   />
   {username === null ? <UsernameInput updateUsername={updateUsername} inputName={inputName} setInputName={setInputName} /> : <></>}
   {isError ? <p className="error-msg">User doesn't exist! Create an account below:</p> : <></>}
   {username === null || showCreateUser ? <CreateUser setShowCreateUser={setShowCreateUser} setUsername={setUsername} setIsError={setIsError} /> : <></>}
  </>
 );
};
