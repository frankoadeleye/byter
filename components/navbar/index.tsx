import { NavbarBlock, DarkModeWrap } from "./styles";
import { BsMoon } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import Hamburger from "components/hamburger";
import { CustomButton, TextRunner } from "components/custom-button";
import { useState } from "react";

interface nProps {
  handleDarkMode: any;
  darkMode: boolean;
}

function Navbar({ handleDarkMode, darkMode }: nProps) {
  const [isShown, setTextState] = useState(false);

  function handleClick() {
    setTextState(!isShown);
  }

  return (
    <NavbarBlock>
      <Hamburger />
      {/* ------- the below are to demonstrate testing React component with Jest --------- */}
      <CustomButton isClicked={handleClick} text={"Play With Me"} />
      <TextRunner isTrue={isShown} renderedText="I am here" />
      {/* ---------------------   ------------------------------------------------------- */}
      <DarkModeWrap onClick={handleDarkMode}>
        {darkMode ? <BsMoon /> : <BsFillMoonFill />}
      </DarkModeWrap>
    </NavbarBlock>
  );
}

export default Navbar;
