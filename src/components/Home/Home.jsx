import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Books books={books}></Books>
    </div>
  );
};

export default Home;
