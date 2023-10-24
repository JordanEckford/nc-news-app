import { useContext, useEffect } from "react";
import { fetchCommentsByArticleID } from "../../API";
import { useState } from "react";
import { UsernameContext } from "../../Contexts/UsernameContext";

export const CommentsByArticle = ({ article_id }) => {
 const { username } = useContext(UsernameContext);
 const [comments, setComments] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  setIsLoading(true);
  fetchCommentsByArticleID(article_id).then((response) => {
   setComments(response);
   setIsLoading(false);
  });
 }, []);

 if (isLoading) return <p>Loading...</p>;
 if (comments.length === 0) return <p>Its empty in here... Be the first to comment below:</p>;
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
       {comment.author === username ? <button className="comment-delete-button">Delete Comment</button> : <></>}
      </div>
     </li>
    );
   })}
  </ul>
 );
};
