import React from "react";

import usePaths from "../utils/usePaths";

const Header: React.FC = () => {
  //get header name from usePaths hook
  const name = usePaths();

  return (
    <header>
      <h1 className="text-3xl font-bold bg-blue-700 text-white p-2">{name}</h1>
    </header>
  );
};

export default Header;
