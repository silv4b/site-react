import style from "./Modal.module.scss";

interface ISpotify {
  link: string;
  image?: string;
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
      <div className={style.background}>
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
      </div>
    );
  } else {
    <></>;
  }
}
