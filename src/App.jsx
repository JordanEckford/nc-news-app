import "./App.css";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";

function App() {
 return (
  <>
   <Header />
   <p>username info</p>
   <NavBar />
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
