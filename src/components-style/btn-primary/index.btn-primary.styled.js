import styled from "styled-components";
import { Button } from "react-bootstrap";

export const BtnStyled = styled(Button)`
  background-color: #aa0cff;
  border-color: #aa0cff;

  &:active,
  &:hover {
    border-color: #aa0cff !important;
    background-color: rgba(170, 12, 255, 0.83) !important;
  }
`;
