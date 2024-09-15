import Profile from "@/components/Profile";
import { BaseViewContainer } from "../BaseView";
import SignMessage from "@/components/SignMessage";

const DashboardView = () => {
  return (
    <BaseViewContainer>
      <Profile />
      <SignMessage />
    </BaseViewContainer>
  );
};

export default DashboardView;
