"use client";

import Meta from "@/components/Shared/Meta";
import { LayoutContainer, LayoutContent } from "./style";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/UserContext";
import Navigation from "../Navigation";
import BottomNavigation from "../Navigation/BottomNavigation";
import ENVIRONMENT from "@/configuration/environment";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (ENVIRONMENT.DEBUG_MODE) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [ENVIRONMENT.DEBUG_MODE]);

  const { user } = useUser();
  const navigationRef = useRef<HTMLDivElement>(null);
  const [navigationOffset, setNavigationOffset] = useState<number>(0);

  const bottomNavigationRef = useRef<HTMLDivElement>(null);
  const [bottomNavigationOffset, setBottomNavigationOffset] =
    useState<number>(0);

  useEffect(() => {
    setNavigationOffset(navigationRef.current?.clientHeight ?? 0);
    setBottomNavigationOffset(bottomNavigationRef.current?.clientHeight ?? 0);
  }, [navigationRef.current, bottomNavigationRef.current]);

  return (
    <>
      <Meta />
      {user && (
        <>
          <Navigation ref={navigationRef} />
          <BottomNavigation ref={bottomNavigationRef} />
        </>
      )}
      <LayoutContainer>
        <LayoutContent
          topOffset={navigationOffset}
          bottomOffset={bottomNavigationOffset}
        >
          {children}
        </LayoutContent>
      </LayoutContainer>
    </>
  );
};

export default Layout;
