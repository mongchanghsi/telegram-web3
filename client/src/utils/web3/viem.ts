import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "viem/chains";

export const getWalletClient = (provider: any) =>
  createWalletClient({
    chain: mainnet,
    transport: custom(provider),
  });

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
