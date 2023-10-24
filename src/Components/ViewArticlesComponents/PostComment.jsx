export const PostComment = ({ article_id }) => {
 return (
  <form action="">
   <label className="single-article-label" htmlFor="create-comment">
    Add comment: <input className="single-article-input" id="create-comment" placeholder="I liked this because..." />
   </label>
   <button type="submit">Submit</button>
  </form>
 );
};
