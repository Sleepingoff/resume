import styled from "styled-components";
import Li from "./Li";

interface Props {
  data: Array<string>;
}

const Ulist = ({ data }: Props) => {
  return (
    <StyledUl>
      {data.map((d, key) => (
        <Li key={key}>{d}</Li>
      ))}
    </StyledUl>
  );
};

export default Ulist;

const StyledUl = styled.ul``;
