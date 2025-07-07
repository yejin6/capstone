
import styled from "styled-components";

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60px;
  background-color: red;
`;

const BackButton = styled.button`
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

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 12px;
`;

function Header({ title, showBackButton = false, showMoreButton = false }) {
  return (
    <HeaderWrapper>
      {/* 뒤로가기 버튼 */}
      {showBackButton && (
        <BackButton>
          <img src="/icon/chevron-left.svg" alt="" />
        </BackButton>
      )}
      {/* 타이틀 */}
      {title && <Title hasBackButton={showBackButton}>{title}</Title>}
      {/* 더보기 버튼 */}
      {showMoreButton && (
        <MoreButton>
          <img src="" alt="" />
        </MoreButton>
      )}
    </HeaderWrapper>
  );
}

export default Header;
