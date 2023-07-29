import styled from "styled-components";

const PlaylistButton = styled.button`
  border: none;
  width: 380px;
  height: 50px;
  background-color: #202024;
  border-radius: 8px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 67px -11px rgba(0, 0, 0, 0.75);
    transform: scale(1.2);
    background-color: #f5f5f5;
  }

  &:first-child {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 490px) {
    width: 240px;
    margin: 1rem 0;
  }
`;

export { PlaylistButton };
