import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Drop = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div>
      <Dropdown
        className="btn bg-green text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-green-600"
        options={options}
        value={defaultOption}
        placeholder="one"
      />
    </div>
  );
};

export default Drop;
