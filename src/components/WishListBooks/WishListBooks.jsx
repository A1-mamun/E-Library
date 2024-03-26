import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ListedBook from "../ListedBook/ListedBook";

const WishListBooks = () => {
  const books = useLoaderData();
  const [wishBooks, setWishBooks] = useState([]);

  useEffect(() => {
    const storedBooksIds = getStoredBooks("wish-books");
    if (books.length) {
      const booksWish = books.filter((book) =>
        storedBooksIds.includes(book.bookId)
      );
      setWishBooks(booksWish);
    }
  }, []);

  return (
    <div>
      {wishBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default WishListBooks;
