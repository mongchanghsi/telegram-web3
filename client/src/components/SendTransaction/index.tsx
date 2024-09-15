import { useUser } from "@/context/UserContext";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../Shared/Button";
import { SendTransactionContainer, SendTransactionText } from "./style";
import { shortenAddress } from "@/utils/address";
import { useSDK } from "@metamask/sdk-react";
import { parseEther } from "viem";
import { sepolia } from "viem/chains";

const AMOUNT = "0.0001";

const SendTransaction = () => {
  const { provider } = useSDK();
  const { user } = useUser();
  const [sending, setSending] = useState<boolean>(false);

  const handleSend = async () => {
    if (!provider || !user) return;
    setSending(true);
    try {
      const response = await provider.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: user.public_key,
            to: user.public_key,
            value: 1,
            chainId: "0xaa36a7",
          },
        ],
      });
      console.log("Response", response);
      toast.success("Sent!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send");
    }

    setSending(false);
  };

  return (
    <SendTransactionContainer>
      {sending ? (
        <Button label={"Sending"} />
      ) : (
        <Button label={`Send ${AMOUNT} ETH to self`} onClick={handleSend} />
      )}
    </SendTransactionContainer>
  );
};

export default SendTransaction;
