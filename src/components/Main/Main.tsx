import Square from "../Square/Square";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <p>Bruno Silva | @silv4b</p>
      <div className="wrapper-flex">
        <Square link="https://www.linkedin.com/in/silv4b/" icon="linkedin" color="#f5f5f5" hoverColor="#202024" />
        <Square link="https://instagram.com/silv4b/" icon="instagram" color="#f5f5f5" hoverColor="#202024" />
        <Square link="https://www.figma.com/@silv4b/" icon="figma" color="#f5f5f5" hoverColor="#202024" />
        <Square link="https://github.com/silv4b/" icon="github" color="#f5f5f5" hoverColor="#202024" />
        <Square
          link="https://marketplace.visualstudio.com/publishers/silv4b/"
          icon="visual-studio"
          color="#f5f5f5"
          hoverColor="#202024"
        />
        <Square link="mailto:brunoxbkd@gmail.com" icon="gmail" color="#f5f5f5" hoverColor="#202024" />
      </div>
    </>
  );
}
