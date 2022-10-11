import { HamburgerBlock } from "./styles";

function Hamburger({ onPress, isShown }: any) {
  return (
    <HamburgerBlock onClick={onPress} isShown={isShown}>
      <span className="hamburger"></span>
      <span className="hamburger"></span>
      <span className="hamburger"></span>
      <span className="hamburger"></span>
    </HamburgerBlock>
  );
}

export default Hamburger;
