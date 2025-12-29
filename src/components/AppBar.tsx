import React from "react";
import SearchBar from "./SearchBar";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center pt-1 p-3 m-2">
      <div className="text-lg inline-flex items-center">Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign in</div>
    </div>
  );
};

export default AppBar;
