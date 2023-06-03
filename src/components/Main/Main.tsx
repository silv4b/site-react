import Footer from "../Footer/Footer";
import ProfileData from "../ProfileData/ProfileData";
import Square from "../Square/Square.d";
import { socialMedia, color, hoverColor } from "./socialMedia";
import style from "./Main.module.scss";
import Playlists from "../Playlist/Playlist";

export default function Main() {
  return (
    <>
      <ProfileData />

      <div className={style.wrapper_flex}>
        {socialMedia.map((social) => {
          return <Square key={social.id} link={social.link} icon={social.icon} color={color} hoverColor={hoverColor} />;
        })}
      </div>

      <Playlists />

      <Footer />
    </>
  );
}
