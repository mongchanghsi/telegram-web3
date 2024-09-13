import { normalize } from "viem/ens";
import { publicClient } from "./viem";

export const getEnsName = async (address: `0x${string}`) =>
  await publicClient.getEnsName({
    address,
  });

export const getEnsAvatar = async (ensName: string) =>
  await publicClient.getEnsAvatar({
    name: normalize(ensName),
  });
