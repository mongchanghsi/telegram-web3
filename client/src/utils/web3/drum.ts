import { getWalletClient, publicClient } from "./viem";
import CONTRACT_ADDRESSES from "@/contracts/address.json";
import DrumAbi from "@/contracts/Drum.json";
import { SDKProvider } from "@metamask/sdk-react";

class Drum {
  private async getDrumContractDetails(): Promise<{
    address: `0x${string}`;
    abi: any;
  }> {
    const client = getWalletClient();
    const chainId = await client.getChainId();
    return {
      address: (CONTRACT_ADDRESSES as any)[chainId.toString()][
        "Drum"
      ] as `0x${string}`,
      abi: DrumAbi.abi,
    };
  }

  async drum(provider: SDKProvider) {
    try {
      const client = publicClient;
      const walletClient = getWalletClient(provider);
      const [account] = await walletClient.getAddresses();
      const contractDetails = await this.getDrumContractDetails();

      const { request } = await client.simulateContract({
        ...contractDetails,
        functionName: "drum",
        args: [],
        account,
      });

      const hash = await walletClient.writeContract(request);
      const transaction = await client.waitForTransactionReceipt({ hash });
      return transaction.transactionHash;
    } catch (error) {
      console.log("Drum | Error - ", error);
      return false;
    }
  }
}

const drumContract = new Drum();

export default drumContract;
