import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Car, Info, Play } from "lucide-react";
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

const customers = [
  {
    id: "1",
    name: "Jan Nowak",
    licence: "04.03.2021 r.",
  },
  {
    id: "2",
    name: "Agnieszka Kowalska",
    licence: "15.01.1999 r.",
  },
  {
    id: "3",
    name: "Robert Lewandowski",
    licence: "18.12.2010 r.",
  },
  {
    id: "4",
    name: "Zofia Plucińska",
    licence: "29.04.2020 r.",
  },
  {
    id: "5",
    name: "Grzegorz Braun",
    licence: "12.07.2015 r.",
  },
];

const cars = [
  {
    id: "1",
    name: "Škoda Citigo",
    segment: "mini",
    fuelType: "benzyna",
    status: "dostępny",
    price: "70 PLN",
  },
  {
    id: "2",
    name: "Toyota Aygo",
    segment: "mini",
    fuelType: "benzyna",
    status: "dostępny",
    price: "90 PLN",
  },
  {
    id: "3",
    name: "Fiat 500",
    segment: "mini",
    fuelType: "elektryczny",
    status: "dostępny",
    price: "110 PLN",
  },
  {
    id: "4",
    name: "Ford Focus",
    segment: "kompakt",
    fuelType: "diesel",
    status: "dostępny",
    price: "160 PLN",
  },
  {
    id: "5",
    name: "Kia Ceed",
    segment: "kompakt",
    fuelType: "benzyna",
    status: "dostępny",
    price: "150 PLN",
  },
  {
    id: "6",
    name: "Volkswagen Golf",
    segment: "kompakt",
    fuelType: "benzyna",
    status: "dostępny",
    price: "160 PLN",
  },
  {
    id: "7",
    name: "Hyundai Kona Electric",
    segment: "kompakt",
    fuelType: "elektryczny",
    status: "dostępny",
    price: "180 PLN",
  },
  {
    id: "8",
    name: "Audi A6 Allroad",
    segment: "premium",
    fuelType: "diesel",
    status: "dostępny",
    price: "290 PLN",
  },
  {
    id: "9",
    name: "Mercedes E270 AMG",
    segment: "premium",
    fuelType: "benzyna",
    status: "dostępny",
    price: "320 PLN",
  },
  {
    id: "10",
    name: "Tesla Model S",
    segment: "premium",
    fuelType: "elektryczny",
    status: "dostępny",
    price: "350 PLN",
  },
];

const RentalPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <Car className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Wypożyczalnia samochodów
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Temat
            nr 6)
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
          <Link href={`${url}rental`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Wypożyczalnia samochodów
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
            Aplikacja daje możliwość wyświetlenia listy wszystkich klientów
            wypożyczalni oraz listy wszystkich samochodów. Lista klientów musi
            zawierać: Id klienta, jego imię i nazwisko oraz datę uzyskania prawa
            jazdy. Lista samochodów musi zawierać Id samochodu, markę wraz z
            modelem, segment, rodzaj paliwa, cenę wypożyczenia za dobę oraz
            status. Ponadto aplikacja daje możliwość wypożyczenia samochodu
            przez Klienta. Wybieramy Klienta, którego obsługujemy. Następnie
            wprowadzamy preferencje Klienta, tzn: segment samochodu jaki chce
            wypożyczyć, rodzaj paliwa pojazdu oraz oczywiście okres (ilość dni)
            na jaki pragnie wypożyczyć samochód. Jeżeli w aktualnie w ofercie
            posiadamy samochód spełniający kryteria Klienta, następuje proces
            wypożyczenia i wyświetlamy wszystkie dane na temat wypożyczenia:
            Data wypożyczenia, Imię i nazwisko Klienta, Data zwrotu pojazdu,
            marka i model pojazdu oraz całkowitą cenę za wypożyczenie. Jeżeli
            nie mamy aktualnie w ofercie pojazdu spełniającego kryteria,
            wyświetlamy informacje o braku odpowiedniego samochodu. Nastepnie
            ponownie dajemy możliwość zawarcia innego wypożyczenia.
          </p>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Zasady dotyczące wypożyczenia</AlertTitle>
            <AlertDescription className="tracking-tight">
              <ol className="list-decimal list-inside mt-4">
                <li>
                  Jeżeli Klient posiada prawo jazdy mniej niż 4 lata, wówczas
                  całkowita cena za wypożyczenie wzrasta o 20%.
                </li>
                <li>
                  Jeżeli Klient wypożycza samochód na okres dłuższy niż 7 dni
                  wówczas otrzymuje jedną dobę wypożyczenia gratis.
                </li>
                <li>
                  Jeżeli Klient wypożycza samochód na okres dłuższy niż 30 dni
                  wówczas otrzymuje 3 doby wypożyczenia gratis.
                </li>
                <li>
                  Jeżeli Klient posiada prawo jazdy mniej niż 4 lata, nie może
                  wypożyczyć samochodu segmentu premium.
                </li>
              </ol>
            </AlertDescription>
          </Alert>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Data oraz okres czasu
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            W języku C# do reprezentowania dat używamy typu DateTime. Aby
            ustawić konkretną wartość daty używamy składni: new DateTime(int
            rok, int numerMiesiąca, int dzień). Data dzisiejsza to:{" "}
            <span className="font-bold">DateTime.Now</span>. Aby uzyskać datę do
            wyświetlenia używamy metody ToShortDateString() Przykład:
          </p>
          <Card className="p-5">
            <code>
              var someDate = new DateTime(1954, 11, 18); // data: 18 listopada
              1954 roku
            </code>
            <br />
            <code>
              var someDayAsString = someDate.ToShortDateString(); //
              someDayAsString wynosi: {`"18.11.1954"`} lub {`"1954-11-18"`}
            </code>
            <br />
            <code>var today = new DateTime.Now; // dzisiejsza data</code>
          </Card>

          <p className="text-lg text-justify tracking-tight py-4">
            Aby uzyskać okres czasu (ilość lat) pomiędzy datami wykorzystujemy
            właściwość Year obiektu DateTime(). Po prostu odejmując rok daty
            mniejszej od roku daty większej. Przykład:
          </p>
          <Card className="p-5">
            <code>
              var someDate1 = new DateTime(2014, 11, 18); // data: 18 listopada
              1954 roku
            </code>
            <br />
            <code>
              var someDate2 = new DateTime(2019, 5, 27); // data : 27 maja 2019
              roku
            </code>
            <br />
            <code>
              int difference = someDate2.Year - someDate1.Year; // difference
              wynosi: 5 (ilość lat różnicy między someDate2 i someDate1)
            </code>
          </Card>

          <p className="text-lg text-justify tracking-tight py-4">
            Aby uzyskać datę powiększoną i ilość dni wykorzystujemy metodę
            AddDays(int ilość dni) obiektu DateTime(). Przykład:
          </p>
          <Card className="p-5">
            <code>
              var someDate1 = new DateTime(2014, 11, 18); // data : 18 listopada
              2014 roku
            </code>
            <br />
            <code>
              var someDate2 = someDate1.AddDays(7); // someDate2 to: 25
              listopada 2014 roku (someDate1 plus 7 dni)
            </code>
          </Card>
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
            Na początku ładujemy do pamięci listę wszystkich pięciu klientów
            wypożyczalni oraz listę wszystkich dziesięciu samochodów.
          </p>
          <p className="text-lg font-semibold pt-2">
            Lista klientów wypożyczalni
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead className="w-[400px]">Imię i nazwisko</TableHead>
                <TableHead>Data wydania prawa jazdy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.licence}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="pt-8">
            <p className="text-lg font-semibold">Lista samochodów</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead className="w-[400px]">Marka</TableHead>
                  <TableHead>Segment</TableHead>
                  <TableHead>Rodzaj paliwa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Cena za dobę</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.segment}</TableCell>
                    <TableCell>{c.fuelType}</TableCell>
                    <TableCell>{c.status}</TableCell>
                    <TableCell className="text-right">{c.price}</TableCell>
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

export default RentalPage;
