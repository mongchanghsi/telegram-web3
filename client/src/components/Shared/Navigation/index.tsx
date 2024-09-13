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
import Image from "next/image";
import Web3Icon from "@/assets/icons/web3.svg";
import ExitIcon from "@/assets/icons/exit.svg";

const Navigation = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
  const router = useRouter();
  const { user, disconnect } = useUser();

  const handleDisconnect = () => {
    disconnect();
    router.push(NAVIGATION.HOME);
  };

  return (
    <NavigationContainer ref={ref}>
      <NavigationLogo>
        <Image src={Web3Icon} alt="Web3 Icon" fill />
      </NavigationLogo>
      {user && (
        <NavigationWallet>
          <NavigationAddress>
            {shortenAddress(user.public_key)}
          </NavigationAddress>
          <NavigationDisconnect onClick={handleDisconnect}>
            <Image src={ExitIcon} alt="Exit Icon" fill />
          </NavigationDisconnect>
        </NavigationWallet>
      )}
    </NavigationContainer>
  );
});

export default Navigation;
