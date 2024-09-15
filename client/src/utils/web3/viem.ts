import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "viem/chains";

export const getWalletClient = () =>
  createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum!),
  });

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
