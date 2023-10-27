export const UsernameInput = ({ updateUsername, inputName, setInputName }) => {
 return (
  <div className="enter-username-container">
   Enter your username below to login:
   <form onSubmit={updateUsername}>
    <div className="username-input-container">
     <label htmlFor="username">Username: </label>
     <input
      type="text"
      id="username"
      value={inputName}
      onChange={(event) => {
       setInputName(event.target.value);
      }}
      required
     />
    </div>
    <button className="submit-button-username" type="submit">
     Submit
    </button>
   </form>
  </div>
 );
};
