import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { ViewArticles } from "./Components/ViewArticles";
import { PostArticle } from "./Components/ViewArticlesComponents/PostArticle";
import { Account } from "./Components/Account";
import { SingleArticle } from "./Components/ViewArticlesComponents/SingleArticle";

function App() {
 return (
  <>
   <Header />
   <p>TODO: username info</p>
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/articles/:article_id" element={<SingleArticle />} />
    <Route path="/articles/topic/:topic/:article_id" element={<SingleArticle />} />
    <Route path="/articles" element={<ViewArticles />} />
    <Route path="/postarticle" element={<PostArticle />} />
    <Route path="/account" element={<Account />} />
   </Routes>
   <p>Content</p>
  </>
 );
}

export default App;

/* ENDPOINTS
TOPICS
GET /api/topics
POST /api/topics

ARTICLES
GET /api/articles
GET /api/articles/:article_id
POST /api/articles
PATCH /api/articles/:article_id
DELETE /api/articles

COMMENTS
GET /api/articles/:article_id/comments
POST /api/articles/:article_id/comments
PATCH /api/comments/:comment_id
DELETE /api/comments/:comment_id

USERS
GET /api/users
GET /api/users/:username
POST /api/users

*/
