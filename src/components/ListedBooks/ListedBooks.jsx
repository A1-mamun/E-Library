const ListedBooks = () => {
  return (
    <div className=" container mx-auto mt-8">
      <div className="bg-dark-05 text-center p-8 rounded-2xl">
        <h2 className="text-4xl font-bold">Books</h2>
      </div>
      <div className="mt-5">
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <a role="tab" className="tab">
            Large
          </a>
          <a role="tab" className="tab tab-active">
            Large
          </a>
          <a role="tab" className="tab">
            Large
          </a>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            checked
          />

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">
            Tab 1
          </a>
          <a role="tab" className="tab tab-active text-primary">
            Tab 2
          </a>
          <a role="tab" className="tab">
            Tab 3
          </a>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            checked
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
