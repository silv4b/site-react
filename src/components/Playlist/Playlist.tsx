import { useState } from "react";
import Modal from "../Modal/Modal";
import { DarkColor, DarkHoverColor } from "../Main/socialMedia";
import { PlaylistButton } from "./Playlist.Style";

export default function Playlists() {
  const [open, setOpen] = useState<boolean>(false);
  const [firstColor, setFirstColor] = useState(DarkColor);

  const onMouseOver = () => {
    setFirstColor(DarkHoverColor);
  };

  const onMouseLeave = () => {
    setFirstColor(DarkColor);
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
