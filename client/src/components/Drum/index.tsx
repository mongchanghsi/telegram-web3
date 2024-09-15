import { useState } from "react";
import { DrumContainer } from "./style";
import { getWalletClient } from "@/utils/web3/viem";
import toast from "react-hot-toast";
import Button from "../Shared/Button";
import drumContract from "@/utils/web3/drum";
import { shortenAddress } from "@/utils/address";
import { useSDK } from "@metamask/sdk-react";

const Drum = () => {
  const { provider } = useSDK();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDrum = async () => {
    if (!provider) return;
    setLoading(true);
    try {
      const hash = await drumContract.drum(provider);
      if (hash) {
        toast.success(`Drummed! - ${shortenAddress(hash)}`);
      } else {
        toast.error(`Failed to drum`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to drum");
    }

    setLoading(false);
  };

  return (
    <DrumContainer>
      {loading ? (
        <Button label={"Drumming"} />
      ) : (
        <Button label={"Drum"} onClick={handleDrum} />
      )}
    </DrumContainer>
  );
};

export default Drum;
