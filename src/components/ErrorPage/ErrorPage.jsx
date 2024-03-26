import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>So Sad !!!</h2>
      <Link to="/">
        <button className="btn">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
