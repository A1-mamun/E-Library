import ListTabs from "../ListTabs/ListTabs";

const ListedBooks = () => {
  return (
    <div className=" container mx-auto mt-8">
      <div className="bg-dark-05 text-center p-8 rounded-2xl mb-8">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <ListTabs></ListTabs>
    </div>
  );
};

export default ListedBooks;
