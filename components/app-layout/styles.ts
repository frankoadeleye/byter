import styled from "styled-components";
import mediaDevices from "../../utils/functions/media-device";

export const AppLayoutBlock = styled.div`
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.appBg};
  min-height: 100vh;
  max-width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;

  .hamburger {
    background: ${({ theme }) => theme.colors.hamburger};
  }

  ${mediaDevices.tablet`
   padding-left: 40px;
    padding-right: 40px;
  `}
`;

export const ApplayoutContent = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  z-index: 1030;
  max-width: 100vw;
  flex: 1 1 0;
  height: 100vh;
  overflow-y: scroll;
  padding-right: 20px;
  padding: 30px;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 70px;

  &::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.colors.primary}; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.tableHead}; /* color of the scroll thumb */
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) =>
      theme.colors.tableHead}; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.tableHead};
  }

  ${mediaDevices.tablet`
  margin-left: 175px;
   padding-right: 40px;
  `};

  ${mediaDevices.desktop`
  margin-left: 215px;
  `}
`;
