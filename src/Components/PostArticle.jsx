import { CreateArticle } from "./PostArticleComponents/CreateArticle";
import { CreateTopic } from "./PostArticleComponents/CreateTopic";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext, useEffect, useState } from "react";

export const PostArticle = () => {
 //  return <img className="error-500-img" src="/underconstruction.jpeg" alt="" />;
 const { username } = useContext(UsernameContext);
 if (username === null) return <p className="error-msg">Login to post an article!</p>;

 return (
  <>
   <CreateArticle username={username} />
   <CreateTopic />
  </>
 );
};
