import style from "./Modal.module.scss";

interface ISpotify {
  link: string;
  image: string;
  description: string;
  title: string;
}

interface IModal {
  isOpen: boolean;
  title: string;
  description: string;
  arrayList?: Array<ISpotify>;
  setOpen?: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setOpen, title, description }: Partial<IModal>) {
  const handleClick = () => {
    setOpen?.(!isOpen); // marcando o setOpen como opcional
  };

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
          <h3>{title}</h3>
          <p>{description}</p>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Fechar
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}

// fazer o modal carregar na frente do overlay e o click do overlay fechar o modal
