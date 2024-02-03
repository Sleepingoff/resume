import styled from "styled-components";
import { PropsWithChildren } from "react";

interface Props {
  children: React.ReactNode;
}

const Ulist = ({ children }: Props) => {
  return <StyledUl>{children}</StyledUl>;
};

export default Ulist;

const StyledUl = styled.ul`
  font-size: 14px;
`;
