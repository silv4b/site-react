import Footer from "../Footer/Footer";
import ProfileData from "../ProfileData/ProfileData";
import Square from "../Square/Square";
import { socialMedia, color, hoverColor } from "./socialMedia";
import Playlists from "../Playlist/Playlist";
import { CenterElements, WraperFlex } from "./Main.Style";

export default function Main() {
  return (
    <>
      <ProfileData />
      <CenterElements>
        <WraperFlex>
          {socialMedia.map((social) => {
            return (
              <Square
                key={social.id}
                link={social.link}
                icon={social.icon}
                color={color}
                hoverColor={hoverColor}
              />
            );
          })}
        </WraperFlex>
      </CenterElements>

      <Playlists />

      <Footer />
    </>
  );
}
