import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}

// Definição necessáira pra que o react entenda e reconheça as proproedades de cores de cada tema
// https://www.youtube.com/watch?v=q4aUiZ9NWKY
