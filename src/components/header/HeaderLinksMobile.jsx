import React, { useState } from "react";
import HeaderBurger from "./HeaderBurger";

export default function HeaderLinkMobile({ burgerLinks }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        className="header__link header__burger-btn"
      >
        <span></span>
      </div>
      <HeaderBurger burgerLinks={burgerLinks} isBurgerOpen={isBurgerOpen} />
    </>
  );
}
