import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border-style: solid;
  transition: 0.2s ease-in-out;
  border-color: ${(props) => props.theme.colors.secondary};
`;

const ImageProfile = styled.img<{ image: string }>`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderTwo = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

// passando prop para o componente de estilização
// const Paragraph = styled.p<{ color: string }>`
//   color: ${(props) => props.color};
// `;

const Paragraph = styled.p`
  // mudar para um cinza mais claro #808080
  color: ${(props) => props.theme.colors.text};
`;

export { ProfileContainer, Profile, ImageProfile, HeaderTwo, Paragraph };
