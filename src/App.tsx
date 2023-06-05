import "./App.scss";
import Main from "./components/Main/Main";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      {/* estilos blobais são aplicados ao chamar essa tag no app.tsx */}
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
