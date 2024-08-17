import SideNavLink from "./SideNavLink";
import { LayoutDashboard, Wallet, HandCoins } from "lucide-react";

const SideBar = () => {
  return (
    <div className="max-w-[250px] min-w-[250px] h-full px-5 py-10 bg-white border-r hidden lg:block">
      <div className="w-full flex flex-col gap-8">
        <SideNavLink
          title="Dashboard"
          icon={<LayoutDashboard />}
          link="/dashboard"
        />
        <SideNavLink
          title="Expenses"
          icon={<HandCoins />}
          link="/dashboard/expenses"
        />
        <SideNavLink
          title="Over Budget"
          icon={<Wallet />}
          link="/dashboard/over-budget"
        />
      </div>
    </div>
  );
};

export default SideBar;
