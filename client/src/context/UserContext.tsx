"use client";

// import STORAGE from "@/configuration/storage";
import React, { useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { useCloudStorage } from "@telegram-apps/sdk-react";

export enum AUTH_STATUS {
  UNKNOWN = "UNKNOWN",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

const STORAGE_USER_LABEL = "user";

type User = {
  public_key: string;
};

type State = {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  disconnect: () => void;
  authStatus: AUTH_STATUS;
  setAuthStatus: (status: AUTH_STATUS) => void;
  storeUser: (account: string) => void;
};

const UserContext = React.createContext<State | undefined>(undefined);

const UserProvider = ({ children }: PropsWithChildren) => {
  const storage = useCloudStorage();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authStatus, setAuthStatus] = useState<AUTH_STATUS>(
    AUTH_STATUS.UNKNOWN
  );

  const loadUser = async () => {
    setLoading(true);
    try {
      if (!storage) return;
      const storedUser = await storage.get(STORAGE_USER_LABEL);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setAuthStatus(AUTH_STATUS.SUCCESS);
      }
    } catch (error) {
      console.error("Error loading user:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const storeUser = (account: string) => {
    storage.set(
      STORAGE_USER_LABEL,
      JSON.stringify({
        public_key: account,
      })
    );
  };

  const disconnect = () => {
    setUser(null);
    storage.delete(STORAGE_USER_LABEL);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        disconnect,
        authStatus,
        setAuthStatus,
        storeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser do not have context");
  }
  return context;
};

export { UserProvider, useUser };
