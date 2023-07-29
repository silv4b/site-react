import { useState } from "react";
import { Container } from "./Square.Style";

interface ISquare {
  link: string;
  icon: string;
  animation: string;
  color: string;
  hoverColor: string;
}

export default function Square({
  link,
  icon,
  animation,
  color,
  hoverColor,
}: Partial<ISquare>) {
  const [firstColor, setFirstColor] = useState(color);

  const onMouseOver = () => {
    setFirstColor(hoverColor);
  };

  const onMouseLeave = () => {
    setFirstColor(color);
  };

  return (
    <>
      <Container
        onClick={() => window.open(link, "_blank")}
        onMouseOver={() => onMouseOver()}
        onMouseLeave={() => onMouseLeave()}
      >
        <box-icon
          id="boxIcon"
          type="logo"
          name={icon}
          animation={animation}
          color={firstColor}
        />
      </Container>
    </>
  );
}

// TO-DO: Testar o uso de styled-icons -> https://github.com/styled-icons/styled-icons
