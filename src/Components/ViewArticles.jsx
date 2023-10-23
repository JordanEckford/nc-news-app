import { Route, Routes } from "react-router-dom";
import { fetchAllArticles } from "../API";
import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { SingleArticle } from "./SingleArticle";

export const ViewArticles = () => {
 const [articles, setArticles] = useState([]);
 fetchAllArticles().then((response) => {
  setArticles(response);
 });

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
