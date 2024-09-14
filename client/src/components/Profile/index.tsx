"use client";

import { useUser } from "@/context/UserContext";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileDummyAvatar,
  ProfileItem,
} from "./style";
import { useInitData } from "@telegram-apps/sdk-react";
import { shortenAddress } from "@/utils/address";
import { useEffect, useState } from "react";
import { publicClient } from "@/utils/web3/viem";
import { formatEther } from "viem";
import { getEnsAvatar, getEnsName } from "@/utils/web3/ens";
import Image from "next/image";

const Profile = () => {
  const initData = useInitData();
  const { user } = useUser();
  const [balance, setBalance] = useState<string>("0");
  const [ensName, setEnsName] = useState<string>("");
  const [ensAvatar, setEnsAvatar] = useState<string>("");

  const getBalance = async () => {
    if (!user || !user.public_key) return;

    try {
      const _balance = await publicClient.getBalance({
        address: user.public_key as `0x${string}`,
      });
      setBalance((+formatEther(_balance)).toFixed(4));
    } catch (error) {}
  };

  const fetchEnsData = async () => {
    if (!user || !user.public_key) return;

    try {
      const _ensName = (await getEnsName(
        user.public_key as `0x${string}`
      )) as string;
      setEnsName(_ensName);
      const _ensAvatar = (await getEnsAvatar(_ensName)) as string;
      setEnsAvatar(_ensAvatar);
    } catch (error) {}
  };

  useEffect(() => {
    if (user?.public_key) {
      getBalance();
      fetchEnsData();
    }
  }, [user?.public_key]);

  return (
    <ProfileContainer>
      <ProfileAvatar>
        {ensAvatar ? (
          <Image src={ensAvatar} alt="ENS Avatar" fill />
        ) : (
          <ProfileDummyAvatar />
        )}
      </ProfileAvatar>
      <ProfileContent>
        <ProfileItem>{initData?.user?.firstName}</ProfileItem>
        <ProfileItem>
          {initData?.user?.username} | {initData?.user?.id}
        </ProfileItem>
        <ProfileItem>
          {ensName} | {shortenAddress(user?.public_key ?? "")}
        </ProfileItem>
        <ProfileItem>Balance: {balance} ETH</ProfileItem>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
