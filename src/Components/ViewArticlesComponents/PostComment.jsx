import { useState, useContext, useEffect } from "react";
import { UsernameContext } from "../../Contexts/UsernameContext";
import { postCommentByArticleID } from "../../API";

export const PostComment = ({ article_id }) => {
 const [userInput, setUserInput] = useState("");
 const [isError, setIsError] = useState(false);
 const [commentToPost, setCommentToPost] = useState(null);
 const [opRendComment, setOpRendComment] = useState(null);
 const { username } = useContext(UsernameContext);

 function postComment(event) {
  event.preventDefault();
  const commentObject = { username: username, body: userInput };
  setCommentToPost(commentObject);
  setOpRendComment(userInput);
 }

 useEffect(() => {
  if (commentToPost === null) return;
  postCommentByArticleID(article_id, commentToPost)
   .then(() => {
    setIsError(false);
    setUserInput("");
   })
   .catch(() => {
    setOpRendComment(null);
    setIsError(true);
   });
 }, [commentToPost]);

 if (opRendComment !== null) return <p>Comment added: {opRendComment}</p>;

 return (
  <form onSubmit={postComment}>
   <label className="single-article-label" htmlFor="create-comment">
    Add comment:
    <input
     required
     value={userInput}
     onChange={(event) => {
      setUserInput(event.target.value);
     }}
     className="single-article-input"
     id="create-comment"
     placeholder="I liked this because..."
    />
   </label>
   {isError ? <p className="error-msg">Sorry, something went wrong. Please try again...</p> : <></>}
   <button type="submit">Submit</button>
  </form>
 );
};
