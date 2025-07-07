import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const BackButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 12px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: ${(props) => (props.hasBackButton ? "left" : "center")};
  flex: 1;
`;

const Header = ({ title, showBackButton = false, onBack }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {showBackButton && (
        <BackButton onClick={onBack || (() => navigate(-1))}>&lt;</BackButton>
      )}
      {title && <Title hasBackButton={showBackButton}>{title}</Title>}
    </HeaderWrapper>
  );
};

export default Header;
