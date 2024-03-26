const ListedBook = () => {
  return (
    <div className=" font-worksans border p-5 rounded-2xl flex gap-10">
      <div className=" bg-dark-05 rounded-2xl md:w-1/5">
        <img className=" h-72 p-7" src="../../../public/Book1.png" alt="" />
      </div>
      <div className="md:w-4/5">
        <h1 className=" text-3xl font-playfair font-bold text-dark">
          The Catcher in the Rye
        </h1>
        <p className="font-medium text-dark-8 text-lg my-3">
          By : Awlad Hossain
        </p>
        <div className="mb-7 flex gap-8">
          <h4 className="font-bold text-dark">Tag</h4>
          <div className="flex gap-2">
            {/* {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag}></Tag>
            ))} */}
          </div>
          <div className=" flex gap-2">
            <img src="./location.png" alt="" />
            <p>Year of Publishing: 1924</p>
          </div>
        </div>
        <div className=" flex gap-10 mb-4">
          <div className=" flex gap-2">
            <img src="./person.png" alt="" />
            <p>Publisher: Scribner</p>
          </div>
          <div className=" flex gap-2">
            <img src="./file.png" alt="" />
            <p>Page 192</p>
          </div>
        </div>
        <hr />
        <div className="space-x-4 my-4">
          <h4 className="badge badge-lg p-5 bg-blue-15 text-blue font-medium">
            Category: Classic
          </h4>
          <h4 className="badge badge-lg p-5 bg-supernova-15 text-supernova font-medium">
            Rating: 4.5
          </h4>
          <button className="btn bg-green rounded-full text-lg font text-white font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
