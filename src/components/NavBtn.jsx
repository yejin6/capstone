import styled from "styled-components";

const NavBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  cursor: pointer;

  &:hover {
    color: var(--Gray7);
  }
`;

const StyledIcon = styled.div``;

const Menu = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.6px;

  color: ${({ selected }) => (selected ? "var(--Gray7)" : "var(--Gray4)")};
`;

const Box = styled.div`
  width: 24px;
  height: 24px;

  background-color: ${({ selected }) =>
    selected ? "var(--Gray7)" : "var(--Gray4)"};
`;

function NavBtn({ menu, selected, onClick }) {
  return (
    <NavBtnWrap onClick={onClick}>
      <StyledIcon selected={selected}>
        <Box selected={selected}></Box>
      </StyledIcon>
      <Menu selected={selected}>{menu}</Menu>
    </NavBtnWrap>
  );
}

export default NavBtn;
