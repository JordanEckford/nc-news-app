import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { ViewArticles } from "./Components/ViewArticles";
import { PostArticle } from "./Components/PostArticle";
import { Account } from "./Components/Account";
import { SingleArticle } from "./Components/ViewArticlesComponents/SingleArticle";
import { ErrorBadPath } from "./Components/ReusableComponents/ErrorBadPath";

function App() {
 return (
  <>
   <Header />
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/articles/:article_id" element={<SingleArticle />} />
    <Route path="/articles" element={<ViewArticles />} />
    <Route path="/postarticle" element={<PostArticle />} />
    <Route path="/account" element={<Account />} />
    <Route path="/*" element={<ErrorBadPath />} />
   </Routes>
  </>
 );
}

export default App;
