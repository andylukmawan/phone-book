import { css } from "@emotion/react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header
        title="Phone Book"
        rightButton={[
          {
            title: "Search",
            iconName: "search",
            onClick: () => console.log("search"),
          },
          {
            title: "Create",
            iconName: "library_add",
            onClick: () => console.log("create"),
          },
        ]}
      />

      <ContactList />
    </div>
  );
}

export default App;
