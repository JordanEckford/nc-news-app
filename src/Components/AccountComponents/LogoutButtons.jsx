export const LogoutButtons = ({ username, logoutConfirm, setLogoutConfirm, setUsername, setShowCreateUser }) => {
 return (
  <>
   {username !== null && logoutConfirm === false ? (
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
   {username !== null && logoutConfirm ? (
    <>
     <p className="error-msg">Are you sure?</p>
     <button
      onClick={() => {
       setLogoutConfirm(false);
      }}
      className="cancel-logout-button"
     >
      cancel
     </button>
     <button
      className="confirm-logout-button"
      onClick={() => {
       setLogoutConfirm(false);
       setUsername(null);
       setShowCreateUser(true);
      }}
     >
      Confirm Logout
     </button>
    </>
   ) : (
    <></>
   )}
  </>
 );
};
