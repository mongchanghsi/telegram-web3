"use client";

import Meta from "@/components/Shared/Meta";
import { LayoutContainer, LayoutContent } from "./style";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/UserContext";
import Navigation from "../Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const navigationRef = useRef<HTMLDivElement>(null);
  const [navigationOffset, setNavigationOffset] = useState<number>(0);

  useEffect(() => {
    setNavigationOffset(navigationRef.current?.clientHeight ?? 0);
  }, [navigationRef.current]);

  return (
    <>
      <Meta />
      {user && <Navigation ref={navigationRef} />}
      <LayoutContainer>
        <LayoutContent offset={navigationOffset}>{children}</LayoutContent>
      </LayoutContainer>
    </>
  );
};

export default Layout;
