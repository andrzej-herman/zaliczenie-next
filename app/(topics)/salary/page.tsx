import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, Info, Play } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { url } from "@/url";

const employers = [
  {
    id: "1",
    fullName: "Jan Nowak",
    dateOfBirth: "04.03.2002 r.",
    position: "pracownik fizyczny",
    hour: "18.5 zł/h",
    salary: "brak",
  },
  {
    id: "2",
    fullName: "Agnieszka Kowalska",
    dateOfBirth: "15.12.1973 r.",
    position: "urzędnik",
    hour: "brak",
    salary: "2 800 zł",
  },
  {
    id: "3",
    fullName: "Robert Lewandowski",
    dateOfBirth: "23.05.1980 r.",
    position: "pracownik fizyczny",
    hour: "29.0 zł/h",
    salary: "brak",
  },
  {
    id: "4",
    fullName: "Zofia Plucińska",
    dateOfBirth: "02.11.1998 r.",
    position: "urzędnik",
    hour: "brak",
    salary: "4 750 zł",
  },
  {
    id: "5",
    fullName: "Grzegorz Braun",
    dateOfBirth: "29.01.1960 r.",
    position: "pracownik fizyczny",
    hour: "48.0 zł/h",
    salary: "brak",
  },
];

const SalaryPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <Building2 className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Zakład pracy
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Temat
            nr 7)
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
          <Link href={`${url}salary`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Zakład pracy
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
            Aplikacja daje możliwość wyświetlenia listy wszystkich pracowników
            zakładu. Lista musi zawierać: Id pracownika, jego imię i nazwisko,
            datę urodzenia oraz stanowisko. W zakładzie pracują urzędnicy oraz
            pracownicy fizyczni. Urzędnicy mają stałą pensję natomiast
            pracownicy fizyczni mają stawki godzinowe. Dodatkowo aplikacja daje
            możliwość wyliczenia wynagrodzenia pracownika. Po wybraniu opcji
            <span className="italic">Wylicz wynagrodzenie</span> użytkownik
            podaje Id pracownika dla którego będzie wyliczane wynagrodzenie.
            Jeżeli Id jest prawidłowe, aplikacja wyświetla szczegółowe dane na
            temat pracownika: imię i nazwisko, wiek, stanowisko oraz w
            zależności od stanowiska albo wysokość pensji stałej, albo stawkę
            godzinową. Następnie aplikacja prosi o podanie ilości
            przepracowanych przez pracownika dni w miesiącu (max. 20) oraz
            następnie o wysokość premii dodatkowej. Po pobraniu tych danych
            program wylicza łączne wynagrodzenie brutto pracownika i wyświetla
            informacje na ekranie. Informacje muszą zawierać: kwotę łącznego
            wynagrodzenia brutto, kwotę podatku (o ile został potrącony) oraz
            kwotę netto do wypłaty (brutto minus podatek). Przyjmujemy
            założenie, że podatek wynosi 18% kwoty brutto.
          </p>
          <p className="text-lg text-justify tracking-tight pt-4">
            Podatek jest potrącany tylko i wyłącznie wtedy, gdy wiek pracownika
            wynosi więcej niż 26 lat. Pracownicy do 26-go roku życia włącznie są
            zwolnieni z płacenia podatku (wartość podatku wynosi 0 zł).
          </p>
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Zasady obliczania wynagrodzenia brutto</AlertTitle>
            <AlertDescription className="tracking-tight">
              <p className="mt-2">Urzędnik</p>
              <ol className="list-decimal list-inside">
                <li>
                  Jeżeli przepracował wszystkie 20 dni w miesiącu: podstawa =
                  100% pensji stałej brutto
                </li>
                <li>
                  Jeżeli przepracował mniej niż 20 dni w miesiącu: podstawa =
                  80% pensji stałej brutto
                </li>
              </ol>
              <p className="mt-2">Pracownik fizyczny</p>
              <ol className="list-decimal list-inside">
                <li>
                  podstawa = Ilość przepracowanych dni * stawka godzinowa * 8
                </li>
                <li>
                  Jeżeli pracownik przepracował wszystkie dni (20) dodatkowo
                  otrzymuje premię, jeżeli nie, premia nie przysługuje
                  pracownikowi (dotyczy zarówno urzędników jak i pracowników
                  fizycznych)
                </li>
                <li>Wynagrodzenie brutto = podstawa + premia</li>
              </ol>
            </AlertDescription>
          </Alert>
        </section>

        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Data oraz wiek osoby
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
            Jeżeli realizujemy aplikację w której obiektami są ludzie, zazwyczaj
            nie ustawiamy wartości dla cechy wiek. Nie ma to zbytniego sensu
            ponieważ wartość ta ulega zmianom w czasie. Zamiast tego posługujemy
            się cechą: data urodzenia, a wiek wyliczamy na podstawie daty
            urodzenia. Wykorzystujemy właściwość Year obiektu DateTime(). Dla
            potrzeb tej aplikacji proszę zastosować uproszczone wyliczanie wieku
            odejmując rok urodzenia od bieżącego roku. Przykład:
          </p>
          <Card className="p-5">
            <code>
              var dateOfBirth = new DateTime(1954, 11, 18); // data urodzenia:
              18 listopada 1954 roku
            </code>
            <br />
            <code>
              int age = DateTime.Now.Year - dateOfBirth.Year; // wiek wynosi: 69
            </code>
          </Card>
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
            Na początku ładujemy do pamięci listę wszystkich pięciu pracowników
            zakładu.
          </p>
          <p className="text-lg font-semibold pt-2">
            Lista pracowników zakładu
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Imię i nazwisko</TableHead>
                <TableHead>Data urodzenia</TableHead>
                <TableHead>Stanowisko</TableHead>
                <TableHead className="text-right">
                  Stawka godzinowa bruttp
                </TableHead>
                <TableHead className="text-right">
                  Pensja stała brutto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employers.map((e) => (
                <TableRow key={e.id}>
                  <TableCell className="font-medium">{e.id}</TableCell>
                  <TableCell>{e.fullName}</TableCell>
                  <TableCell>{e.dateOfBirth}</TableCell>
                  <TableCell>{e.position}</TableCell>
                  <TableCell className="text-right">{e.hour}</TableCell>
                  <TableCell className="text-right">{e.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default SalaryPage;
