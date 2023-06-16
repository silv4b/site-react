import styled from "styled-components";

const FooterContent = styled.div``;

const Paragraph = styled.p`
  color: gray;
`;

const Link = styled.a`
  color: gray;
  text-decoration: none;
  transition: 0.1s ease-in-out;

  &:hover {
    color: white;
  }
`;

export {FooterContent, Paragraph, Link};