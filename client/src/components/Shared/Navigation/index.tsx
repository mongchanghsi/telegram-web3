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
import { useRouter } from "next/router";
import NAVIGATION from "@/utils/navigation";

const Navigation = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
  const router = useRouter();
  const { user, disconnect } = useUser();

  const handleDisconnect = () => {
    disconnect();
    router.push(NAVIGATION.HOME);
  };

  return (
    <NavigationContainer ref={ref}>
      <NavigationLogo>TWeb3</NavigationLogo>
      {user && (
        <NavigationWallet>
          <NavigationAddress>
            {shortenAddress(user.public_key)}
          </NavigationAddress>
          <NavigationDisconnect onClick={handleDisconnect}>
            D
          </NavigationDisconnect>
        </NavigationWallet>
      )}
    </NavigationContainer>
  );
});

export default Navigation;
