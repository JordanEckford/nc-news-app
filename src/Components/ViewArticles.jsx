import { fetchAllArticles } from "../API";
import { ArticleCard } from "./ViewArticlesComponents/ArticleCard";
import { useEffect, useState } from "react";

export const ViewArticles = () => {
 const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  setIsLoading(true);
  fetchAllArticles().then((response) => {
   setArticles(response);
   setIsLoading(false);
  });
 }, []);

 if (isLoading) return <p>Loading Articles...</p>;

 return (
  <>
   <p>Sorting Queries</p>
   <h2>Articles: </h2>
   <ul className="article-list">
    <ArticleCard articles={articles} />
   </ul>
  </>
 );
};
