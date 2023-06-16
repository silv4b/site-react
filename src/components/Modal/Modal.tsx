import { useCallback, useEffect } from "react";
import { spotifyPlaylists } from "../Playlist/SpotifyPlaylists";
import { Background, ModalContent, PlaylistContainer, PlaylisImage, PlaylisDescription } from "./Modal.Style";

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
        <Background
          onClick={() => {
            handleClick();
          }}
        ></Background>
        <ModalContent>
          <p>{title}</p>

          {spotifyPlaylists.map((pl) => {
            return (
              <>
                <PlaylistContainer onClick={() => window.open(pl.link, "_blank")} key={pl.id}>
                  <PlaylisImage src={pl.image} alt="" />
                  <PlaylisDescription>
                    <p>{pl.nome}</p>
                    <p>{pl.desc}</p>
                  </PlaylisDescription>
                </PlaylistContainer>
              </>
            );
          })}
        </ModalContent>
      </>
    );
  } else {
    return null;
  }
}
