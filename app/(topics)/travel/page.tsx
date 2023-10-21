import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Plane, Play } from "lucide-react";
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

const hotels = [
  {
    name: "Cancun Bay Resort",
    country: "Meksyk",
    category: 4,
    price: "450 PLN/os",
  },
  {
    name: "Iberostar Quetzal",
    country: "Meksyk",
    category: 5,
    price: "690 PLN/os",
  },
  {
    name: "Imperial Laguna by Faranda",
    country: "Meksyk",
    category: 3,
    price: "320 PLN/os",
  },
  {
    name: "Playacalida",
    country: "Hiszpania",
    category: 5,
    price: "600 PLN/os",
  },
  {
    name: "Palia Puerto del Sol",
    country: "Hiszpania",
    category: 3,
    price: "240 PLN/os",
  },
  {
    name: "Playa Real Resort",
    country: "Hiszpania",
    category: 4,
    price: "380 PLN/os",
  },
  {
    name: "Sea Gull",
    country: "Egipt",
    category: 3,
    price: "270 PLN/os",
  },
  {
    name: "Continental Hurghada",
    country: "Egipt",
    category: 4,
    price: "360 PLN/os",
  },
  {
    name: "Sharm Grand Plaza",
    country: "Egipt",
    category: 5,
    price: "620 PLN/os",
  },
  {
    name: "Ikaros Hotel",
    country: "Grecja",
    category: 3,
    price: "220 PLN/os",
  },
  {
    name: "Labranda Sandy Beach Resort",
    country: "Grecja",
    category: 5,
    price: "580 PLN/os",
  },
  {
    name: "Lida Corfu",
    country: "Grecja",
    category: 4,
    price: "310 PLN/os",
  },
  {
    name: "Mytt Beach Hotel",
    country: "Tajlandia",
    category: 5,
    price: "720 PLN/os",
  },
  {
    name: "Novotel Rayong",
    country: "Tajlandia",
    category: 4,
    price: "410 PLN/os",
  },
  {
    name: "Cholchan Pattaya Resort",
    country: "Tajlandia",
    category: 3,
    price: "290 PLN/os",
  },
];

const TravelPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <Plane className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Biuro podróży
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            (Temat nr 2)
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
          <Link href={`${url}travel`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Biuro podróży
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
            Na początku prezentujemy trzy promocyjne (losowo wybrane) oferty
            wakacyjne. Oferty budujemy na podstawie dostępnych hoteli. Długość
            pobytu dla ofert to odpowiednio: 7, 10 i 14 dni. Każda z trzech
            ofert musi obejmować inny kraj oraz inną kategorię hotelu.
            Przynajmniej dwie z nich muszą być ofertami typu all-inclusive.
          </p>
          <p className="text-lg text-justify tracking-tight pt-4">
            Oferta musi zawierać następujące dane: numer oferty (1-3), kraj,
            termin pobytu (data wylotu i data powrotu), nazwę i kategorię
            hotelu, rodzaj wyżywienia (same śniadania lub all-inclusive) oraz
            łączną cenę za osobę. Oferty wyświetlamy w kolejności od najtańszej
            do najdroższej. Przyjmujemy, że data wylotu każdej z ofert to 15
            czerwca 2022 roku. Data owrotu jest oczywiście uzależniona od ilości
            dni (7, 10 lub 14.) Następnie użytkownik wybiera interesującą go
            ofertę, podaje ilość osób dorosłych i ilość dzieci. Po pobraniu
            danych użytkownika wyświetlamy łączną cenę za wybraną ofertę.
          </p>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Zasady wyliczania ceny oferty za osobę</AlertTitle>
            <AlertDescription className="tracking-tight">
              <ol className="list-decimal list-inside mt-4">
                <li>Cena za hotel = cena hotelu za dobę * ilość dni pobytu.</li>
                <li>
                  Cena za przelot w obie strony: 1000 PLN (Europa), 1500 PLN
                  (Afryka), 2000 PLN (Azja), 2500 PLN (Ameryka).
                </li>
                <li>
                  Jeżeli oferta jest ofertą all-inclusive, wówczas doliczamy
                  1200 PLN.
                </li>
                <li>
                  Całkowita cena za osobę = cena za hotel + cena za przelot +
                  cena za all-inclusive (jeżeli jest).
                </li>
                <li>
                  Wyliczając łączną cenę dla Użytkownika bierzemy pod uwagę, że
                  dzieci płacą połowę ceny oferty za osobę.
                </li>
              </ol>
            </AlertDescription>
          </Alert>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Losowanie trzech liczb z pięciu
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            W języku C# do prostego generowania liczb pseudolosowych służy klasa
            Random oraz jej metoda {`Next()`}. Poniżej napisałem metodę
            generującą zbiór losowo ułożonych trzech liczb z przedziału 1-5.
            Możecie ją wykorzystać w projekcie. Metoda nazywa się GetNumbers() i
            zwraca obiekt typu {`List<int>`}
          </p>
          <Card className="p-5">
            <code>public static {`List<int>`} GetNumbers()</code>
            <br />
            <code>{`{`}</code>
            <br />
            <code>&nbsp;&nbsp;&nbsp;var numbers = new {`List<int>()`};</code>
            <br />
            <code>&nbsp;&nbsp;&nbsp;var random = new Random();</code>
            <br />
            <code>&nbsp;&nbsp;&nbsp;while (numbers.Count {`<`} 3)</code>
            <br />
            <code>&nbsp;&nbsp;&nbsp;{`{`}</code>
            <br />
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int number = random.Next(1,
              6);
            </code>
            <br />
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!numbers.Contains(number))
            </code>
            <br />
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numbers.Add(number);
            </code>
            <br />
            <code>&nbsp;&nbsp;&nbsp;{`}`}</code>
            <br />
            <br />
            <code>&nbsp;&nbsp;&nbsp;return numbers;</code>
            <br />
            <code>{`}`}</code>
            <br />
            <br />
            <code>{`//`} Użycie (wywołanie metody)</code>
            <br />
            <code>
              var numbers = GetNumbers(); // numbers to lista zawierająca np:{" "}
              {`{ 4, 5, 1 }`}
            </code>
          </Card>
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
            Na początku ładujemy do pamięci listę wszystkich piętnastu hoteli
            dostępnych w ofercie biura podróży.
          </p>
          <Table>
            <TableCaption>
              Lista wszystkich hoteli dostępnych w biurze podróży
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Nazwa hotelu</TableHead>
                <TableHead className="w-[200px]">Kraj</TableHead>
                <TableHead>Kategoria</TableHead>
                <TableHead className="text-right">
                  Cena pobytu za dobę (śniadanie wliczone)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hotels.map((h) => (
                <TableRow key={h.name}>
                  <TableCell className="font-medium">{h.name}</TableCell>
                  <TableCell>{h.country}</TableCell>
                  <TableCell>
                    <TravelStar category={h.category} />
                  </TableCell>
                  <TableCell className="text-right">{h.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default TravelPage;
