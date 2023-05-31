import Square from "../Square/Square";
import "./Main.css";

export default function Main() {
  return (
    <>
      <p>Bruno Silva | @silv4b</p>
      <div className="wrapper-flex">
        <Square link="https://www.linkedin.com/in/silv4b/" />
        <Square link="https://instagram.com/silv4b/" />
        <Square link="https://www.figma.com/@silv4b/" />
        <Square link="https://github.com/silv4b/" />
        <Square link="https://marketplace.visualstudio.com/publishers/silv4b/" />
        <Square link="mailto:brunoxbkd@gmail.com" />
      </div>
    </>
  );
}
