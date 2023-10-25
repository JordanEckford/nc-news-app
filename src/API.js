import axios from "axios";

//https://nc-news-nvy4.onrender.com/

//below can take params
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

export const fetchCommentsByArticleID = (article_id) => {
 return axios.get(`https://nc-news-nvy4.onrender.com/api/articles/${article_id}/comments`).then((response) => {
  return response.data.comments;
 });
};

export const updateArticleVotes = (votes, article_id) => {
 return axios.patch(`https://nc-news-nvy4.onrender.com/api/articles/${article_id}`, { inc_votes: votes }).then((response) => {
  return response;
 });
};

export const postCommentByArticleID = (article_id, object) => {
 return axios.post(`https://nc-news-nvy4.onrender.com/api/articles/${article_id}/comments`, object).then((response) => {
  return response.data;
 });
};

export const getTopics = () => {
 return axios.get(`https://nc-news-nvy4.onrender.com/api/topics`).then((response) => {
  return response.data.topics;
 });
};

export const getArticlesByQuery = (topic, sort_by = "created_at", order = "desc") => {
 let query = "https://nc-news-nvy4.onrender.com/api/articles?";
 if (topic !== "all") {
  query += `topic=${topic}&sort_by=${sort_by}&order=${order}`;
 } else query += `sort_by=${sort_by}&order=${order}`;
 return axios.get(query).then((response) => {
  return response.data.articles;
 });
};
