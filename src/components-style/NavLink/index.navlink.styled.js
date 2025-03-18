import { NavLink } from "react-router";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  &.nav-link.active {
    color: var(--bs-nav-link-color);
  }

  &.nav-link:focus,
  &.nav-link:hover {
    color: var(--bs-nav-link-hover-color);
  }
`;

export const NavDropdownLink = styled(NavLink)`
  &.dropdown-item:focus,
  &.dropdown-item:hover {
    color: var(--bs-dropdown-link-hover-color);
    background-color: var(--bs-dropdown-link-hover-bg);
  }

  &.dropdown-item.active,
  .dropdown-item:active {
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none;
    background-color: transparent !important;
  }
`;
