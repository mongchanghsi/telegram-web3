"use client";

import Theme from "@/components/Shared/Theme/Theme";
import type { AppProps } from "next/app";

import BaseFont from "@/styles/fonts";
import Layout from "@/components/Shared/Layout";
import { ThemeUpdaterProvider } from "@/context/useThemeUpdater";
import { Toaster } from "react-hot-toast";

import React from "react";
import TelegramProvider from "@/context/TelegramProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        #root {
          width: 100%;
          height: 100%;
          overflow: hidden;
          overscroll-behavior: none;
        }

        #root {
          /* Preserve scrolling behavior */
          overflow-y: auto;
        }

        html {
          font-family: ${BaseFont.style.fontFamily};
        }

        body {
          margin: 0;
        }

        input,
        textarea {
          font-family: ${BaseFont.style.fontFamily};
        }
      `}</style>
      <Toaster position="top-center" reverseOrder={false} />
      <ThemeUpdaterProvider>
        <Theme>
          <TelegramProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TelegramProvider>
        </Theme>
      </ThemeUpdaterProvider>
    </>
  );
}
