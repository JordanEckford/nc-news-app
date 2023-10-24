import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../../API";
import { ArticleCard } from "./ArticleCard";
import { SortingQueries } from "./SortingQueries";

export const SortByTopic = () => {
 const { sortby } = useParams();
 const [sortedArticles, setSortedArticles] = useState([]);

 useEffect(() => {
  getArticlesByTopic(sortby).then((response) => {
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

///api/articles?topic=xx
