import ListedBook from "../ListedBook/ListedBook";

const ReadedBooks = ({ readBooks }) => {
  return (
    <div>
      {readBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default ReadedBooks;
