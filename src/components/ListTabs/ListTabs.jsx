import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadedBooks from "../ReadedBooks/ReadedBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListTabs = ({ readBooks, wishBooks }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <ReadedBooks readBooks={readBooks}></ReadedBooks>
        </TabPanel>
        <TabPanel>
          <WishListBooks wishBooks={wishBooks}></WishListBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListTabs;
