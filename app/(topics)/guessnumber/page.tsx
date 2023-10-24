import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Play, FileQuestion } from "lucide-react";
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

const levels = [
  {
    name: "łatwy",
    tries: "2",
    range: "1-9",
  },
  {
    name: "średni",
    tries: "5",
    range: "10-99",
  },
  {
    name: "trudny",
    tries: "8",
    range: "100-999",
  },
];

const BankPage = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section>
          <div className="flex flex-start items-center gap-2">
            <FileQuestion className="w-10 h-10" />
            <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-white tracking-tight">
              Sekretna liczba
            </h1>
          </div>
          <h6 className="tracking-tight text-muted-foreground mt-1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Temat
            nr 8)
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
          <Link href={`${url}guessnumber`} target="_blank">
            <div
              className="group border rounded-sm w-full p-8 
            bg-neutral-100 hover:bg-neutral-200 
            dark:bg-[#191919] dark:hover:bg-[#101010]
            transition duration-300"
            >
              <div className="flex flex-col space-y-3 items-center justify-center">
                <Play className="w-12 h-12 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition ease-in-out duration-300" />
                <p className="font-medium text-xl tracking-tight text-center">
                  Otwórz symulator aplikacji Sekretna liczba
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
            Aplikacja, to prosta gra polegająca na odgadnięciu sekretnej liczby.
            Na początku gracz wybiera poziom trudności gry, a następnie próbuje
            odgadnąć liczbę losowo wygenerowaną przez komputer. W każdym
            poziomie trudności jest określona liczba prób. Im większy poziom
            trudności, tym większy zakres losowanej przez komputer liczby oraz
            inna ilość prób dla gracza. Poniżej są przedstawione poziomy
            trudności:
          </p>
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  Nazwa poziomu trudności
                </TableHead>
                <TableHead>Ilość prób gracza</TableHead>
                <TableHead>Zakres losowanej liczby</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {levels.map((c) => (
                <TableRow key={c.tries}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.tries}</TableCell>
                  <TableCell>{c.range}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Alert className="mt-6 mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>UWAGA!</AlertTitle>
            <AlertDescription className="tracking-tight">
              Jeżeli graczowi skończą się próby, aplikacja wyświetla komunikat o
              tym fakcie i następuje koniec gry. Jeżeli gracz odgadnie sekretną
              liczbę przed wykorzystaniem wszystkich prób, wyświelamy komunikat
              i wygranej i kończymy grę.
            </AlertDescription>
          </Alert>
        </section>
        <section className="pt-16">
          <h3 className="text-2xl font-medium pb-2 tracking-tight">
            Losowanie liczby
          </h3>
          <Separator />
          <p className="text-lg text-justify tracking-tight py-4">
            W języku C# do prostego generowania liczb pseudolosowych służy klasa
            Random oraz jej metoda {`Next()`}. Może ona przejmować argumenty,
            wskazujące z jakiego przedziału ma zostać wylosowana liczba.
          </p>
          <Card className="p-5">
            <code>
              var rnd = new Random(); // utworzenie instancji klasy Random
            </code>
            <br />
            <code>
              var pierwsza = new Random(1, 10); // losowa liczba z zakresu 1-9
            </code>
            <br />
            <code>
              var druga = new Random(10, 100); // losowa liczba z zakresu 10-999
            </code>
            <br />
            <code>
              var trzecia = new Random(100, 1000); // losowa liczba z zakresu
              100-999
            </code>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BankPage;
