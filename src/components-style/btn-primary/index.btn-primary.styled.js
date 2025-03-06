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

export const BtnStyledLogin = styled(BtnStyled)`
  width: 100%;
  margin-bottom: 10px;
`;

export const BtnStyledCreate = styled(BtnStyledLogin)`
  background-color: transparent;
  color: #aa0cff;
  border-color: rgba(170, 12, 255, 0.1) !important;

  &:active,
  &:hover {
    border-color: #aa0cff !important;
    background-color: rgba(170, 12, 255, 0.83) !important;
    color: #fff;
  }
`;
