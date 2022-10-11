import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";
import mediaDevices from "utils/functions/media-device";

export const TableWrapper = styled.div`
  width: auto;
  min-height: 200vh;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const TableBlock = styled.table`
  min-height: 30px;
  width: 100%;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.appBg};
  ${FontSizeFor.NormalText};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-collapse: collapse;
  padding: 0;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: none;

  thead tr {
    word-wrap: break-word;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    height: 60px;
  }

  thead tr th {
    background: ${({ theme }) => theme.colors.tableHead};
  }

  tbody tr {
    background: ${({ theme }) => theme.colors.appBg};
  }

  tr {
    background: ${({ theme }) => theme.colors.appBg};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 0.1em;
  }

  th,
  td {
    padding: 0.1em;
    text-align: center;
    word-wrap: break-word;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-left: none;
  }

  th:first-child,
  td:first-child {
    border-left: none;
  }

  tbody tr {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.tableHead};
      transition: 0.3s;

      .button {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.appBg};
      }
    }
  }

  tbody tr td:last-child,
  thead tr th:last-child {
    div {
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  thead tr:first-child th:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
  }

  thead tr:first-child th:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
  }

  thead tr th:nth-child(4),
  tbody tr td:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    tbody tr td:last-child,
    thead tr th:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
    }

    thead tr th:nth-child(4),
    tbody tr td:nth-child(4) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 767.9px) {
    border: 0;

    td:nth-child(6) {
      ${PerfectlyCentered};
      justify-content: space-between;
      .button {
        margin: 0px;
      }
    }

    td:last-child {
      .button {
        margin: 0px;
      }
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      display: block;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }

    td::before {
      content: attr(aria-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    th,
    td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      border-left: none;
    }
    tbody tr {
      border: none;
      margin: 0;
    }

    tbody tr:first-child {
      &:hover {
        border-top-right-radius: ${({ theme }) => theme.borderRadius};
        border-top-left-radius: ${({ theme }) => theme.borderRadius};
      }
    }

    tbody tr td:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 15px;

      span {
        padding-left: 50%;
      }
    }
  }
`;
