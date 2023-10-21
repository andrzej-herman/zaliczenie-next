import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Play, Coins, BadgeCheck, BadgeMinus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { url } from "@/url";

const subjects = [
  {
    name: "iPhone 12 Pro",
    category: "elektronika",
    price: "4600 PLN",
    isBold: true,
  },
  {
    name: "Konsola Playstation 5",
    category: "elektronika",
    price: "2899 PLN",
    isBold: false,
  },
  {
    name: "Bluza Adidas Męska Szara",
    category: "odzież",
    price: "249 PLN",
    isBold: true,
  },
  {
    name: "Spodnie Wrangler Arizona",
    category: "odzież",
    price: "189 PLN",
    isBold: false,
  },
  {
    name: "Basen ogrodowy Premium",
    category: "dom i ogród",
    price: "1199 PLN",
    isBold: false,
  },
  {
    name: "Krzesło skandynawskie granatowe",
    category: "dom i ogród",
    price: "88 PLN",
    isBold: false,
  },
];

const AuctionPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <Coins className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Portal aukcyjny
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            (Temat nr 4)
          </h6>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Symulator aplikacji
          </h3>
          <Separator />
          <div className="py-6">
            <p className="text-lg text-justify tracking-tight">
              Symulator pokazuje dokładnie jak powinna wyglądać i działać
              aplikacja konsoli. Po otwarciu symulatora zobaczycie Państwo
              consolę oraz przycisk S
              <span className="italic">Rozpocznij symulację programu</span>.
              Odpowiednie opcje proszę wprowadzać w wyznaczone pole, które
              będzie się pojawiać w odpowiednim czasie.
            </p>
          </div>
          <Link href={`${url}auction`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Portal aukcyjny
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Funkcjonalność
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight pt-4">
            Aplikacja daje możliwość zakupu i sprzedaży przedmiotu na portalu
            aukcyjnym. Po wybraniu opcji zakupu wyświetlamy listę dostępnych
            przedmiotów. Lista musi zawierać numer przedmiotu, nazwę, kategorię
            oraz cenę. Najpierw wyświetlamy przedmioty wyróżnione, a następnie w
            kolejności alfabetycznej. Użytkownik podaje Id przedmiotu który chce
            zakupić. Następnie podaje numer karty kredytowej. Po sprawdzeniu
            poprawności karty następuje proces zakupu. Wówczas wyświetlamy
            informacje dotyczące zakupu np:{" "}
            <span className="font-bold">{`"Kupiłeś przedmiot Konsola
            Playstation 5, cena 2899 PLN, płatność: karta (Mastercard, 0002).
            Zakup opłacony."`}</span>{" "}
            Natomiast po wybraniu opcji sprzedaży, wprowadzamy odpowiednio nazwę
            przedmiotu który chcemy sprzedać, numer kategorii, jego cenę i
            zaznaczamy czy ma być wyróżniony na liście. Po wprowadzeniu
            poprawnych danych dodajemy przedmiot do listy ofert i ponownie
            wyświetlamy listę przedmiotów.
          </p>
          <Alert className="mt-6 mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>UWAGA!</AlertTitle>
            <AlertDescription className="tracking-tight">
              Przy zakupie sprawdzamy czy istnieje podany numer karty oraz czy
              na karcie jest wystarczający limit do zakupu wybranego przedmiotu.
              Jeżeli nie wyświetlamy komunikat, o nieprawidłowym numerze karty
              lub że, transakcja nie może zostać zrealiozwana z powodu
              niewystarczających środków.
              <br />
              <br />
              Przedmioty wyróżnione wyświetlamy kolorem żółtym. Pozostałe
              kolorem białym.
            </AlertDescription>
          </Alert>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Zmienna typu decimal
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            W języku C# podając wartość liczbową z kropką np: 4.15, kompilator
            potraktuje ją jako zmienną typu double. Aby uzyskać wartość typu
            decimal musimy dostawić do wartości literkę m. Przykład:
          </p>
          <Card className="p-5">
            <code>var a = 4.15; // a jest wartością typu double</code>
            <br />
            <code>var b = 4.15m; // b jest wartością typu decimal</code>
            <br />
            <code>decimal c = 7m; // c jest wartością typu decimal</code>
          </Card>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Potrzebne dane
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            Na początku ładujemy do pamięci listę wszystkich sześciu aktualnie
            wystawionych ofert oraz listę czterech kart kredytowych.
          </p>
          <Table>
            <TableCaption>Lista przedmiotów aktualnie na aukcji</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Nazwa</TableHead>
                <TableHead>Kategoria</TableHead>
                <TableHead>Czy wyróżniony</TableHead>
                <TableHead className="text-right">Cena</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((s) => (
                <TableRow key={s.name}>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>{s.category}</TableCell>
                  <TableCell>
                    {s.isBold ? <BadgeCheck /> : <BadgeMinus />}
                  </TableCell>
                  <TableCell className="text-right">{s.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="pt-8">
            <Table>
              <TableCaption>Lista kart kredytowych</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Nazwa</TableHead>
                  <TableHead>Kategoria</TableHead>
                  <TableHead>Czy wyróżniony</TableHead>
                  <TableHead className="text-right">Cena</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjects.map((s) => (
                  <TableRow key={s.name}>
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell>{s.category}</TableCell>
                    <TableCell>
                      {s.isBold ? <BadgeCheck /> : <BadgeMinus />}
                    </TableCell>
                    <TableCell className="text-right">{s.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuctionPage;
