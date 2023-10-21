"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

export const TopicsLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useConvexAuth();
  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full dark:bg-[#1F1F1F] flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="pt-40 pb-20 dark:bg-[#1F1F1F]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default TopicsLayout;
