import { createGlobalStyle } from 'styled-components';

// https://www.copycat.dev/blog/styled-components-react/

export default createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  body {
    background: #111114;
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  p {
    margin-top: 0;
  }

  box-icon {
    width: 40px;
    height: 40px;
  }


  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #111114;
    padding: 5px !important;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px !important;
    margin-right: 5px !important;
  }
`;