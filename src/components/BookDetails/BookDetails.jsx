import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
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

  const handleRead = () => {
    console.log("clicked");
  };

  const handleWishlist = () => {
    console.log("clicked 2");
  };

  return (
    <div className=" mt-7 container mx-auto flex flex-col md:flex-row gap-20 h-[640px]">
      <div className="bg-dark-05 rounded-2xl md:w-1/2 flex justify-center items-center">
        <img className="max-w-sm rounded-lg" src={image} alt="Book" />
      </div>
      <div className="font-worksans md:w-1/2 flex flex-col">
        <h1 className=" text-4xl font-bold font-playfair text-dark">
          {bookName}
        </h1>
        <p className="text-xl font-medium text-dark-8 my-5">By : {author}</p>
        <hr />
        <p className="text-xl font-medium text-dark-8 py-5">{category}</p>
        <hr />
        <p className=" text-dark-7 py-7 grow">
          <span className="font-bold text-dark">Review :</span> {review}
        </p>
        <div className="mb-7 flex gap-8">
          <h4 className="font-bold text-dark">Tag</h4>
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag}></Tag>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex gap-16 my-6">
          <div className="">
            <h4 className=" text-dark-7">Number of Pages:</h4>
            <h4 className=" text-dark-7">Publisher:</h4>
            <h4 className=" text-dark-7">Year of Publishing:</h4>
            <h4 className=" text-dark-7">Rating:</h4>
          </div>
          <div>
            <h4 className="text-dark font-semibold">{totalPages}</h4>
            <h4 className="text-dark font-semibold">{publisher}</h4>
            <h4 className="text-dark font-semibold">{yearOfPublishing}</h4>
            <h4 className="text-dark font-semibold">{rating}</h4>
          </div>
        </div>
        <div className=" space-x-4">
          <button
            onClick={handleRead}
            className="btn bg-white border border-dark-3 text-lg text-dark font-semibold"
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn bg-sky-blue-2 text-white text-lg font-semibold"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
