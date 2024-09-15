import { SDKProvider } from "@metamask/sdk";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { sepolia } from "viem/chains";

export const getWalletClient = (provider: SDKProvider | null = null) =>
  createWalletClient({
    chain: sepolia,
    transport: custom(provider || window.ethereum!),
  });

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});
