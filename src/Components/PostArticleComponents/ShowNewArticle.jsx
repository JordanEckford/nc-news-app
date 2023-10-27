import { Link } from "react-router-dom";

export const ShowNewArticle = ({ postedArticle }) => {
 return (
  <>
   <h3 className="random-article-header">Article Created:</h3>
   <li key={postedArticle.article_id} className="random-article-card">
    <img className="random-article-img" src={postedArticle.article_img_url} alt={`A stock image relating to ${postedArticle.title}`} />
    <Link to={`/articles/${postedArticle.article_id}`}>
     <h3 className="random-article-title">{postedArticle.title}</h3>
    </Link>
    <h4 className="random-article-topic">Topic: {postedArticle.topic}</h4>
    <div className="icon-wrapper">
     <p className="random-article-comments">
      <img className="comments-icon" src="/commentsicon.png" alt="icon representing comments" /> {postedArticle.comment_count}
     </p>
     <p className="random-article-votes">
      <img className="votes-icon" src="/commentsicon.png" alt="icon representing votes" /> {postedArticle.votes}
     </p>
    </div>
    <p className="random-article-date">
     Date: {postedArticle.created_at.slice(8, 10)}
     {postedArticle.created_at.slice(4, 8)}
     {postedArticle.created_at.slice(0, 4)}, Time: {postedArticle.created_at.slice(11, 16)}
    </p>
   </li>
  </>
 );
};
