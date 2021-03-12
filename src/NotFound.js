import { Link } from "react-router-dom"

const NotFound = () => {
  return ( 
    <div className="notFound">
      <h2>Sorry...</h2>
      <p>The page does not exist..</p>
      <Link to="/">Back to sign in page</Link>
    </div>
   );
}
 
export default NotFound;