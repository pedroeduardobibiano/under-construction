import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  display: flex;
  justify-content: center;
  img {
    min-width: 30rem;
    width: 70%;
  }

  @media (max-width: 1200px) {
    display: none;
  }

`;
