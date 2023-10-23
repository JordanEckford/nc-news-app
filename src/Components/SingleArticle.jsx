import { Link, useParams } from "react-router-dom";
import { fetchArticleByID } from "../API";
import { useState, useEffect } from "react";
import { CommentsByArticle } from "./CommentsByArticle";
import { Voter } from "./Voter";

export const SingleArticle = () => {
 const [singleArticle, setSingleArticle] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const { article_id } = useParams();

 useEffect(() => {
  setIsLoading(true);
  fetchArticleByID(article_id).then((response) => {
   setSingleArticle(response);
   setIsLoading(false);
  });
 }, []);

 if (isLoading) return <p>Loading Article...</p>;
 return (
  <>
   <nav className="single-article-nav">
    <Link to="/articles">Back to all articles</Link>
   </nav>
   <article className="single-article" key={singleArticle.title}>
    <h1 className="single-article-title">{singleArticle.title}</h1>
    <h2 className="single-article-topic">Topic: {singleArticle.topic}</h2>
    <img className="single-article-img" src={singleArticle.article_img_url} alt="" />
    <p className="single-article-body">{singleArticle.body}</p>
    <Voter type={"article_vote"} votes={singleArticle.votes} article_id={article_id} />

    <form action="">
     <CommentsByArticle article_id={article_id} />
     <label className="single-article-label" htmlFor="create-comment">
      Add comment: <input className="single-article-input" id="create-comment" placeholder="I liked this because..." />
     </label>
     <button type="submit">Submit</button>
    </form>
   </article>
  </>
 );
};
