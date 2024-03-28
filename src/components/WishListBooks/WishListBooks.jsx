import ListedBook from "../ListedBook/ListedBook";

const WishListBooks = ({ wishBooks }) => {
  return (
    <div>
      {wishBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default WishListBooks;
