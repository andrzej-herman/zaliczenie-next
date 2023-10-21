import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Play, ShoppingBasket } from "lucide-react";
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

const products = [
  {
    barcode: "001",
    name: "Masło extra",
    price: "6.50 PLN",
  },
  {
    barcode: "002",
    name: "Chleb wiejski",
    price: "4.50 PLN",
  },
  {
    barcode: "003",
    name: "Makaron Babuni",
    price: "9.20 PLN",
  },
  {
    barcode: "004",
    name: "Dżem truskawkowy",
    price: "8.10 PLN",
  },
  {
    barcode: "005",
    name: "Kiełbasa myśliwska",
    price: "29.00 PLN",
  },
  {
    barcode: "006",
    name: "Szynka konserwowa",
    price: "22.00 PLN",
  },
  {
    barcode: "007",
    name: "Chipsy paprykowe",
    price: "6.00 PLN",
  },
  {
    barcode: "008",
    name: "Serek wiejski",
    price: "3.50 PLN",
  },
  {
    barcode: "009",
    name: "Sól kuchenna",
    price: "2.70 PLN",
  },
  {
    barcode: "010",
    name: "Cukier kryształ",
    price: "3.20 PLN",
  },
];

const CashDeskPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <ShoppingBasket className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Kasa sklepowa
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            (Temat nr 3)
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
              consolę oraz przycisk{" "}
              <span className="italic">Rozpocznij symulację programu</span>.
              Odpowiednie opcje proszę wprowadzać w wyznaczone pole, które
              będzie się pojawiać w odpowiednim czasie.
            </p>
          </div>
          <Link href={`${url}cashdesk`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Kasa sklepowa
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
            Aplikacja daje możliwość wyświetlenia listy wszystkich produktów
            wirtualnego sklepu. Umożliwia także opcję{" "}
            <span className="font-bold">Zakupy</span>. Po wejściu w Zakupy
            symuluje skanowanie kodów kreskowych produktów przez kasjera.
            Oczywiście kod jest podawany z klawiatury. Aplikacja oczekuje na
            wprowadzenie kodu kreskowego. Po podaniu kodu i naciśnięciu ENTER
            program wyświetla na ekranie nazwę zeskanowanego produktu oraz
            aktualną wartość brutto (z podatkiem VAT) wszystkich zakupów.
            Aplikacja umożliwa skanowanie kodów do czasu, aż użytkownik naciśnie
            klawisz P. Oznacza to koniec produktów w koszyku i powoduje
            wyświetlenie na ekranie paragonu za zakupy.
          </p>
          <p className="text-lg text-justify tracking-tight pt-4">
            Paragon musi zawierać aktualną datę zakupów, listę wszystkich
            zakupionych produktów wraz z ceną jednostkową brutto (jeżeli jest
            kilka takich samych produktów to wyświetlamy je tyle razy ile ich
            jest), łączną kwotę do zapłaty (brutto) oraz łączny podatek VAT.
            Przyjmujemy założenie, że podatek VAT na wszystkie produkty to 23 %
            ich ceny netto.
          </p>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>UWAGA!</AlertTitle>
            <AlertDescription className="tracking-tight">
              Po wprowadzeniu kodu produktu musimy ustalić jego nazwę i cenę na
              podstawie podanego kodu kreskowego. Jeżeli użytkownik poda błędny
              kod - czyli program nie jest w stanie ustalić produktu - wówczas
              wyświetlamy komunikat o treści{" "}
              <span className="italic font-semibold">
                NIEPRAWIDŁOWY KOD KRESKOWY
              </span>{" "}
              i oczekujemy dalej na wprowadzenie prawidłowego kodu.
            </AlertDescription>
          </Alert>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Zmienna typu decimal oraz zaokrąglanie liczb
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
          <p className="text-lg text-justify tracking-tight py-4">
            Aby zaokrąglić liczbę do żądanej ilości miejsc po przecinku
            wykorzystujemy wbudowaną funkcję{" "}
            <span className="font-bold">
              Round(decimal liczba, int iloscMiejscPoPrzecinku)
            </span>{" "}
            z dostępnej w C# klasy Math. Przykład:
          </p>
          <Card className="p-5">
            <code>var a = 4.1579m;</code>
            <br />
            <code>var b = Math.Round(a, 2); // wartość b wynosi 4.16</code>
            <br />
            <code>var c = Math.Round(a, 3); // wartość c wynosi 4.158</code>
          </Card>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Potrzebne dane
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            Na początku ładujemy do pamięci listę wszystkich dziesięciu
            produktów dostępnych w sklepie:
          </p>
          <Table>
            <TableCaption>Lista produktów w sklepie</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Kod kreskowy</TableHead>
                <TableHead>Nazwa produktu</TableHead>
                <TableHead className="text-right">Cena netto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p) => (
                <TableRow key={p.barcode}>
                  <TableCell className="font-medium">{p.barcode}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell className="text-right">{p.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default CashDeskPage;
