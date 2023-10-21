import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Landmark, Info, Play } from "lucide-react";
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

const customers = [
  {
    id: "1",
    fullName: "Jan Nowak",
    account: "001",
    saldo: "1457.23 PLN",
  },
  {
    id: "2",
    fullName: "Agnieszka Kowalska",
    account: "002",
    saldo: "3600.18 PLN",
  },
  {
    id: "3",
    fullName: "Robert Lewandowski",
    account: "003",
    saldo: "2745.03 PLN",
  },
  {
    id: "4",
    fullName: "Zofia Plucińska",
    account: "004",
    saldo: "7344.00 PLN",
  },
  {
    id: "5",
    fullName: "Grzegorz Braun",
    account: "005",
    saldo: "455.38 PLN",
  },
];

const BankPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <Landmark className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Bank
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            (Temat nr 1)
          </h6>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Symulator aplikacji
          </h3>
          <Separator />
          <div className="py-6">
            <p>
              Symulator pokazuje dokładnie jak powinna wyglądać i działać
              aplikacja konsoli. Po otwarciu symulatora zobaczycie Państwo
              consolę oraz przycisk{" "}
              <span className="italic">Rozpocznij symulację programu</span>.
              Odpowiednie opcje proszę wprowadzać w pole po prawej stronie
              konsoli, które będzie się pojawiać w odpowiednim czasie.
            </p>
          </div>
          <Link href="https://zaliczenie.aherman.pl/bank" target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Bank
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
            Aplikacja daje możliwość wyświetlenia listy wszystkich Klientów
            wirtualnego banku. Następnie symuluje logowanie do serwisu
            bankowego. Po poprawnym zalogowaniu Klient może wykonać przelew ze
            swojego rachunku na rachunek innego Klienta banku.
          </p>
          <Alert className="mt-6 mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>UWAGA!</AlertTitle>
            <AlertDescription className="tracking-tight">
              Przelew może zostać wykonany jeżeli Klient poda prawidłowy numer
              konta na który chce wykonać przelew. Nie może podać numeru
              własnego konta. Dodatkowo, po podaniu kwoty przelewu, aplikacja ma
              sprawdzać czy Klient posiada wystarczające środki na własnym
              rachunku. Jeżeli warunki są spełnione, wykonujemy przelew. Jeżeli
              nie - wówczas wyświetlamy komunikat co poszło nie tak.
            </AlertDescription>
          </Alert>
          <p className="text-lg text-justify tracking-tight">
            Jeżeli przelew jest możliwy do wykonania odejmujemy z salda
            zleceniodawcy kwotę przelewu i dodajemy ją do salda Klienta na
            którego numer konta został on wykonany. Na końcu wyświetlamy
            komunikat, że przelew został poprawnie wykonany i koniecznie
            ponownie wyświetlamy listę Klientów banku, aby można było
            zweryfikować, czy rzeczywiście kwota została poprawnie zaksięgowana.
          </p>
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
            Na początku ładujemy do pamięci listę wszystkich Klientów banku:
          </p>
          <Table>
            <TableCaption>Lista klientów banku</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Imię i nazwisko</TableHead>
                <TableHead>Numer konta</TableHead>
                <TableHead className="text-right">Saldo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>{c.fullName}</TableCell>
                  <TableCell>{c.account}</TableCell>
                  <TableCell className="text-right">{c.saldo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default BankPage;
