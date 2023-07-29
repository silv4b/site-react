import {
  ProfileContainer,
  Profile,
  ImageProfile,
  HeaderTwo,
  Paragraph,
} from "../ProfileData/ProfileData.Style";

export default function ProfileData() {
  return (
    <>
      <ProfileContainer>
        <Profile>
          {/* caso seja propriedade padrão do tag-component, reconhece normalmente */}
          <ImageProfile image="https://avatars.githubusercontent.com/u/17997794?v=4" />
        </Profile>
      </ProfileContainer>

      <HeaderTwo>Bruno Silva | @silv4b</HeaderTwo>
      <Paragraph color="#808080">
        {" "}
        Designer de Interfaces e Desenvolvedor
      </Paragraph>
    </>
  );
}
