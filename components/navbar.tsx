"use-client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-siderbar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
})
const NavBar = () => {

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b boarder-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="w-4 h-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>);
}

export default NavBar;