// test.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'box-icon': unknown;
  }
}

/*
  declarando em um arquivo <arquivo>.d.ts que a minha tag 'box-icon' é válida.
  Ref 01: https://github.com/microsoft/TypeScript/issues/15449#issuecomment-298099442
  Ref 02: https://stackoverflow.com/questions/37414304/typescript-complains-property-does-not-exist-on-type-jsx-intrinsicelements-whe
*/