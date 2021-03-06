import React from "react";
import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button
        color="green"
        text="Add"
        onClick={onClick}
      />
    </header>
  );
};

export default Header;
