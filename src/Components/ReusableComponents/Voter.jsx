import { useState, useContext } from "react";
import { updateArticleVotes, updateCommentVote } from "../../API";
import { UsernameContext } from "../../Contexts/UsernameContext";

export const Voter = ({ type, votes, article_id, comment_id }) => {
 const { username } = useContext(UsernameContext);
 const [userVotes, setUserVotes] = useState(0);
 const [isError, setIsError] = useState(false);

 const voteUpdater = (userVotes, article_id) => {
  if (type === "article_vote") {
   updateArticleVotes(userVotes, article_id)
    .then((response) => {
     //possible feedback for the user?? As in button goes green or something cool
    })
    .catch(() => {
     setUserVotes(0);
     setIsError(true);
    });
  }
  if (type === "comment_vote") {
   updateCommentVote(userVotes, comment_id)
    .then((response) => {
     //possible feedback for the user?? As in button goes green or something cool
    })
    .catch(() => {
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

 if (username === null) {
  return (
   <>
    <div>Votes: {userVotes + votes}</div>
    <p className="error-msg">Login to vote!</p>
   </>
  );
 }

 return (
  <>
   <div className="vote-tag">Votes: {userVotes + votes}</div>
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
   {isError ? <div className="error-msg">Sorry, voting isn't available right now</div> : <></>}
  </>
 );
};
