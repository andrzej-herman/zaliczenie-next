import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CarTaxiFront, Info, Play } from "lucide-react";
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
import TravelStar from "@/components/travel-star";

const districts = [
  {
    number: "1",
    name: "Retkinia",
    distance: "-2 km",
  },
  {
    number: "2",
    name: "Łódź Kaliska",
    distance: "-1 km",
  },
  {
    number: "3",
    name: "Śródmieście",
    distance: "0 km",
  },
  {
    number: "4",
    name: "Widzew",
    distance: "1 km",
  },
  {
    number: "5",
    name: "Janów",
    distance: "2 km",
  },
];

// here
const cars = [
  {
    id: "1",
    name: "Ford Mondeo",
    status: "wolny",
    district: "Retkinia",
  },
  {
    id: "2",
    name: "Dacia Logan",
    status: "wolny",
    district: "Łódź Kaliska",
  },
  {
    id: "3",
    name: "Toyota Avensis",
    status: "wolny",
    district: "Śródmieście",
  },
  {
    id: "4",
    name: "Mercedes E220",
    status: "wolny",
    district: "Widzew",
  },
  {
    id: "5",
    name: "Huindai Lantra",
    status: "wolny",
    district: "Janów",
  },
];

const TaxiPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <CarTaxiFront className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Taxi
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Temat
            nr 5)
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
          <Link href={`${url}taxi`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Taxi
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
            Aplikacja daje możliwość wyświetlenia listy wszystkich dzielnic
            miasta oraz wszystkich taksówek w mieście. Lista dzielnic musi
            zawierać numer dzielnicy, jej nazwę oraz aktualną ilość znajdujących
            się w niej taksówek. Lista taksówek musi zawierać nazwę samochodu,
            status (wolny lub zajęty) oraz nazwę dzielnicy w której się
            aktualnie znajduje. Dodatkowo aplikacja daje możliwość zamówienia
            taksówki. Po wybraniu opcji{" "}
            <span className="italic">Zamów taksówkę</span> użytkownik podaje
            numer dzielnicy do której chce zamówić taksówkę. Jeżeli numer
            dzielnicy jest prawidłowy wówczas program wyświetla informację która
            taksówka zrealizuje zlecenie oraz pokazuje przewidywany czas dojazdu
            do Klienta. Wyświetla również ponownie, już zaktualizowaną listę
            dzielnic oraz taksówek. Te nowe listy muszą uwzględniać aktualny
            stan - czyli na liście dzielnic ilość taksówek w dzielnicy musi
            uwzględniać zamówienia Klientów, a na liście taksówek aktualna
            lokalizacja taksówki musi także być zaktualizowana. Dodatkowo lista
            taksówek musi zostać uzupełniona o czas dojazdu do ostatniego
            zlecenia. Następnie aplikacja daje ponownie możliwość zamówienia
            taksówki.{" "}
            <span className="font-bold">
              Przyjmujemy założenie, że dzielnica taksówki która realizuje
              zlecenie od razu zmienia się na dzielnicę do której wezwał ją
              Klient oraz że status taksówki która realizuje zlecenie od tej
              pory cały czas jest ustawiony na status zajęty.
            </span>
          </p>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>UWAGA!!!</AlertTitle>
            <AlertDescription className="tracking-tight">
              Po wybraniu przez Użytkownika dzielnicy do której chce wezwać
              taksówkę, wyliczamy czas dojazdu do żądanej dzielnicy dla
              wszystkich taksówek, a nastepnie wybiaramy tę najbardziej
              optymalną i ją wysyłamy do Klienta (to znaczy wybieramy taksówkę z
              najkrótszym czasem dojazdu). Jeżeli kilka taksówek ma identyczny
              czas dojazdu, wybieramy dowolną z nich - nawet jeżeli jest
              aktualnie zajęta.
            </AlertDescription>
          </Alert>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Zasady wyliczania czasu dojazdu taksówki:</AlertTitle>
            <AlertDescription className="tracking-tight">
              <ol className="list-decimal list-inside mt-4">
                <li>
                  Gdy taksówka jest wolna: dojazd do Klienta w tej samej
                  strefie: 4 min., dojazd do Klienta z innej strefy: Trasa x 5
                  min.
                </li>
                <li>Gdy taksówka jest zajęta: doliczamy dodatkowo 12 min.</li>
                <li>
                  Obliczanie trasy:{" "}
                  <span className="font-bold">
                    wartość bezwględna z różnicy: odległość od centum dzielnicy
                    wezwania - odległość od centum dzielnicy w której aktualnie
                    znajduje się taksówka.
                  </span>
                </li>
              </ol>
            </AlertDescription>
          </Alert>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Uzyskanie wartości bezwzględnej liczby
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            Aby uzyskać wartosć bezwzględną liczby, wykorzystujemy wbudowaną
            funkcję Abs() z dostępnej w C# klasy Math. Przykład:
          </p>
          <Card className="p-5">
            <code>int a = -15;</code>
            <br />
            <code>int b = 8;</code>
            <br />
            <code>int absolute_a = Math.Abs(a); // zwróci wartość 15</code>
            <br />
            <code>int absolute_b = Math.Abs(b); // zwróci wartość 8</code>
          </Card>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Potrzebne dane
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            Na początku ładujemy do pamięci listę wszystkich pięciu dzielnic
            oraz listę wszystkich pięciu taksówek.
          </p>
          <p className="text-lg font-semibold pt-2">Lista dzielnic</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Numer</TableHead>
                <TableHead className="w-[200px]">Nazwa</TableHead>
                <TableHead className="text-right">
                  Odległość od centrum
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {districts.map((d) => (
                <TableRow key={d.number}>
                  <TableCell className="font-medium">{d.number}</TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell className="text-right">{d.distance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="pt-8">
            <p className="text-lg font-semibold">Lista taksówek</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead className="w-[400px]">Samochód</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aktualna dzielnica</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.status}</TableCell>
                    <TableCell>{c.district}</TableCell>
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

export default TaxiPage;
