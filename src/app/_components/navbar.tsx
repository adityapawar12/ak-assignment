import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
  ShoppingCart,
} from "lucide-react";
import Logout from "./logout";

function Navbar() {
  return (
    <header className="w-full">
      <div className="flex w-full flex-row items-center justify-end gap-4 p-4 pb-0">
        <p className="text-sm">Help</p>
        <p className="text-sm">Orders & Returns</p>
        <p className="text-sm">Hi, John</p>
      </div>

      <div className="flex w-full flex-row items-end justify-between p-4 pt-2">
        <h2 className="text-3xl font-semibold text-black">ECOMMERCE</h2>

        <div className="hidden flex-row items-center justify-between gap-4 text-base font-semibold text-black lg:flex lg:gap-6 xl:gap-14">
          <p>Categories</p>
          <p>Sale</p>
          <p>Clearance</p>
          <p>New stock</p>
          <p>Trending</p>
          <Logout>Logout</Logout>
        </div>

        <div className="flex flex-row items-center justify-end gap-4 lg:gap-6">
          <p className="flex">
            <Logout>
              <LogOut className="m-0 h-6 p-0" />
            </Logout>
          </p>
          <p>
            <Search />
          </p>
          <p>
            <ShoppingCart />
          </p>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-4 bg-[#F4F4F4] py-1">
        <ChevronLeft size={14} />
        <p className="text-xs font-semibold text-black">
          Get 10% off on business sign up
        </p>
        <ChevronRight size={14} />
      </div>
    </header>
  );
}

export default Navbar;
