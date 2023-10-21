"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Spinner from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const TopicsLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full dark:bg-[#1F1F1F] flex flex-col">
      <div className="flex-1">
        <main className="dark:bg-[#1F1F1F]">{children}</main>
      </div>
    </div>
  );
};

export default TopicsLayout;
