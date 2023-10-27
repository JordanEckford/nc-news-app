import { useEffect, useState } from "react";
import { postUser } from "../../API";

export const CreateUser = ({ setUsername, setIsError, setShowCreateUser }) => {
 const [usernameInput, setUsernameInput] = useState("");
 const [nameInput, setNameInput] = useState("");
 const [avatarURL, setAvatarURL] = useState("");
 const [profileObject, setProfileObject] = useState(null);
 const [usernameExists, setUsernameExists] = useState(false);

 function createUser(event) {
  event.preventDefault();
  if (avatarURL === "") {
   setProfileObject({ username: usernameInput, name: nameInput });
  } else {
   setProfileObject({ username: usernameInput, name: nameInput, avatar_url: avatarURL });
  }
 }

 useEffect(() => {
  if (profileObject === null) return;
  postUser(profileObject)
   .then((response) => {
    setUsername(response.username);
    setIsError(false);
    setShowCreateUser(false);
   })
   .catch((err) => {
    console.log(err);
    if (err.response.data.msg === "key already exists") {
     setUsernameExists(true);
    }
   });
 }, [profileObject]);

 return (
  <div className="create-user-container">
   <p>Enter your details below to make an account:</p>
   <form className="create-user-form" onSubmit={createUser}>
    <div className="username-container">
     <label className="create-username" htmlFor="username-input">
      Username:{" "}
     </label>
     <input
      className="create-username-input"
      type="text"
      id="username-input"
      required
      onChange={(e) => {
       setUsernameInput(e.target.value);
      }}
     />
    </div>
    <div className="name-container">
     <label className="create-name" htmlFor="username-input">
      Name:{" "}
     </label>
     <input
      className="create-name-input"
      type="text"
      id="name-input"
      required
      onChange={(e) => {
       setNameInput(e.target.value);
      }}
     />
    </div>
    <div className="avatar-container">
     <label className="create-avatar" htmlFor="username-input">
      avatar_url:{" "}
     </label>
     <input
      className="create-avatar-input"
      type="text"
      id="avatar-input"
      placeholder="not required"
      onChange={(e) => {
       setAvatarURL(e.target.value);
      }}
     />
    </div>
    <button className="create-user-submit" type="submit">
     Create User
    </button>
    {usernameExists ? <p className="error-msg">Username already exists!</p> : <></>}
   </form>
  </div>
 );
};
