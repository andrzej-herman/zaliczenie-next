import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full dark:bg-[#1F1F1F] flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="pt-40 pb-20 dark:bg-[#1F1F1F]">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
