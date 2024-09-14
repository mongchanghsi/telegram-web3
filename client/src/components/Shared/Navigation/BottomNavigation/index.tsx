import { useRouter } from "next/router";
import { forwardRef, LegacyRef } from "react";
import {
  BottomNavigationContainer,
  BottomNavigationItem,
  BottomNavigationItemLabel,
} from "./style";

const BottomNavigation = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
  const router = useRouter();

  return (
    <BottomNavigationContainer ref={ref}>
      <BottomNavigationItem>
        <BottomNavigationItemLabel>Dashboard</BottomNavigationItemLabel>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <BottomNavigationItemLabel>Game</BottomNavigationItemLabel>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <BottomNavigationItemLabel>Leaderboard</BottomNavigationItemLabel>
      </BottomNavigationItem>
    </BottomNavigationContainer>
  );
});

export default BottomNavigation;
