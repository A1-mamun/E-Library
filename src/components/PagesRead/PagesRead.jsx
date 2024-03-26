import ListedBook from "../ListedBook/ListedBook";
import ListedBooks from "../ListedBooks/ListedBooks";

const PagesRead = () => {
  return (
    <div className=" container mx-auto">
      <ListedBooks></ListedBooks>
      <ListedBook></ListedBook>
    </div>
  );
};

export default PagesRead;
