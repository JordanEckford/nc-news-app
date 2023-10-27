export const AccountCard = ({ isLoading, userProfile, username }) => {
 if (userProfile == {} || username === null) return <h2>Hello there!</h2>;
 if (isLoading) return <p>Loading...</p>;
 return (
  <>
   <h2>Hello {userProfile.username}!</h2>
   <img className="user-profile-img" src={userProfile.avatar_url} alt={`an avatar representing ${userProfile.username}'s account`} />
  </>
 );
};
