import { useEffect, useState } from "react";
import { postNewTopic } from "../../API";

export const CreateTopic = () => {
 const [slugInput, setSlugInput] = useState("");
 const [descriptionInput, setDescriptionInput] = useState("");
 const [topicObj, setTopicObj] = useState(null);
 const [isError, setIsError] = useState(null);
 const [topicExists, setTopicExists] = useState(false);
 const [newTopic, setNewTopic] = useState(null);

 function handleSubmit(e) {
  e.preventDefault();
  setTopicObj({ slug: slugInput, description: descriptionInput });
 }

 useEffect(() => {
  if (topicObj === null) return;
  postNewTopic(topicObj)
   .then((response) => {
    setNewTopic(response.slug);
    setIsError(null);
    setTopicExists(false);
    setSlugInput("");
    setDescriptionInput("");
   })
   .catch((err) => {
    if (err.response.data.msg === "key already exists") {
     setTopicExists(true);
    } else {
     setIsError(true);
    }
   });
 }, [topicObj]);

 return (
  <>
   <h4>Topic doesn't exist? Create one here:</h4>
   <form className="topic-form" onSubmit={handleSubmit}>
    <div className="topic-slug-container">
     <label htmlFor="topic-slug">Slug: </label>
     <input
      value={slugInput}
      type="text"
      id="topic-slug"
      required
      placeholder="Topic name"
      onChange={(e) => {
       setSlugInput(e.target.value);
      }}
     />
    </div>
    <div className="topic-description-container">
     <label htmlFor="topic-description">Description</label>
     <input
      value={descriptionInput}
      id="topic-description"
      type="text"
      required
      onChange={(e) => {
       setDescriptionInput(e.target.value);
      }}
     />
    </div>
    <button className="create-topic-submit" type="submit">
     Create Topic!
    </button>
    {isError ? <p className="error-msg">Sorry, something went wrong. Please try again</p> : <> </>}
    {newTopic === null ? <></> : <p>New topic: {newTopic} created!</p>}
    {topicExists ? <p className="error-msg">Topic already exists!</p> : <></>}
   </form>
  </>
 );
};
