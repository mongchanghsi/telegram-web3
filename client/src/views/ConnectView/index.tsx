"use client";

import {
  useInitData,
  useLaunchParams,
  useCloudStorage,
} from "@telegram-apps/sdk-react";
import Button from "@/components/Shared/Button";
import {
  ConnectViewAvatar,
  ConnectViewContainer,
  ConnectViewDescription,
  ConnectViewTitle,
} from "./style";
import Image from "next/image";
import toast from "react-hot-toast";
import { useUser } from "@/context/UserContext";
import { shortenAddress } from "@/utils/address";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSDK } from "@metamask/sdk-react";
import NAVIGATION from "@/utils/navigation";

const ConnectView = () => {
  const router = useRouter();
  const initData = useInitData();
  const launchParams = useLaunchParams();
  const storage = useCloudStorage();
  const { sdk } = useSDK();
  const {
    user,
    setUser,
    loading,
    authStatus,
    setAuthStatus,
    disconnect,
    storeUser,
  } = useUser();
  const [connecting, setConnecting] = useState<boolean>(false);

  const handleConnect = async () => {
    if (!initData?.user?.id) return;
    if (!sdk) return;
    setConnecting(true);
    try {
      // BUG: After disconnect, and reconnecting, somehow metamask not showing up
      const accounts = await sdk.connect();
      if (Array.isArray(accounts) && accounts.length) {
        const _account = accounts[0];
        setAuthStatus("success");
        setUser({
          public_key: _account,
        });
        storeUser(_account);
        toast.success("Connected!");
      }
    } catch (error: any) {
      toast.success(error.message as string);
      toast.error("Failed to connect");
    }
    setConnecting(false);
  };

  const handleDisconnect = async () => {
    await sdk?.terminate();
    setAuthStatus("");
    disconnect();
    toast.success("Disconnected!");
  };

  useEffect(() => {
    if (user && !authStatus) {
      router.push(NAVIGATION.DASHBOARD);
    } else if (
      launchParams &&
      launchParams.startParam === "success" &&
      authStatus !== "success"
    ) {
      if (initData?.user?.id)
        fetch(`/api/auth/${initData.user.id}`).then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              storage.set("user", JSON.stringify(data));
              setAuthStatus("success");
              setUser(data);
            });
          }
        });
    } else if (launchParams && launchParams.startParam === "failure") {
      setAuthStatus("failure");
    }
  }, [launchParams, initData?.user?.id, user, router]);

  return (
    <ConnectViewContainer>
      <ConnectViewTitle>Telegram Web3</ConnectViewTitle>
      {initData && initData.user && (
        <>
          {initData.user.photoUrl && (
            <ConnectViewAvatar>
              <Image
                src={initData.user.photoUrl ?? ""}
                alt={`${initData.user.username}-avatar`}
              />
            </ConnectViewAvatar>
          )}
          <ConnectViewDescription>
            Welcome, {initData.user.firstName}
          </ConnectViewDescription>
          <ConnectViewDescription>
            @{initData.user.username} | {initData.user.id}
          </ConnectViewDescription>
        </>
      )}

      {connecting ? (
        <>
          <Button label={"Loading"} />
        </>
      ) : (
        <>
          {user ? (
            <>
              <ConnectViewDescription>
                {shortenAddress(user.public_key)}
              </ConnectViewDescription>
              <Button label={"Disconnect"} onClick={handleDisconnect} />
            </>
          ) : (
            <>
              {sdk && sdk.isInitialized() && (
                <>
                  <ConnectViewDescription>
                    Click connect to get started
                  </ConnectViewDescription>
                  <Button
                    label={"Connect to Metamask"}
                    onClick={handleConnect}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </ConnectViewContainer>
  );
};

export default ConnectView;
