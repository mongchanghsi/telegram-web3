import Profile from "@/components/Profile";
import { BaseViewContainer } from "../BaseView";
import SignMessage from "@/components/SignMessage";
import Drum from "@/components/Drum";
import SendTransaction from "@/components/SendTransaction";

const DashboardView = () => {
  return (
    <BaseViewContainer>
      <Profile />
      <SignMessage />
      <Drum />
      <SendTransaction />
    </BaseViewContainer>
  );
};

export default DashboardView;
