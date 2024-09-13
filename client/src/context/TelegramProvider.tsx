"use client";

import { SDKProvider } from "@telegram-apps/sdk-react";
import { isTMA } from "@telegram-apps/sdk-react";
import React, { useEffect, useState } from "react";
import RedirectView from "@/views/RedirectView";
import { UserProvider } from "./UserContext";
import { MetaMaskProvider } from "@metamask/sdk-react";
import MetaData from "@/utils/meta";

const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInTelegramWebApp, setIsInTelegramWebApp] = useState<boolean>(false);

  const checkIsTelegramApp = async () => {
    try {
      const _isTma = await isTMA();
      setIsInTelegramWebApp(!!_isTma);
    } catch (error) {
      setIsInTelegramWebApp(false);
    }
  };

  useEffect(() => {
    checkIsTelegramApp();
  }, []);

  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: MetaData.TITLE,
        },
        storage: {
          enabled: true,
        },
      }}
    >
      <SDKProvider acceptCustomStyles debug>
        {isInTelegramWebApp ? (
          <UserProvider>{children}</UserProvider>
        ) : (
          <RedirectView />
        )}
      </SDKProvider>
    </MetaMaskProvider>
  );
};

export default TelegramProvider;
