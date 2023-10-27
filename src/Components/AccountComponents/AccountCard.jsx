export const AccountCard = ({ isLoading, userProfile, username }) => {
 if (userProfile == {} || username === null) return <h2>Hello there!</h2>;
 if (isLoading) return <p>Loading...</p>;
 return (
  <div className="profile-card">
   <h2>Hello {userProfile.username}!</h2>

   <div className="user-profile-img-container">
    <img className="user-profile-img" src={userProfile.avatar_url} alt={`an avatar representing ${userProfile.username}'s account`} />
   </div>
  </div>
 );
};
