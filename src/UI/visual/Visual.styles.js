import styled from "styled-components";
import { imgCss } from "../About/About.styles";

export const VisualSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-bottom: 4px solid red;
  h3 {
    font-size: 2rem;
  }
  div {
    width: 80%;
  }
  img {
    ${imgCss}
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;
