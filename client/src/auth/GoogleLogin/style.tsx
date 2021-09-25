import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-style: none;
  padding: 0.5rem 1rem;
  background-color: #ffffff;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.16);
    padding: 5% 0%;
    text-decoration: none;
    position: relative;
    padding: 5% 0%;
    width: 100%;
    border-style: none;
    cursor: pointer;

    img {
      width: 2rem;
      position: absolute;
      left: 1rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
