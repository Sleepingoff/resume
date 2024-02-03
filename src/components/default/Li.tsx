import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Li = ({ children }: Props) => {
  return <StyledLi>{children}</StyledLi>;
};

export default Li;

const StyledLi = styled.li``;
