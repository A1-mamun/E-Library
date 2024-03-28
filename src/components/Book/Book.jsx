import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-7 border border-dark-15 font-worksans flex flex-col h-full">
        <figure className="bg-dark-05 rounded-2xl">
          <img className="p-8 h-72" src={image} alt="Book" />
        </figure>
        <div className="border-b-2 border-dashed pb-5 mt-5 grow">
          <div className="flex flex-col md:flex-row gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag}></Tag>
            ))}
          </div>
          <h2 className="card-title my-4 text-2xl font-playfair font-bold ">
            {bookName}
          </h2>
          <p className="text-dark-8 font-medium">By : {author}</p>
        </div>
        <div className="flex justify-between mt-5 text-dark-8 font-medium">
          <p>{category}</p>
          <div className="flex gap-2 items-center">
            <p>{rating}</p>
            <img src="./star.png" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
