import Footer from "../Footer/Footer";
import ProfileData from "../ProfileData/ProfileData";
import Square from "../Square/Square.d";
import Playlists from "../Playlist/Playlist";
import { socialMedia, color, hoverColor } from "./socialMedia";
import style from "./Main.module.scss";

export default function Main() {
  return (
    <>
      <ProfileData />

      <div className={style.wrapper_flex}>
        {socialMedia.map((social) => {
          return <Square link={social.link} icon={social.icon} color={color} hoverColor={hoverColor} />;
        })}
      </div>

      <Playlists />

      <Footer />
    </>
  );
}
