import { useEffect, useState } from "react";
import { getArticlesByQuery, getTopics } from "../../API";
import { Link } from "react-router-dom";
import { AdvancedSearch } from "./AdvancedSearch";

export const SortingQueries = ({ setTopic, setSortBy, setOrder }) => {
 const [topics, setTopics] = useState([]);
 const [userTopic, setUserTopic] = useState("all");
 const [userSortBy, setUserSortBy] = useState("date");
 const [userOrder, setUserOrder] = useState("desc");
 const [advancedSearch, setAdvancedSearch] = useState(false);
 const [userArticlesPerPage, setUserArticlesPerPage] = useState(10);
 const [userPageNumber, setUserPageNumber] = useState(1);

 useEffect(() => {
  getTopics().then((response) => {
   setTopics(response);
  });
 }, []);

 function toggleAdvancedSearch() {
  advancedSearch ? setAdvancedSearch(false) : setAdvancedSearch(true);
 }

 function handleSubmit(event) {
  event.preventDefault();
  let sort_by = userSortBy;
  if (userSortBy === "date") sort_by = "created_at";
  if (userSortBy === "comments") sort_by = "comment_count";
  setTopic(userTopic);
  setSortBy(sort_by);
  setOrder(userOrder);
 }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <h4>Filters:</h4>
    <label htmlFor="sortByTopic">Topic: </label>
    <select
     onChange={(e) => {
      setUserTopic(e.target.value);
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
      setUserSortBy(e.target.value);
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
      setUserOrder(e.target.value);
     }}
     name=""
     id="order"
    >
     <option value="desc">desc</option>
     <option value="asc">asc</option>
    </select>
    <button onClick={toggleAdvancedSearch}>Advanced Search Options (functionality TODO)</button>
    {advancedSearch ? <AdvancedSearch /> : <></>}

    <button type="submit">Search</button>
   </form>
  </>
 );
};
