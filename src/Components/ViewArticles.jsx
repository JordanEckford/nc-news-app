import { getArticlesByQuery } from "../API";
import { ArticleCard } from "./ViewArticlesComponents/ArticleCard";
import { useEffect, useState } from "react";
import { SortingQueries } from "./ViewArticlesComponents/SortingQueries";

export const ViewArticles = () => {
 const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 const [topic, setTopic] = useState("all");
 const [sortBy, setSortBy] = useState("created_at");
 const [order, setOrder] = useState("desc");

 useEffect(() => {
  setIsLoading(true);
  getArticlesByQuery(topic, sortBy, order)
   .then((response) => {
    setArticles(response);
    setIsLoading(false);
   })
   .catch((err) => {
    console.log(err);
   });
 }, [topic, sortBy, order]);

 return (
  <>
   <SortingQueries topic={topic} setTopic={setTopic} setSortBy={setSortBy} setOrder={setOrder} />
   <h2>Articles: </h2>
   <p>TODO: Add Date to articles and also remove ID??</p>
   {isLoading ? (
    <p>Loading Articles...</p>
   ) : (
    <ul className="article-list">
     <ArticleCard articles={articles} />
    </ul>
   )}
  </>
 );
};
