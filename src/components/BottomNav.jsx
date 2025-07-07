import styled from "styled-components";
import NavBtn from "./NavBtn";
import { useState } from "react";

const BottomNavWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 4px 36px 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: linear-gradient(180deg, #ffffff 80%, #ffffff 100%);

  position: absolute;
  bottom: 0;
  left: 0;

  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.06);
  z-index: 1000;
`;

function BottomNav() {
  const [selectedMenu, setSelectedMenu] = useState("홈");

  return (
    <BottomNavWrap>
      <NavBtn
        menu="홈"
        selected={selectedMenu === "홈"}
        onClick={() => setSelectedMenu("홈")}
      />
      <NavBtn
        menu="러닝"
        selected={selectedMenu === "러닝"}
        onClick={() => setSelectedMenu("러닝")}
      />
      <NavBtn
        menu="기록"
        selected={selectedMenu === "기록"}
        onClick={() => setSelectedMenu("기록")}
      />
      <NavBtn
        menu="마이"
        selected={selectedMenu === "마이"}
        onClick={() => setSelectedMenu("마이")}
      />
    </BottomNavWrap>
  );
}

export default BottomNav;
