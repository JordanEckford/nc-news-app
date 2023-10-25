import { Link } from "react-router-dom";

export const ArticleCard = ({ articles }) => {
 if (articles.length === 0) return <p>No articles found!</p>;
 return (
  <>
   {articles.map((article) => {
    return (
     <li key={article.article_id} className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <h4 className="article-topic">Topic: {article.topic}</h4>
      <p className="article-id">ID: #{article.article_id}</p>
      <p className="article-author">Author: {article.author}</p>
      <p className="article-comments">Comments: {article.comment_count}</p>
      <p className="article-votes">Votes: {article.votes}</p>
      <nav className="article-link">
       <Link to={`/articles/${article.article_id}`}>See Full Article</Link>
      </nav>
     </li>
    );
   })}
  </>
 );
};
