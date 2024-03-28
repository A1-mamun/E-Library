import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isExist, saveBooks, removeBooks } from "../../Utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
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
    const existInRead = isExist(id, "read-books");
    // const existInWish = isExist(id, "wish-books");
    if (!existInRead) {
      removeBooks(id, "wish-books");
      saveBooks(id, "read-books");
      toast.success("Book Added to Read List!");
    } else {
      toast.warn("You have Already Read this Book!");
    }
  };

  const handleWishlist = () => {
    const existInRead = isExist(id, "read-books");
    const existInWish = isExist(id, "wish-books");

    if (existInRead) {
      toast.warn("You have Already Read this Book!");
    } else if (existInWish) {
      toast.warn("You have Already Wished this Book");
    } else {
      saveBooks(id, "wish-books");
      toast.success("Book Added to Wish List!");
    }
  };

  return (
    <div className="mt-7 container mx-auto  px-3 md:px-5 lg:px-0 ">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 lg:h-[680px] border border-dark-15 rounded-2xl p-5">
        <div className="bg-dark-05 rounded-2xl lg:w-1/2 flex justify-center items-center p-10">
          <img className=" md:h-[400px] lg:h-full" src={image} alt="Book" />
        </div>
        <div className="font-worksans lg:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-dark">
            {bookName}
          </h1>
          <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
            By : {author}
          </p>
          <hr />
          <p className="text-base md:text-xl font-medium text-dark-8 py-2 md:py-3 lg:py-4">
            {category}
          </p>
          <hr />
          <p className="text-sm md:text-base text-dark-7 py-3 md:py-4 lg:py-5 grow">
            <span className="font-bold text-dark">Review :</span> {review}
          </p>
          <div className=" mb-3 md:mb-4 lg:mb-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <h4 className="font-bold text-dark">Tag</h4>
            <div className="flex gap-2">
              {tags.map((tag, idx) => (
                <Tag key={idx} tag={tag}></Tag>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex gap-16 my-4 md:my-5 text-sm md:text-base">
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
              className="btn btn-sm md:btn-md bg-white border border-dark-3 md:text-lg text-dark font-semibold"
            >
              Read
            </button>

            <button
              onClick={handleWishlist}
              className="btn btn-sm md:btn-md bg-sky-blue-2 text-white md:text-lg font-semibold"
            >
              Wishlist
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
