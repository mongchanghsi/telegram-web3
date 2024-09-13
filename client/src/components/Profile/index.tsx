"use client";

import { useUser } from "@/context/UserContext";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileItem,
} from "./style";
import { useInitData } from "@telegram-apps/sdk-react";
import { shortenAddress } from "@/utils/address";
import { useEffect, useState } from "react";
import { publicClient } from "@/utils/web3/viem";
import { formatEther } from "viem";

const Profile = () => {
  const initData = useInitData();
  const { user } = useUser();
  const [balance, setBalance] = useState<string>("0");

  const getBalance = async () => {
    if (!user || !user.public_key) return;
    const _balance = await publicClient.getBalance({
      address: user.public_key as `0x${string}`,
    });
    setBalance((+formatEther(_balance)).toFixed(4));
  };

  useEffect(() => {
    if (user?.public_key) {
      getBalance();
    }
  }, [user?.public_key]);

  return (
    <ProfileContainer>
      <ProfileAvatar />
      <ProfileContent>
        <ProfileItem>{initData?.user?.firstName}</ProfileItem>
        <ProfileItem>
          {initData?.user?.username} | {initData?.user?.id}
        </ProfileItem>
        <ProfileItem>{shortenAddress(user?.public_key ?? "")}</ProfileItem>
        <ProfileItem>Balance: {balance} ETH</ProfileItem>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
