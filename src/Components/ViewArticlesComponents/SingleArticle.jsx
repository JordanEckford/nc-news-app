import { Link, useParams } from "react-router-dom";
import { fetchArticleByID } from "../../API";
import { useState, useEffect } from "react";
import { CommentsByArticle } from "./CommentsByArticle";
import { Voter } from "../ReusableComponents/Voter";
import { PostComment } from "./PostComment";
import { SingleArticleContent } from "./SingleArticleContent";
import { Error404 } from "../ReusableComponents/Error404";

export const SingleArticle = () => {
 const [singleArticle, setSingleArticle] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);
 const { article_id } = useParams();

 useEffect(() => {
  setIsLoading(true);
  fetchArticleByID(article_id)
   .then((response) => {
    setSingleArticle(response);
    setIsLoading(false);
   })
   .catch((err) => {
    if (err.response.data.msg === "article does not exist") {
     setIsLoading(false);
     setError(true);
    }
    if (err.response.data.msg === "request included invalid format") {
     setIsLoading(false);
     setError(true);
    }
   });
 }, []);

 if (isLoading) return <p>Loading Article...</p>;
 if (error) return <Error404 />;
 return (
  <>
   <nav className="single-article-nav">
    <Link to="/articles">Back to all articles</Link>
   </nav>
   <article className="single-article" key={singleArticle.title}>
    <SingleArticleContent singleArticle={singleArticle} />
    <Voter type={"article_vote"} votes={singleArticle.votes} article_id={article_id} />
    <PostComment article_id={article_id} />
    <CommentsByArticle article_id={article_id} />
   </article>
  </>
 );
};
