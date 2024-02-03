import { PropsWithChildren } from "react";
import styled from "styled-components";

const Li = ({ children }: PropsWithChildren) => {
  return <StyledLi>{children}</StyledLi>;
};

export default Li;

const StyledLi = styled.li``;
