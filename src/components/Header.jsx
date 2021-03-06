import React from "react";
import styled from "styled-components";
import { ReactComponent as YogaLogo } from "../svg/yogaLogo.svg";

const FloaterContainer = styled.div`
  display: flex;
  margin: 1.5rem 0.875rem;
  justify-content: center;
  background-color: #ffffff;
  color: white;
  width: 100%;
  height: 3.25rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

  @media (max-width: 480px) {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  }
`;
export const NavBar = () => (
  <FloaterContainer>
    <YogaLogo />
  </FloaterContainer>
);
