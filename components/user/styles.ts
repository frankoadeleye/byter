import styled, { css } from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";
import { DarkTheme, LightTheme } from "utils/constants/theme";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";

interface pProps {
  darkMode: string | boolean;
}

export const UserBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px 0px;
`;

export const BioBlockCSS = css`
  width: auto;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BioBlockName = styled.div`
  ${BioBlockCSS};
  ${FontSizeFor.NormalText};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BioBlockEmail = styled.div`
  ${BioBlockCSS};
  ${FontSizeFor.NormalText};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ProfileBtnBlock = styled.div<pProps>`
  width: 100%;
  height: 36px;
  text-transform: uppercase;
  ${PerfectlyCentered};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border: 2px solid
    ${(props) =>
      props.darkMode
        ? DarkTheme.colors.tabActiveBgColor
        : LightTheme.colors.sidebarActiveTextColor};
`;
