import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/Layout/Layout";
import useThemeStore from "../stores/useThemeStore";
const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const theme = useThemeStore((state) => state.theme);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <meta name="application-name" content="PWA App" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="PWA App" />
                <meta name="description" content="Best PWA App in the world" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />

                <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
                <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon.ico" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://yourdomain.com" />
                <meta name="twitter:title" content="PWA App" />
                <meta name="twitter:description" content="Best PWA App in the world" />
                <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
                <meta name="twitter:creator" content="@DavidWShadow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PWA App" />
                <meta property="og:description" content="Best PWA App in the world" />
                <meta property="og:site_name" content="PWA App" />
                <meta property="og:url" content="https://yourdomain.com" />
                <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />

                <link rel="apple-touch-startup-image" href="/images/apple_splash_2048.png" sizes="2048x2732" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_1668.png" sizes="1668x2224" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_1536.png" sizes="1536x2048" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_1125.png" sizes="1125x2436" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_1242.png" sizes="1242x2208" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_750.png" sizes="750x1334" />
                <link rel="apple-touch-startup-image" href="/images/apple_splash_640.png" sizes="640x1136" />
            </Head>

            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </QueryClientProvider>
                </LocalizationProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
