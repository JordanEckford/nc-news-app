import axios from "axios";

//https://nc-news-nvy4.onrender.com/

export const fetchAllArticles = () => {
 return axios.get("https://nc-news-nvy4.onrender.com/api/articles").then((response) => {
  return response.data.articles;
 });
};

export const fetchArticleByID = (article_id) => {
 return axios.get(`https://nc-news-nvy4.onrender.com/api/articles/${article_id}`).then((response) => {
  return response.data.article;
 });
};
