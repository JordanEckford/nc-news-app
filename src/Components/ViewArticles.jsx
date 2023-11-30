import { getArticlesByQuery } from "../API";
import { ArticleCard } from "./ViewArticlesComponents/ArticleCard";
import { useEffect, useState } from "react";
import { SortingQueries } from "./ViewArticlesComponents/SortingQueries";
import { useSearchParams } from "react-router-dom";
import LoadingIcons from "react-loading-icons";

export const ViewArticles = () => {
 const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [searchParams, setSearchParams] = useSearchParams();

 const [topic, setTopic] = useState("all");
 const [sortBy, setSortBy] = useState("created_at");
 const [order, setOrder] = useState("desc");

 useEffect(() => {
  if (topic === "all") {
   setSearchParams({ sort_by: sortBy, order });
  } else {
   setSearchParams({ topic, sort_by: sortBy, order });
  }
 }, [topic, sortBy, order]);

 useEffect(() => {
  getArticlesByQuery(searchParams)
   .then((response) => {
    setArticles(response);
    setIsLoading(false);
   })
   .catch((err) => {
    console.log(err);
   });
 }, [searchParams]);

 return (
  <>
   <SortingQueries topic={topic} setTopic={setTopic} setSortBy={setSortBy} setOrder={setOrder} />
   <h2>Articles: </h2>
   {isLoading ? (
    <LoadingIcons.BallTriangle stroke="#000549" />
   ) : (
    <ul className="article-list">
     <ArticleCard articles={articles} />
    </ul>
   )}
  </>
 );
};
