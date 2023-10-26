import { Link } from "react-router-dom";

export const Error404 = () => {
 return (
  <>
   <h2 className="error-404-title">Our journalists seem to have forgotten to write this article!</h2>
   <Link className="error-404-link" to="/articles">
    Back to all Articles
   </Link>
   <img className="error-404-img" src={"../../../Error404.jpeg"} alt="a confused newspaper journalist" />
  </>
 );
};
