import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className=" font-worksans border p-5 rounded-2xl flex flex-col lg:flex-row gap-10">
      <div className=" bg-dark-05 rounded-2xl lg:w-1/5 flex justify-center items-center">
        <img className=" h-72 p-7" src={image} alt="" />
      </div>
      <div className="lg:w-4/5">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-dark">
          {bookName}
        </h1>
        <p className="font-medium text-dark-8 text-base md:text-lg my-3">
          By : {author}
        </p>
        <div className="mb-3 md:mb-5 lg:mb-7 flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-8 md:items-center">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-8 mb-2 md:items-center">
            <h4 className="font-bold text-dark">Tag</h4>
            <div className="flex gap-2">
              {tags.map((tag, idx) => (
                <Tag key={idx} tag={tag}></Tag>
              ))}
            </div>
          </div>
          <div className=" flex gap-2">
            <img src="./location.png" alt="" />
            <p className="text-sm md:text-base">
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 mb-4">
          <div className=" flex gap-2">
            <img src="./person.png" alt="" />
            <p className="text-sm md:text-base">Publisher: {publisher}</p>
          </div>
          <div className=" flex gap-2">
            <img src="./file.png" alt="" />
            <p className="text-sm md:text-base">Page: {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-10 my-4 md:items-center">
          <button className="badge badge-sm md:badge-md lg:badge-lg p-4 lg:p-5 bg-blue-15 text-blue font-medium">
            Category: {category}
          </button>
          <div className="flex gap-5 lg:gap-10 items-center">
            <button className="badge badge-sm md:badge-md lg:badge-lg p-4 lg:p-5 bg-supernova-15 text-supernova font-medium">
              Rating: {rating}
            </button>
            <Link to={`/book/${bookId}`}>
              <button className="btn btn-sm md:btn-md  bg-green rounded-full text-white font-medium">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
