export const UsernameInput = ({ updateUsername, inputName, setInputName }) => {
 return (
  <>
   Enter your username below to login:
   <form onSubmit={updateUsername}>
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
    <button type="submit">Submit</button>
   </form>
  </>
 );
};
