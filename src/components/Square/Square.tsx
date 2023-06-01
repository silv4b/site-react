import { useState } from "react";
import "./Square.scss";

interface ISquare {
  link: string;
  icon: string;
  animation: string;
  color: string;
  hoverColor: string;
}

export default function Square({ link, icon, animation, color, hoverColor }: Partial<ISquare>) {
  const [firstColor, setFirstColor] = useState(color);

  const mouseIn = () => {
    setFirstColor(hoverColor);
  };

  const mouseOut = () => {
    setFirstColor(color);
  };

  return (
    <>
      <div
        className="container"
        onClick={() => window.open(link, "_blank")}
        onMouseOver={() => mouseIn()}
        onMouseLeave={() => mouseOut()}
      >
        <box-icon id="boxIcon" type="logo" name={icon} animation={animation} color={firstColor} />
      </div>
    </>
  );
}
