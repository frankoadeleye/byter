import styled from "styled-components";
import mediaDevices from "../../utils/functions/media-device";
import { PerfectlyCentered } from "../../utils/functions/perfectly-centered";

interface HProps {
  isShown?: boolean;
}

export const HamburgerBlock = styled.div<HProps>`
  ${PerfectlyCentered};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 10px;

  span {
    width: 30px;
   border-radius: ${({ theme }) => theme.borderRadius};
    height: 2px;
    background: in;
    margin: 3px auto;
  }

  ${mediaDevices.tablet`
     display: none;
  `};
`;
