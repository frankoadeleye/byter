import styled from "styled-components";
import mediaDevices from "../../utils/functions/media-device";
import { PerfectlyCentered } from "../../utils/functions/perfectly-centered";

export const NavbarBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.primary};

  ${mediaDevices.tablet`
    padding-left: 40px;
    padding-right: 40px;
    justify-content: flex-end;
  `}
`;

export const DarkModeWrap = styled.div`
  cursor: pointer;
  margin-left: 20px;
  ${PerfectlyCentered};
  padding: 10px;
`;

export const SearchBarNavWrap = styled.div`
  display: none;
   width: 200px;
  flex: 1 1 0;
  margin: auto: 20px;
  height: 60px;
  max-width: 700px;
${mediaDevices.phone`
   display: flex;
  `}

`;
