/* eslint-disable react/no-unescaped-entities */
import { ThemeProvider } from "styled-components";
import GlobalStyles from "utils/constants/global-styles";
import { DarkTheme, LightTheme } from "utils/constants/theme";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";
import useErrorBoundary from "use-error-boundary";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LoginActions } from "redux/actions";
import SetAuthHeader from "utils/constants/set-auth-headers";

function Main({ Component, pageProps }: any) {
  const dispatch = useDispatch();

  interface RootState {
    darkMode: any;
  }

  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const [hasMounted, setHasMounted] = useState(false);
  const theme = isDarkMode ? DarkTheme : LightTheme;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  /* 
  uncomment after real endpoint is added.
  useEffect(() => {
    RefreshToken();
  });
  */

  if (!hasMounted) {
    return null;
  }

  function RefreshToken() {
    axios
      .get("/", { withCredentials: true }) //always add { withCredentials: true } to all your api requests
      .then((response: any) => {
        dispatch(LoginActions.success(response.data.userDetails));
        SetAuthHeader(response.data.token); //also save token to headers like this when you implement Register and Login in their respective sagas if your using Redux saga.
        //Logout Implementation is inside components/button/index. Remove it and put it where your logout button will be when done.

        //silent refresh...
        setTimeout(() => {
          //refreshes the token few seconds before the token times out so we don't logout user when he's she is busy with the site
          RefreshToken();
        }, response.data.expires_in * 1000 - 500);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>The Byter</title>
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />

          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Overpass:wght@300&display=swap');
          </style>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      {didCatch ? (
        <h4>An error has been caught: {error.message}</h4>
      ) : (
        <ErrorBoundary>
          <Provider store={store}>
            <Main Component={Component} pageProps={pageProps} />
          </Provider>
        </ErrorBoundary>
      )}
    </>
  );
}

export default MyApp;
