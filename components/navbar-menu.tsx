"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Bank",
    href: "/bank",
    description:
      "Aplikacja daje możliwość wyświetlenia listy wszystkich Klientów wirtualnego banku. Następnie symuluje logowanie do serwisu bankowego. Po poprawnym zalogowaniu Klient może wykonać przelew ze swojego rachunku na rachunek innego Klienta",
  },
  {
    title: "Biuro podróży",
    href: "/travel",
    description:
      "Prezentujemy trzy promocyjne (losowo wybrane) oferty wakacyjne. Oferty budujemy na podstawie dostępnych hoteli. Długość pobytu dla ofert to odpowiednio: 7, 10 i 14 dni. Każda z trzech ofert musi obejmować inny kraj oraz inną kategorię hotelu",
  },
  {
    title: "Kasa sklepowa",
    href: "/cashdesk",
    description:
      "Aplikacja daje możliwość wyświetlenia listy wszystkich produktów wirtualnego sklepu. Umożliwia także opcję 'Zakupy'. Po wejściu w 'Zakupy' symuluje skanowanie kodów kreskowych produktów przez kasjera. Oczywiście kod jest podawany z klawiatury",
  },
  {
    title: "Portal aukcyjny",
    href: "/auction",
    description:
      "Aplikacja daje możliwość zakupu i sprzedaży przedmiotu na portalu aukcyjnym. Po wybraniu opcji zakupu wyświetlamy listę dostępnych przedmiotów. Lista musi zawierać numer przedmiotu, nazwę, kategorię oraz cenę",
  },
  {
    title: "Taxi",
    href: "/taxi",
    description:
      "Aplikacja daje możliwość wyświetlenia listy wszystkich dzielnic miasta oraz wszystkich taksówek w mieście. Lista dzielnic musi zawierać numer dzielnicy, jej nazwę oraz aktualną ilość znajdujących się w niej taksówek",
  },
  {
    title: "Wypożyczalnia",
    href: "/rental",
    description:
      "Aplikacja daje możliwość wyświetlenia listy wszystkich klientów wypożyczalni oraz listy wszystkich samochodów. Lista klientów musi zawierać: Id klienta, jego imię i nazwisko oraz datę uzyskania prawa jazdy. Jeżeli klient wypożyczalni",
  },
  {
    title: "Zakład pracy",
    href: "/salary",
    description:
      "Aplikacja daje możliwość wyświetlenia listy wszystkich pracowników zakładu. Lista musi zawierać: Id pracownika, jego imię i nazwisko, datę urodzenia oraz stanowisko. W zakładzie pracują urzędnicy oraz pracownicy fizyczni",
  },
  {
    title: "Sekretna liczba",
    href: "/guessnumber",
    description:
      "Aplikacja, to prosta gra polegająca na odgadnięciu sekretnej liczby. Gracz wybiera poziom trudności gry, a następnie próbuje odgadnąć liczbę losowo wygenerowaną przez komputer. W każdym poziomie trudności jest określona liczba prób",
  },
];

export function NavbarMenu() {
  return (
    <NavigationMenu className="ml-8 hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem className="bg-background dark:bg-[#1F1F1F]">
          <Link href="/#banner" legacyBehavior passHref scroll>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Strona główna
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#aplikacja" legacyBehavior passHref scroll>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Stworzenie aplikacji
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#kolokwium" legacyBehavior passHref scroll>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kolokwium
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tematy aplikacji</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.title} href={component.href}>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
