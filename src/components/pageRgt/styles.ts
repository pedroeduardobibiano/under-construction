import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  div {
    font-family: Roboto, sans-serif;
    letter-spacing: 2px;
    line-height: 1.4;
    font-weight: 300;
    font-size: 1.375rem;
    text-transform: none;
    margin: 36px 0 0;
  }

  span {
    display: block;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    font-family: Roboto, sans-serif;
  }

  button {
    margin-top: 3.5rem;
    border: 2px solid #ee4dc6;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;

    cursor: pointer;

    :hover {
      color: black;
      background: white;
      transition: 1s;
    }
  }

  a {
    text-decoration: none;
    background-color: inherit;
    color: inherit;
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 1.5rem;
    }
    div {
      font-size: 0.95rem;
    }
    button {
      font-size: 0.8rem;
    }
  }


  @media (max-width: 390px) {
    h1 {
      font-size: 1.2rem;
    }
    div {
      font-size: 0.8rem;
    }
    button {
      font-size: 0.7rem;
    }
  }
`;
