import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div className=" container mx-auto my-16 px-3">
      <h2 className=" text-4xl text-center mb-10">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {books.map((book, idx) => (
          <Book key={idx} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
