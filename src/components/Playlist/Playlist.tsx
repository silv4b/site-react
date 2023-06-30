import { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import { DarkColor, DarkHoverColor } from "../Main/socialMedia";
import { PlaylistButton } from "./Playlist.Style";
import { ThemeContext } from "styled-components";

export default function Playlists() {
  const [open, setOpen] = useState<boolean>(false);
  const [firstColor, setFirstColor] = useState(DarkColor);
  const { title } = useContext(ThemeContext);

  const onMouseOver = () => {
    setFirstColor(title === "light" ? DarkColor : DarkHoverColor);
  };

  const onMouseLeave = () => {
    setFirstColor(title === "light" ? DarkHoverColor : DarkColor);
  };

  return (
    <>
      <PlaylistButton
        onClick={() => {
          setOpen(!open);
        }}
        onMouseOver={() => onMouseOver()}
        onMouseLeave={() => onMouseLeave()}
      >
        <box-icon name="music" color={firstColor}></box-icon>
      </PlaylistButton>
      <Modal isOpen={open} setOpen={setOpen} title="Playlists" />
    </>
  );
}
