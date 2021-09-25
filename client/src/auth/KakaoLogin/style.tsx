import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-style: none;
  padding: 0.5rem 1rem;
  background-color: #ffffff;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee500;
    color: #000000;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.16);
    padding: 5% 0%;
    text-decoration: none;
    position: relative;

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
