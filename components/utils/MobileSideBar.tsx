import SideNavLink from "./SideNavLink";
import { LayoutDashboard, Wallet, HandCoins, Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileSideBar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="max-w-[300px]">
          <div className="w-full flex flex-col gap-8">
            <SheetClose asChild>
              <SideNavLink
                title="Dashboard"
                icon={<LayoutDashboard />}
                link="/dashboard"
              />
            </SheetClose>
            <SheetClose asChild>
              <SideNavLink
                title="Expenses"
                icon={<HandCoins />}
                link="/dashboard/expenses"
              />
            </SheetClose>
            <SheetClose asChild>
              <SideNavLink
                title="Over Budget"
                icon={<Wallet />}
                link="/dashboard/over-budget"
              />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
