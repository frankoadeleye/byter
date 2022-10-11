import styled from "styled-components";
import { DarkTheme } from "utils/constants/theme";
import { FontSizeFor } from "utils/functions/font-size-for";

export const ButtonBlock = styled.div`
  border: 1px solid yellow;
  padding: 5px;
  ${FontSizeFor.NormalText};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.secondary};
  width: 80px !important;
  text-align: center;
  border: 1px solid ${DarkTheme.colors.tableHead};
`;
