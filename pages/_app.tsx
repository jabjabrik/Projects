import type { AppProps } from 'next/app';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import Layout from '../layout';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#eaeaea',
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const [active, setActive] = useState<string>('none');
    const [isDark, setIsDark] = useState<boolean>(true);

    return (
        <ThemeProvider theme={theme}>
            <Layout active={active} isDark={isDark} setIsDark={setIsDark}>
                <Component {...pageProps} setActive={setActive} isDark={isDark} />
            </Layout>
        </ThemeProvider>
    );
}
