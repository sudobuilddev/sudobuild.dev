import "./src/styles/main.css"

import React from 'react';

import ThemeContextProvider from './src/context/themeContext';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
