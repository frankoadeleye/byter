import styled, { css } from "styled-components";
import mediaDevices from "utils/functions/media-device";
import { DarkTheme } from "utils/constants/theme";

interface aProps {
  darkMode: string | boolean;
}

export const SidebarBlock = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 1030;
  display: none;
  height: 100%;
  padding: 0px 20px;
  padding-top: 70px;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.3),
    -5px 0 10px -5px rgba(0, 0, 0, 0.3);

  ${mediaDevices.tablet`
    display: flex;
     width: 180px;
  `};

  ${mediaDevices.desktop`
    width: 215px;
  `};
`;

export const SidebarItemsWrap = styled.div<aProps>`
  flex-direction: column;
  background: ${({ theme }) => theme.colors.Appbg};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  padding-top: 45px;
  padding-bottom: 20px;

  .active {
    background: rgba(44, 164, 216, 0.1);
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid
      ${(props) =>
        props.darkMode ? DarkTheme.colors.tableHead : "transparent"};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }

  ${mediaDevices.tablet`
    display: flex;
    justify-content: space-between;
  `};
`;

export const ItemGroup = styled.div``;
