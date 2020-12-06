import './theme/normalize.css';

// Components
export { Button } from './core/Button';
export { ButtonProps } from './core/Button/types';
export { Text } from './core/Text';
export { TextProps } from './core/Text/types';
export { TextField } from './core/TextField';
export { TextFieldProps } from './core/TextField/types';
export { Box } from './core/Box';
export { BoxProps } from './core/Box/types';
export { Badge } from './core/Badge';
export { BadgeProps } from './core/Badge/types';

// Theme
export { ITheme, IPalette } from './theme/types';
export * as betterColors from './helpers/colors';
export { default as theme } from './theme';

// Custom Hooks
export { default as useTextFieldDebounce } from './hooks/useTextFieldDebounce';

// styled-components
export { ThemeProvider, createGlobalStyle } from 'styled-components';
