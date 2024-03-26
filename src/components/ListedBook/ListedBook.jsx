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
    <div className=" font-worksans border p-5 rounded-2xl flex gap-10">
      <div className=" bg-dark-05 rounded-2xl md:w-1/5 flex justify-center items-center">
        <img className=" h-72 p-7" src={image} alt="" />
      </div>
      <div className="md:w-4/5">
        <h1 className=" text-3xl font-playfair font-bold text-dark">
          {bookName}
        </h1>
        <p className="font-medium text-dark-8 text-lg my-3">By : {author}</p>
        <div className="mb-7 flex gap-8 items-center">
          <h4 className="font-bold text-dark">Tag</h4>
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag}></Tag>
            ))}
          </div>
          <div className=" flex gap-2">
            <img src="./location.png" alt="" />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className=" flex gap-10 mb-4">
          <div className=" flex gap-2">
            <img src="./person.png" alt="" />
            <p>Publisher: {publisher}</p>
          </div>
          <div className=" flex gap-2">
            <img src="./file.png" alt="" />
            <p>Page: {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="space-x-4 my-4">
          <h4 className="badge badge-lg p-5 bg-blue-15 text-blue font-medium">
            Category: {category}
          </h4>
          <h4 className="badge badge-lg p-5 bg-supernova-15 text-supernova font-medium">
            Rating: {rating}
          </h4>
          <Link to={`/book/${bookId}`}>
            <button className="btn bg-green rounded-full text-lg font text-white font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
