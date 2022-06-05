import styled, { css } from "styled-components";

export const imgCss = css`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const AboutImg = styled.div`
  width: 100%;
  align-self: stretch;
  height: 80rem;
  @media only screen and (max-width: 900px) {
    height: 50rem;
  }
  img {
    ${imgCss}
  }
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const AboutText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 2rem;
  }
  ul {
    margin-left: 3rem;
  }
  .prize {
    width: 100%;
    img {
      ${imgCss}
    }
  }
`;
