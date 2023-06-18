import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  height: 100px;
  width: 100px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: 20px;

  &:hover {
    box-shadow: 0px 0px 67px -11px rgba(0, 0, 0, 0.75);
    transform: scale(1.2);
    background-color: #f5f5f5;
  }
`;

export {Container};