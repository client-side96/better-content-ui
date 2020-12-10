# Better Content UI

![better-content-ui](https://github.com/client-side96/better-content-ui/workflows/better-content-ui/badge.svg)

A simple user interface library that is based on Google Material Design Principles and with the goal to visualize contents of a web application in the best way possible.

## Installation

Install the `better-content-ui` library:

```bash
npm install better-content-ui
```

## Local development

```json
// package.json
...
"better-content-ui": "../path-to-folder"

```

Run `npm install` in your source project.

## Theme installation

Create a `globalStyles.ts` file in your theme folder and import a custom font.

```typescript
// globalStyles.ts
import { createGlobalStyle } from 'better-content-ui';
import rubik400Ttf from './fonts/Rubik400.ttf';

const GlobalStyle: any = createGlobalStyle`
    @font-face {
        font-family: Rubik;
        src: url(${rubik400Ttf});
    }

    body {
        font-family: Rubik, sans-serif;
    }
`;

export default GlobalStyle;
```

Add the `ThemeProvider` and `GlobalStyles` component to your app root.

```jsx
import { ThemeProvider, theme } from 'better-content-ui';
import GlobalStyles from '../../globalStyles';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      /** ... */
    </ThemeProvider>
  </Provider>
);

export default App;
```

## Custom theming

Custom theming will be supported soon...
