import React from "react";
import { NativeBaseProvider,extendTheme } from "native-base";
import { Root } from './src/components/RootComponent';
import { Provider } from "react-redux";
import { store } from "./store";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Root></Root>
      </NativeBaseProvider>
    </Provider>
  );
}
