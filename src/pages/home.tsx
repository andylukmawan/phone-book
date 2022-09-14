import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        title="Phone Book"
        rightButton={[
          {
            title: "Search",
            iconName: "search",
            onClick: () => navigate("search"),
          },
          {
            title: "Create",
            iconName: "library_add",
            onClick: () => navigate("form"),
          },
        ]}
      />

      <ContactList />
    </div>
  );
}
