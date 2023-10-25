import { useContext, useEffect } from "react";
import { deleteCommentByCommentID, fetchCommentsByArticleID } from "../../API";
import { useState } from "react";
import { UsernameContext } from "../../Contexts/UsernameContext";

export const CommentsByArticle = ({ article_id }) => {
 const { username } = useContext(UsernameContext);
 const [comments, setComments] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [deletePending, setDeletePending] = useState(null);
 const [commentIDToDelete, setCommentIDToDelete] = useState(null);
 const [noComments, setNoComments] = useState(false);

 useEffect(() => {
  setIsLoading(true);
  fetchCommentsByArticleID(article_id)
   .then((response) => {
    setComments(response);
    setIsLoading(false);
   })
   .catch((err) => {
    if (err.response.data.msg === "no article(s) found") {
     setIsLoading(false);
     setNoComments(true);
    }
   });
 }, []);

 function removeComment(commentID) {
  setCommentIDToDelete(commentID);
 }

 useEffect(() => {
  if (commentIDToDelete === null) return;
  setDeletePending(true);
  deleteCommentByCommentID(commentIDToDelete).then((response) => {
   setDeletePending(false);
  });
 }, [commentIDToDelete]);

 if (isLoading) return <p>Loading...</p>;
 if (noComments) return <p className="comments-list">Its empty in here... Be the first to comment!</p>;
 return (
  <ul className="comments-list">
   <h3>Comments: </h3>
   {comments.map((comment) => {
    return (
     <li className="comment-card" key={comment.comment_id}>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-voting">
       <p className="comment-votes">Votes: {comment.votes}</p>
       <button className="comment-vote-button">+</button>
       <button className="comment-vote-button">-</button>
       {comment.author === username ? (
        <button
         disabled={commentIDToDelete === comment.comment_id && deletePending !== null}
         onClick={() => {
          removeComment(comment.comment_id);
         }}
         className="comment-delete-button"
        >
         Delete Comment
        </button>
       ) : (
        <></>
       )}
       {commentIDToDelete === comment.comment_id && deletePending ? <p>Deleting...</p> : <></>}
       {commentIDToDelete === comment.comment_id && deletePending === false ? <p>Comment deleted</p> : <></>}
      </div>
     </li>
    );
   })}
  </ul>
 );
};
