import { SortByTopic } from "./SortByTopic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../../API";

export const SortingQueries = () => {
 const [showTopicOptions, setShowTopicOptions] = useState(false);
 const [topics, setTopics] = useState([]);

 function topicOptions() {
  showTopicOptions ? setShowTopicOptions(false) : setShowTopicOptions(true);
 }

 useEffect(() => {
  getTopics().then((response) => {
   setTopics(response);
  });
 }, []);

 return (
  <>
   <button onClick={topicOptions}>{showTopicOptions ? "Hide Topic Options" : "Filter by Topic"}</button>
   {showTopicOptions ? (
    <nav>
     {topics.map((topic) => {
      return (
       <div key={topic.slug}>
        <Link to={`topic/${topic.slug}`}>{topic.slug}</Link>
       </div>
      );
     })}
    </nav>
   ) : (
    <></>
   )}
  </>
 );
};
