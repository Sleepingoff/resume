import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.header`
  height: 80px;
  border-bottom: 1px black;
`;
