import Drop from "../Drop/Drop";
import ListTabs from "../ListTabs/ListTabs";

const ListedBooks = () => {
  return (
    <div className=" container mx-auto mt-8">
      <div className="bg-dark-05 text-center p-8 rounded-2xl mb-8">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="flex justify-center items-center">
        <select className="btn w-40 bg-green focus:outline-none hover:bg-white text-white hover:text-black">
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="year">Year</option>
        </select>
      </div>

      {/* <Drop></Drop> */}
      <ListTabs></ListTabs>
    </div>
  );
};

export default ListedBooks;
