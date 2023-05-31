import "./Square.css";

interface ISquare {
  link?: string;
}
export default function Square({ link }: ISquare) {
  return (
    <>
      <div className="container" onClick={() => window.open(link, "_blank")}></div>
    </>
  );
}
