import styled from "styled-components";
import { FontSizeFor } from "../../utils/functions/font-size-for";
import mediaDevices from "../../utils/functions/media-device";
import { PerfectlyCentered } from "../../utils/functions/perfectly-centered";

export const SidebarItemBlock = styled.div`
  padding: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 5px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
