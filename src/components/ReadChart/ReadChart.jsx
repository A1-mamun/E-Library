import { useEffect, useState } from "react";
import { getStoredBooks } from "../../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const ReadChart = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

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

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="text-center">
      <h2
        className={`${
          readBooks.length ? "hidden" : "block"
        } text-2xl md:text-3xl lg:text-4xl font-medium`}
      >
        Sorry!!! you have to read books
      </h2>
      <BarChart
        width={1300}
        height={800}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="bookName"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={200}
        />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ReadChart;
