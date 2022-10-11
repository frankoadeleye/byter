import styled from "styled-components";
import { PerfectlyCentered } from "../../utils/functions/perfectly-centered";

export const CustomBtnBlock = styled.button`
  outline-style: none;
  width: 120px;
  padding: 5px 0px;
  ${PerfectlyCentered};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  text: white;
  cursor: pointer;
  margin: 0px 10px;
  color: ${({ theme }) => theme.colors.appBg};
  background: ${({ theme }) => theme.colors.secondary};
`;
