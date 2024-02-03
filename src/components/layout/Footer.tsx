import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  height: 80px;
  border-top: 1px black;
`;
