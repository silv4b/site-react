import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Playlists() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <h4>Playlis Component</h4>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {" "}
        Clique Aqui
      </button>
      <Modal isOpen={open} setOpen={setOpen} title="Título Modal" description="Descrição Modal" />
    </>
  );
}
