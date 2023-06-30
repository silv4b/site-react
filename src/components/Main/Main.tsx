import Footer from "../Footer/Footer";
import ProfileData from "../ProfileData/ProfileData";
import Square from "../Square/Square";
import { socialMedia, DarkColor, DarkHoverColor } from "./socialMedia";
import Playlists from "../Playlist/Playlist";
import { CenterElements, WraperFlex } from "./Main.Style";
import Switcher from "../Switcher/Switcher";
import { IToggleTheme } from "../../interfaces/IToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Main: React.FC<IToggleTheme> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Switcher toggleTheme={toggleTheme} />
      <ProfileData />
      <CenterElements>
        <WraperFlex>
          {socialMedia.map((social) => {
            return (
              <Square
                key={social.id}
                link={social.link}
                icon={social.icon}
                // atualizar ao clicar no toggle
                color={title === "light" ? DarkHoverColor : DarkColor}
                hoverColor={title === "light" ? DarkColor : DarkHoverColor}
              />
            );
          })}
        </WraperFlex>
      </CenterElements>

      <Playlists />

      <Footer />
    </>
  );
};

export default Main;
