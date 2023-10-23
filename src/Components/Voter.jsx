import { useState } from "react";
import { updateArticleVotes } from "../API";

export const Voter = ({ type, votes, article_id }) => {
 const [userVotes, setUserVotes] = useState(0);
 const [isError, setIsError] = useState(false);

 const voteUpdater = (userVotes, article_id) => {
  if (type === "article_vote") {
   updateArticleVotes(userVotes, article_id)
    .then((response) => {
     //possible feedback for the user??
    })
    .catch((err) => {
     setUserVotes(0);
     setIsError(true);
    });
  }
 };

 const updateVotes = (value) => {
  setUserVotes((currentVotes) => {
   return currentVotes + value;
  });
  voteUpdater(value, article_id);
 };

 return (
  <>
   <div>Votes: {userVotes + votes}</div>
   <button
    disabled={userVotes === 1}
    onClick={() => {
     updateVotes(1);
    }}
    className="single-article-vote"
   >
    +
   </button>
   <button
    disabled={userVotes === -1}
    onClick={() => {
     updateVotes(-1);
    }}
    className="single-article-vote"
   >
    -
   </button>
   {isError ? <div>Sorry, voting isn't available right now</div> : <></>}
  </>
 );
};
