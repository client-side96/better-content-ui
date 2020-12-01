import React from 'react'
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import  { theme, GlobalStyle } from '../src'

addDecorator((story) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div style={{padding: 10}}>
      {story()}
      </div>
    </ThemeProvider>  
  </>
));