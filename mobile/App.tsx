import React, { useState } from "react";
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useColorScheme } from 'react-native'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import light from './src/styles/themes/light';
import dark from './src/styles/themes/dark';
import themes from './src/styles/themes';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] =  useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if(!fontsLoaded) {
    return null;
  }

  return ( 
    <Routes />
  );

}
