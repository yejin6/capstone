import styled from "styled-components";
import BeforeSummary from "./BottomSheetMode/BeforeSummary";
import BeforeGoal from "./BottomSheetMode/BeforeGoal";
import IngPaused from "./BottomSheetMode/IngPaused";
import IngRunning from "./BottomSheetMode/IngRunning";

const Sheet = styled.div`
  bottom: 0;
  width: 100%;
  background-color: var(--White);
  border-radius: 24px 24px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;

  padding: ${({ step }) =>
    step === "before" ? "12px 24px 104px 24px" : "12px 24px 40px 24px"};
`;

const DragBar = styled.div`
  width: 60px;
  height: 6px;
  background-color: var(--Gray2);
  border-radius: 100px;
`;

const Content = styled.div`
  padding: 24px;
`;

function BottomSheet({ step = "before", type = "summary" }) {
  return (
    <Sheet step={step}>
      <DragBar />
      <Content>
        {step === "before" && type === "summary" && <BeforeSummary />}
        {step === "before" && type === "goal" && <BeforeGoal />}
        {step === "ing" && type === "paused" && <IngPaused />}
        {step === "ing" && type === "running" && <IngRunning />}
      </Content>
    </Sheet>
  );
}

export default BottomSheet;
