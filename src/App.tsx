import "./App.scss";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Main from "./components/Main/Main";
import GlobalStyle from "./style/global";
import light from "./style/themes/light";
import dark from "./style/themes/dark";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* estilos blobais são aplicados ao chamar essa tag no app.tsx */}
        <GlobalStyle />
        {/* mudar para context api posteriormente */}
        <Main toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
