import { Table } from "react-bootstrap";
import styled from "styled-components";

export const TableStyled = styled(Table)`
  vertical-align: middle !important;
  min-width: 592px;
`;

export const ThStyled = styled.th`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TdStyled = styled.td`
  @media (max-width: 768px) {
    font-size: 14px;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .bi-pencil-fill {
    margin-right: 5px;
  }
  .bi-trash3-fill {
    margin-left: 5px;
  }
`;
