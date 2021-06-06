import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import '../style/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../layout'
import { useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {
    const [active, setActive] = useState<string>('none');
    const [isDark, setIsDark] = useState<boolean>(true);

    return (
        <ThemeProvider theme={theme}>
            <Layout active={active} isDark={isDark} setIsDark={setIsDark}>
                <Component {...pageProps} setActive={setActive} isDark={isDark}/>
            </Layout>
        </ThemeProvider>
    );
};