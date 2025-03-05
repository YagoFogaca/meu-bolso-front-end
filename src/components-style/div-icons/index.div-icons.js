import styled from "styled-components";

export const IconMovimentRevenue = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: #00d500;
  display: flex;
  justify-content: center;
  align-items: center;

  .bi {
    font-size: 35px;
    height: 25px;
    display: contents;
    color: #fff;
  }
`;

export const IconMovimentExpenses = styled(IconMovimentRevenue)`
  background-color: #ff0000;
`;

export const IconMovimentRevenueVariant = styled(IconMovimentRevenue)`
  width: 20px;
  height: 20px;
  border-radius: 33.33333333333333px;
  .bi {
    font-size: 25px;
    height: 15px;
    display: contents;
    color: #fff;
  }
`;

export const IconMovimentExpensesVariant = styled(IconMovimentExpenses)`
  width: 20px;
  height: 20px;
  border-radius: 33.33333333333333px;
  .bi {
    font-size: 25px;
    height: 15px;
    display: contents;
    color: #fff;
  }
`;
