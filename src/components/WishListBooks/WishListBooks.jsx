import ListedBook from "../ListedBook/ListedBook";

const WishListBooks = ({ wishBooks }) => {
  return (
    <div className="space-y-5 md:space-y-8 my-5 md:my-10">
      {wishBooks.map((book, idx) => (
        <ListedBook key={idx} book={book}></ListedBook>
      ))}
    </div>
  );
};

export default WishListBooks;
