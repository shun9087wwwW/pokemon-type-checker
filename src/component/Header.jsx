import React from "react";

const Header = () => {
  return (
    <div className="headerBox container-fluid w-100 border border-dark d-flex justify-content-center align-items-center">
      <h2
        className="m-0 text-warning fst-italic"
        style={{ WebkitTextStroke: "1px #3272a9" }}
      >
        ポケモンタイプ相性チェッカー
      </h2>
    </div>
  );
};

export default Header;
