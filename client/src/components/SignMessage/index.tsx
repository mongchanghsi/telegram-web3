import { useUser } from "@/context/UserContext";
import { getWalletClient } from "@/utils/web3/viem";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../Shared/Button";
import { SignMessageContainer, SignMessageText } from "./style";
import { shortenAddress } from "@/utils/address";

const SignMessage = () => {
  const { user } = useUser();
  const [signing, setSigning] = useState<boolean>(false);
  const [signature, setSignature] = useState<string>("");

  const handleSignMessage = async () => {
    setSigning(true);
    try {
      const walletClient = getWalletClient();
      const _signature = await walletClient.signMessage({
        account: user?.public_key as `0x${string}`,
        message: "Hello World",
      });
      setSignature(_signature);
      toast.success("Signed!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to sign");
    }

    setSigning(false);
  };

  return (
    <SignMessageContainer>
      {signing ? (
        <Button label={"Signing"} />
      ) : (
        <Button label={"Sign Message"} onClick={handleSignMessage} />
      )}
      {signature && (
        <SignMessageText>
          Signature: {shortenAddress(signature)}
        </SignMessageText>
      )}
    </SignMessageContainer>
  );
};

export default SignMessage;
