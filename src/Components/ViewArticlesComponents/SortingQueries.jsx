import { useEffect, useState } from "react";
import { getArticlesByQuery, getTopics } from "../../API";
import { Link } from "react-router-dom";
import { AdvancedSearch } from "./AdvancedSearch";

export const SortingQueries = ({ setTopic, setSortBy, setOrder }) => {
 const [topics, setTopics] = useState([]);
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

 return (
  <>
   <form>
    <h4 className="filters-header">Filters:</h4>
    <div className="query-options">
     <div className="topic-container">
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
     </div>
     <div className="sortby-container">
      <label htmlFor="sortByProperty">Sort By: </label>
      <select
       onChange={(e) => {
        setSortBy(e.target.value);
       }}
       name=""
       id="sortByProperty"
      >
       <option label="date" value="created_at">
        date
       </option>
       <option label="comments" value="comment_count">
        comments
       </option>
       <option value="votes">votes</option>
      </select>
     </div>
     <div className="order-container">
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
     </div>
     <div className="advanced-container">
      <input id="advanced-options" type="checkbox" onClick={toggleAdvancedSearch} />
      <label htmlFor="advanced-options">Advanced</label>
     </div>
    </div>
    {advancedSearch ? <AdvancedSearch /> : <></>}
   </form>
  </>
 );
};
