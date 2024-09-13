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
        html {
          font-family: ${BaseFont.style.fontFamily};
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
