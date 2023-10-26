import { Link } from "react-router-dom";

export const ArticleCard = ({ articles }) => {
 if (articles.length === 0) return <p>No articles found!</p>;
 return (
  <>
   {articles.map((article) => {
    return (
     <li key={article.article_id} className="article-card">
      <img className="article-img" src={article.article_img_url} alt={`A stock image relating to ${article.title}`} />
      <Link to={`/articles/${article.article_id}`}>
       <h3 className="article-title">{article.title}</h3>
      </Link>
      <h4 className="article-topic">Topic: {article.topic}</h4>
      {/* <p className="article-id">ID: #{article.article_id}</p>
      <p className="article-author">Author: {article.author}</p> */}
      <div className="icon-wrapper">
       <p className="article-comments">
        <img className="comments-icon" src="../../../commentsicon.png" alt="icon representing comments" /> {article.comment_count}
       </p>
       <p className="article-votes">
        <img className="votes-icon" src="../../../votesicon.png" alt="icon representing votes" /> {article.votes}
       </p>
      </div>
      <p className="article-date">
       Date: {article.created_at.slice(8, 10)}
       {article.created_at.slice(4, 8)}
       {article.created_at.slice(0, 4)}, Time: {article.created_at.slice(11, 16)}
      </p>
      <nav className="article-link"></nav>
     </li>
    );
   })}
  </>
 );
};
