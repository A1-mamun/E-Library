import ListedBook from "../ListedBook/ListedBook";

const ReadedBooks = ({ readBooks }) => {
  return (
    <div className=" space-y-5 md:space-y-8 my-5 md:my-10">
      {readBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default ReadedBooks;
