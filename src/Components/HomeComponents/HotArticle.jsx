import { useEffect, useState } from "react";
import { fetchAllArticles, fetchArticleByID } from "../../API";
import { Link } from "react-router-dom";

export const HotArticle = () => {
 const [numberOfArticles, setNumberOfArticles] = useState(null);
 const [randomArticle, setRandomArticle] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  fetchAllArticles().then((response) => {
   setNumberOfArticles(response[0].total_count);
  });
 }, []);

 useEffect(() => {
  if (numberOfArticles === null) return;
  const randomArticleID = Math.floor(Math.random() * (numberOfArticles - 1) + 1);
  fetchArticleByID(randomArticleID).then((response) => {
   setRandomArticle(response);
   setIsLoading(false);
  });
 }, [numberOfArticles]);

 if (isLoading) return <p>Loading...</p>;
 return (
  <div className="random-article-tile">
   <h3 className="random-article-header">Check out what's hot right now:</h3>
   <li key={randomArticle.article_id} className="random-article-card">
    <img className="random-article-img" src={randomArticle.article_img_url} alt={`A stock image relating to ${randomArticle.title}`} />
    <Link to={`/articles/${randomArticle.article_id}`}>
     <h3 className="random-article-title">{randomArticle.title}</h3>
    </Link>
    <h4 className="random-article-topic">Topic: {randomArticle.topic}</h4>
    <div className="icon-wrapper">
     <p className="random-article-comments">
      <img className="comments-icon" src="/commentsicon.png" alt="icon representing comments" /> {randomArticle.comment_count}
     </p>
     <p className="random-article-votes">
      <img className="votes-icon" src="/commentsicon.png" alt="icon representing votes" /> {randomArticle.votes}
     </p>
    </div>
    <p className="random-article-date">
     Date: {randomArticle.created_at.slice(8, 10)}
     {randomArticle.created_at.slice(4, 8)}
     {randomArticle.created_at.slice(0, 4)}, Time: {randomArticle.created_at.slice(11, 16)}
    </p>
   </li>
  </div>
 );
};
