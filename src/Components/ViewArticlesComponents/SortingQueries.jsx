import { useEffect, useState } from "react";
import { getArticlesByQuery, getTopics } from "../../API";
import { Link } from "react-router-dom";

export const SortingQueries = ({ setArticles, setSortedArticles }) => {
 const [topics, setTopics] = useState([]);
 const [topic, setTopic] = useState("all");
 const [sortBy, setSortBy] = useState("date");
 const [order, setOrder] = useState("desc");

 useEffect(() => {
  getTopics().then((response) => {
   setTopics(response);
  });
 }, []);

 function handleSubmit(event) {
  event.preventDefault();
  let sort_by = sortBy;
  if (sortBy === "date") sort_by = "created_at";
  if (sortBy === "comments") sort_by = "comment_count";
  getArticlesByQuery(topic, sort_by, order).then((response) => {
   setArticles(response);
   setSortedArticles(response);
  });
 }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <h4>Filters:</h4>
    <label htmlFor="sortByTopic">Topic: </label>
    <select
     onChange={(e) => {
      setTopic(e.target.value);
     }}
     name=""
     id="sortByTopic"
    >
     <option>all</option>
     {topics.map((topic) => {
      return <option key={topic.slug}>{topic.slug}</option>;
     })}
    </select>
    <label htmlFor="sortByProperty">Sort By: </label>
    <select
     onChange={(e) => {
      setSortBy(e.target.value);
     }}
     name=""
     id="sortByProperty"
    >
     <option value="date">date</option>
     <option value="comments">comments</option>
     <option value="votes">votes</option>
    </select>
    <label htmlFor="order">Order: </label>
    <select
     onChange={(e) => {
      setOrder(e.target.value);
     }}
     name=""
     id="order"
    >
     <option value="desc">desc</option>
     <option value="asc">asc</option>
    </select>
    <Link to={`/articles/topics/${topic}`}>
     <button type="submit">Search</button>
    </Link>
   </form>
  </>
 );
};
