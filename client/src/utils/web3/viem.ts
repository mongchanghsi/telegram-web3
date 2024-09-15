import { createPublicClient, createWalletClient, custom, http } from "viem";
import { sepolia } from "viem/chains";

export const getWalletClient = () =>
  createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum!),
  });

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});
