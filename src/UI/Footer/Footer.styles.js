import styled from "styled-components";

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .social {
    background: #f80000c4;
    padding: 3rem 2rem 10rem;
    align-self: stretch;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
    & div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 0.3rem;
      color: white;
      font-size: 2rem;
      @media only screen and (max-width: 700px) {
        align-items: flex-start;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    h3 {
      font-size: 1.8rem;
    }
    aside {
      text-align: center;
    }
    aside > p {
      display: inline;
      font-size: 1.8rem;
      margin-right: 1rem;
      padding: 0 0.6rem 0 0;
      border-right: 3px solid red;
    }
  }
`;
