import { useState } from "react";
import Modal from "../Modal/Modal";
import { color, hoverColor } from "../Main/socialMedia";
import style from "./Playlist.module.scss";

export default function Playlists() {
  const [open, setOpen] = useState<boolean>(false);
  const [firstColor, setFirstColor] = useState(color);

  const onMouseOver = () => {
    setFirstColor(hoverColor);
  };

  const onMouseLeave = () => {
    setFirstColor(color);
  };

  return (
    <>
      <button
        className={style.btn_playlist}
        onClick={() => {
          setOpen(!open);
        }}
        onMouseOver={() => onMouseOver()}
        onMouseLeave={() => onMouseLeave()}
      >
        {" "}
        <box-icon name="music" color={firstColor}></box-icon>
      </button>
      <Modal isOpen={open} setOpen={setOpen} title="Playlists" />
    </>
  );
}
