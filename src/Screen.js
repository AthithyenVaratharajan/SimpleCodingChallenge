import React from "react";
import { useState } from "react";
import AddColor from "./AddColor";

const Screen = () => {
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <main>
      <div style={{ backgroundColor: search }}>
        <h1 style={{ color: toggle ? "black" : "white" }}>
          {search.length ? search : "Empty Value"}
        </h1>
      </div>
      <AddColor search={search} setSearch={setSearch} />
      <button onClick={handleClick}>Toggle Text Color</button>
    </main>
  );
};

export default Screen;
