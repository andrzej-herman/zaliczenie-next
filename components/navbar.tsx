"use client";

import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import { NavbarMenu } from "./navbar-menu";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 w-full py-3 border-b shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
        <Logo size="sm" />
        <NavbarMenu />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal" afterSignInUrl="/">
                <Button size="sm">Zaloguj się</Button>
              </SignInButton>
            </>
          )}

          {isAuthenticated && !isLoading && <UserButton afterSignOutUrl="/" />}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
