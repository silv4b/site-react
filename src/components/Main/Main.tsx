import Footer from "../Footer/Footer";
import ProfileData from "../ProfileData/ProfileData";
import Square from "../Square/Square.d";
import { socialMedia, color, hoverColor } from "./socialMedia";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <ProfileData />

      <div className="wrapper-flex">
        {socialMedia.map((social) => {
          return <Square link={social.link} icon={social.icon} color={color} hoverColor={hoverColor} />;
        })}
      </div>

      <Footer />
    </>
  );
}
