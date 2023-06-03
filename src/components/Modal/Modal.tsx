import { useCallback, useEffect } from "react";
import style from "./Modal.module.scss";
import { spotifyPlaylists } from "../Playlist/SpotifyPlaylists";

interface KeyboardEvent {
  key: string;
}

interface IModal {
  isOpen: boolean;
  title: string;
  setOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setOpen, title }: Partial<IModal>) {
  const handleClick = () => {
    setOpen?.(!isOpen); // marcando o setOpen como opcional
  };

  // fechando o modal ao pressionar o Esc.
  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setOpen?.(false);
      }
    },
    [setOpen, isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  if (isOpen) {
    return (
      <>
        <div
          onClick={() => {
            handleClick();
          }}
          className={style.background}
        ></div>
        <div className={style.modal}>
          <p>{title}</p>

          {spotifyPlaylists.map((pl) => {
            return (
              <>
                <div onClick={() => window.open(pl.link, "_blank")} className={style.pl_container} key={pl.id}>
                  <div>
                    <img className={style.pl_image} src={pl.image} alt="" />
                  </div>
                  <div className={style.pl_description}>
                    <p>{pl.nome}</p>
                    <p>{pl.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
}
