import styled from "styled-components";

export const ThStyled = styled.th`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TdStyled = styled.td`
  @media (max-width: 768px) {
    font-size: 14px;
  }

  .bi-pencil-fill {
    margin-right: 5px;
  }
  .bi-trash3-fill {
    margin-left: 5px;
  }
`;
