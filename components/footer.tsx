import { Facebook, Github } from "lucide-react";
import LogoFooter from "./logo-footer";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral-50 dark:bg-[#1b1b1b] pt-10 pb-6">
      <div className="container mx-auto block md:flex md:justify-between ">
        <div className="md:max-w-[45%]">
          <div className="flex items-center justify-center mb-6 md:block">
            <LogoFooter size="lg" />
          </div>

          <p className="text-center md:text-left pt-4 text-sm text-muted-foreground tracking-tight">
            Aplikacja dla studentów mgr inż. Andrzeja Hermana przedmiotu
            Podstawy programowania I roku Informatyki Społecznej Akademii Nauk w
            Łodzi
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right md:text-base text-muted-foreground">
          Stack technologiczny:
          <ul>
            <li className="list-none list-inside pt-3 text-sm tracking-tight">
              Next.js
            </li>
            <li className="list-none list-inside text-sm tracking-tight">
              React
            </li>
            <li className="list-none list-inside text-sm tracking-tight">
              Typescript
            </li>
            <li className="list-none list-inside text-sm tracking-tight">
              Database: convex.dev
            </li>
            <li className="list-none list-inside text-sm tracking-tight">
              Authentication: clerk.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto pt-8  text-sm">
        <Separator />
        <div className="hidden md:flex justify-between items-center text-xs text-center text-muted-foreground mt-4">
          <div>Andrzej Herman &copy; Społeczna Akademia Nauk w Łodzi</div>
          <div className="flex flex-end items-center gap-4">
            <Link href="https://github.com/andrzej-herman" target="_blank">
              {" "}
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.facebook.com/andrzejherman" target="_blank">
              {" "}
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="md:hidden text-xs text-center text-muted-foreground mt-4">
          <div className="flex justify-center items-center  gap-4">
            <Link href="https://github.com/andrzej-herman" target="_blank">
              {" "}
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.facebook.com/andrzejherman" target="_blank">
              {" "}
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-4">
            Andrzej Herman &copy; Społeczna Akademia Nauk w Łodzi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
