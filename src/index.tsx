// Components
export { Button } from './core/Button';
export { ButtonProps } from './core/Button/types';
export { Text } from './core/Text';
export { TextProps } from './core/Text/types';

// Theme
export { ITheme, IPalette } from './theme/types';
export * as betterColors from './helpers/colors';
export { default as theme } from './theme';
export { default as GlobalStyle } from './theme/globalStyles';

// styled-components
export { ThemeProvider, createGlobalStyle } from 'styled-components';
