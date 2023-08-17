import React from "react";

const AddColor = ({ search, setSearch }) => {
  return (
    <form>
      <div className="field">
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Add Color Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddColor;
