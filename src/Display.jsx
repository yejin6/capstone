import styled from "styled-components";
import Header from "./components/Header";

const Mobile = styled.div`
  width: 402px;
  height: 874px;
  background-color: #fff;
`;

function Display() {
  return (
    <>
      <Mobile>
        <Header title="타이틀" />
        <Header title="크루 정보" showBackButton={true} />
      </Mobile>
    </>
  );
}

export default Display;
