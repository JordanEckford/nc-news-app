import { Link } from "react-router-dom";

export const ErrorBadPath = () => {
 return (
  <>
   <h2 className="error-500-title">Oh, we couldn't find this! Click below to head home</h2>
   <Link className="error-500-link" to="/">
    Back to Home
   </Link>
   <img className="error-500-img" src={"../../../Error500.jpeg"} alt="" />
  </>
 );
};
