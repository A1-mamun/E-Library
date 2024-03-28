import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        404 Page Not Found !!!
      </h2>
      <Link to="/">
        <button className="btn">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
