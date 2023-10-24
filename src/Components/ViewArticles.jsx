import { fetchAllArticles } from "../API";
import { ArticleCard } from "./ViewArticlesComponents/ArticleCard";
import { useEffect, useState } from "react";
import { SortingQueries } from "./ViewArticlesComponents/SortingQueries";

export const ViewArticles = () => {
 const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  setIsLoading(true);
  fetchAllArticles()
   .then((response) => {
    setArticles(response);
    setIsLoading(false);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);

 if (isLoading) return <p>Loading Articles...</p>;

 return (
  <>
   <SortingQueries setArticles={setArticles} setIsLoading={setIsLoading} />
   <h2>Articles: </h2>
   <ul className="article-list">
    <ArticleCard articles={articles} />
   </ul>
  </>
 );
};
