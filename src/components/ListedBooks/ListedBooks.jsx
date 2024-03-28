import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ListTabs from "../ListTabs/ListTabs";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const storedReadBooksIds = getStoredBooks("read-books");
    const storedWishBooksIds = getStoredBooks("wish-books");
    if (books.length) {
      const booksRead = books.filter((book) =>
        storedReadBooksIds.includes(book.bookId)
      );
      setReadBooks(booksRead);
    }
    if (books.length) {
      const booksWish = books.filter((book) =>
        storedWishBooksIds.includes(book.bookId)
      );
      setWishBooks(booksWish);
    }
  }, []);
  const propertySort = (selectedOption) => {
    const sortedReadList = [...readBooks];
    const sortedWishList = [...wishBooks];

    switch (selectedOption) {
      case "rating":
        sortedReadList.sort((a, b) => b.rating - a.rating);
        break;
      case "totalPages":
        sortedReadList.sort((a, b) => b.totalPages - a.totalPages);
        break;
      case "yearOfPublishing":
        sortedReadList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        break;
      default:
        break;
    }

    switch (selectedOption) {
      case "rating":
        sortedWishList.sort((a, b) => b.rating - a.rating);
        break;
      case "totalPages":
        sortedWishList.sort((a, b) => b.totalPages - a.totalPages);
        break;
      case "yearOfPublishing":
        sortedWishList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        break;
      default:
        break;
    }
    setReadBooks(sortedReadList);
    setWishBooks(sortedWishList);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    propertySort(event.target.value);
  };

  return (
    <div className=" container mx-auto mt-8">
      <div className="bg-dark-05 text-center p-8 rounded-2xl mb-8">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="flex justify-center items-center">
        <select
          className="btn w-40 bg-green focus:outline-none hover:bg-white text-white hover:text-black"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
        </select>
      </div>

      <ListTabs readBooks={readBooks} wishBooks={wishBooks}></ListTabs>
    </div>
  );
};

export default ListedBooks;
