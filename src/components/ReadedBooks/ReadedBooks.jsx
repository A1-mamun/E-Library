import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ListedBook from "../ListedBook/ListedBook";

const ReadedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBooksIds = getStoredBooks("read-books");
    if (books.length) {
      const booksRead = books.filter((book) =>
        storedBooksIds.includes(book.bookId)
      );
      setReadBooks(booksRead);
    }
  }, []);
  return (
    <div>
      {readBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default ReadedBooks;
