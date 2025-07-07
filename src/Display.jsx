import styled from "styled-components";
import TabNav from "./components/TabNav";
import BottomNav from "./components/BottomNav";
import ToolTip from "./components/ToolTip";
import MiniBtn from "./components/MiniBtn";
import Toggle from "./components/Toggle";
import BottomSheet from "./components/BottomSheet";

const Mobile = styled.div`
  width: 402px;
  height: 874px;
  background-color: #f3f3f3;

  position: relative;
`;

function Display() {
  return (
    <>
      <Mobile>
        <TabNav tabs={["일", "주", "월"]} />
        <TabNav tabs={["미완료 미션", "완료 미션"]} />
        <ToolTip type={"big"} tip={"필드 생성중"}></ToolTip>
        <ToolTip type={"small"} tip={"구예진"}></ToolTip>
        <MiniBtn type={"default"} title={"필드 생성"}></MiniBtn>
        <MiniBtn type={"secondary"} title={"필드 생성"}></MiniBtn>
        <MiniBtn type={"white"} title={"필드 생성"}></MiniBtn>
        <Toggle></Toggle>
        <BottomSheet step="before" type="goal" />
        <BottomNav />
      </Mobile>
    </>
  );
}

export default Display;
