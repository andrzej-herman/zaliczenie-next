import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podstawy programowania",
  description: "Informacje dla studentów Podstaw programowania",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notatkihermana-theme"
          >
            <Toaster position="bottom-center" />
            <div className="h-full dark:bg-[#1F1F1F] flex flex-col">
              <div className="flex-1">
                <Navbar />
                <main className="pt-40 pb-20 dark:bg-[#1F1F1F]">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
