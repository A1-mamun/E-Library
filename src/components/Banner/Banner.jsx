import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto px-3 font-worksans">
      <div className=" md:h-[700px] lg:h-[600px] bg-dark-05  rounded-3xl mt-8">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center h-full p-8 md:p-20 lg:p-32">
          <img src="./Book1.png" className="w-40 md:w-80 lg:w-96 rounded-lg" />
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 mt-5 lg:mt-0 font-playfair">
              Books to freshen up <br />
              your bookshelf
            </h1>
            <Link to="/listed">
              <button className="btn bg-green text-white font-bold">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
