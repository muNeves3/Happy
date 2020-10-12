import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        landing: string;

        colors: {
            primary: string;
            secondary: string;

            background: string;
            text: string;
        }
    }
}