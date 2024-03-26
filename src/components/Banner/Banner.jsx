import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" h-[600px] bg-dark-05 container mx-auto rounded-3xl mt-8">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center h-full p-32">
        <img src="./Book1.png" className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <Link to="/listed">
            <button className="btn bg-green text-white">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
