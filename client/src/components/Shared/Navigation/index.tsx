import { useUser } from "@/context/UserContext";
import {
  NavigationAddress,
  NavigationContainer,
  NavigationDisconnect,
  NavigationLogo,
  NavigationWallet,
} from "./style";
import { LegacyRef, forwardRef } from "react";
import { shortenAddress } from "@/utils/address";

const Navigation = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
  const { user, disconnect } = useUser();

  return (
    <NavigationContainer>
      <NavigationLogo>TWeb3</NavigationLogo>
      {user && (
        <NavigationWallet>
          <NavigationAddress>
            {shortenAddress(user.public_key ?? "")}
          </NavigationAddress>
          <NavigationDisconnect onClick={disconnect}>D</NavigationDisconnect>
        </NavigationWallet>
      )}
    </NavigationContainer>
  );
});

export default Navigation;
