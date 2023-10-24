import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByQuery } from "../../API";
import { ArticleCard } from "./ArticleCard";
import { SortingQueries } from "./SortingQueries";

export const SortByTopic = () => {
 const { topic } = useParams();
 const [sortedArticles, setSortedArticles] = useState([]);

 useEffect(() => {
  getArticlesByQuery(topic).then((response) => {
   setSortedArticles(response);
  });
 }, []);

 return (
  <>
   <SortingQueries />
   <h2>Articles: </h2>
   <ul className="article-list">
    <ArticleCard articles={sortedArticles} />
   </ul>
  </>
 );
};
