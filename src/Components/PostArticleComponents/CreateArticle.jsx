import { useState, useEffect } from "react";
import { getTopics, postNewArticle } from "../../API";
import { ShowNewArticle } from "./ShowNewArticle";

export const CreateArticle = ({ username }) => {
 const [titleInput, setTitleInput] = useState("");
 const [bodyInput, setBodyInput] = useState("");
 const [imageInput, setImageInput] = useState("");
 const [topicInput, setTopicInput] = useState("");
 const [topics, setTopics] = useState([]);
 const [newArticleObj, setNewArticleObj] = useState(null);
 const [isError, setIsError] = useState(null);
 const [postedArticle, setPostedArticle] = useState(null);

 useEffect(() => {
  getTopics().then((response) => {
   setTopics(response);
   setTopicInput(response[0].slug);
  });
 }, []);

 function handleSubmit(e) {
  e.preventDefault();
  if (imageInput === "") {
   setNewArticleObj({ author: username, title: titleInput, body: bodyInput, topic: topicInput });
  } else {
   setNewArticleObj({ author: username, title: titleInput, body: bodyInput, topic: topicInput, article_img_url: imageInput });
  }
 }

 useEffect(() => {
  if (newArticleObj === null) return;
  postNewArticle(newArticleObj)
   .then((response) => {
    setPostedArticle(response.data.article);
   })
   .catch(() => {
    setIsError(true);
   });
 }, [newArticleObj]);

 return (
  <div>
   <h2>Post an Article:</h2>
   <form className="post-article-form" onSubmit={handleSubmit}>
    <div className="create-title-container">
     <label htmlFor="create-article-title">Article Title:</label>
     <input
      value={titleInput}
      required
      onChange={(e) => {
       setTitleInput(e.target.value);
      }}
      type="text"
      id="create-article-title"
     />
    </div>
    <div className="create-body-container">
     <label htmlFor="create-article-body">Body:</label>
     <input
      required
      value={bodyInput}
      type="text"
      id="create-article-body"
      onChange={(e) => {
       setBodyInput(e.target.value);
      }}
     />
    </div>
    <div className="create-topic-container">
     <label htmlFor="create-article-topic">Topic:</label>
     <select
      onChange={(e) => {
       setTopicInput(e.target.value);
      }}
      name=""
      id="create-article-topic"
     >
      {topics.map((topic) => {
       return <option key={topic.slug}>{topic.slug}</option>;
      })}
     </select>
    </div>
    <div className="create-url-container">
     <label htmlFor="create-article-url">Image URL:</label>
     <input
      value={imageInput}
      type="text"
      id="create-article-url"
      placeholder="not required"
      onChange={(e) => {
       setImageInput(e.target.value);
      }}
     />
    </div>
    <button className="create-article-submit" type="submit">
     Create Article!
    </button>
    {isError ? <p className="error-msg">Something went wrong, please try again later!</p> : <></>}
   </form>
   {postedArticle === null ? <></> : <ShowNewArticle postedArticle={postedArticle} />}
  </div>
 );
};
