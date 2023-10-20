"use client";
import TopicCard from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignUpButton } from "@clerk/nextjs";
import {
  Coins,
  Landmark,
  Plane,
  ShoppingBasket,
  CarTaxiFront,
  Car,
  Building2,
  FileText,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/spinner";

const Home = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section
          id="banner"
          className="flex flex-col space-y-8 items-center pb-20"
        >
          <h1 className="font-bold text-4xl md:text-6xl text-neutral-800 dark:text-white text-center tracking-tight">
            Zasady zaliczenia ćwiczeń z przedmiotu <br />
            Podstawy programowania
          </h1>
          <h2 className="font-medium text-base md:text-xl tracking-tight text-center text-muted-foreground">
            Strona dla studentów I roku Informatyki opracowana przez mgr inż.
            Andrzeja Hermana
          </h2>

          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <SignUpButton mode="modal" afterSignInUrl="/">
              <Button
                size="lg"
                className="py-8 md:py-0 text-base md:text-lg tracking-tight"
              >
                Utwórz konto w serwisie, aby zobaczyć opis tematów aplikacji
              </Button>
            </SignUpButton>
          )}

          {isAuthenticated && !isLoading && (
            <Button
              size="lg"
              className="py-8 md:py-0 text-base md:text-lg tracking-tight"
            >
              Wybierz formę zaliczenia
            </Button>
          )}
        </section>
        <Separator />
        <section className="pt-10">
          <h3 className="font-bold text-3xl tracking-tight text-neutral-800 dark:text-white">
            Student ma do wyboru jedną z dwóch form zaliczenia ćwiczeń:
          </h3>
          <ul>
            <li className="list-disc list-inside pt-5 text-lg tracking-tight">
              Realizacja wraz z kolegą/koleżanką z zespołu prostej aplikacji na
              jeden z tematów opisanych w sekcji{" "}
              <Link href="#aplikacja" className="font-bold">
                Stworzenie aplikacji
              </Link>
              .<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ocena końcowa z ćwiczeń będzie
              wynikiem mojej analizy napisanego kodu oraz funkcjonalności
              aplikacji.
            </li>
            <li className="list-disc list-inside pt-3 text-lg tracking-tight">
              Zaliczenie kolokwium zawierającego trzy pytania opisowe. Zestaw 20
              pytań oraz kryteria oceny są zamieszczone w sekcji{" "}
              <Link href="#kolokwium" className="font-bold">
                Kolokwium
              </Link>
              .
            </li>
          </ul>
          <p className="pt-5 text-lg tracking-tight">
            Decyzja o wyborze formy zaliczenia jest nieodwołalna. Należy ją
            podjąć najpóźniej do siódmego zjazdu czyli do dnia{" "}
            <span className="font-bold">28 stycznia 2024 roku</span>.
          </p>
        </section>
        <section id="aplikacja" className="pt-14">
          <h3 className="font-bold text-3xl tracking-tight text-neutral-800 dark:text-white">
            Stworzenie aplikacji
          </h3>
          <p className="pt-5 text-lg tracking-tight text-justify">
            Podstawą zaliczenia jest napisanie aplikacji z wykorzystaniem
            jednego z obiektowych języków programowania (C#, C++, Python, Java,
            Javascript, PHP, Go, Ruby). Kod aplikacji piszemy w zespołach
            dwuosobowych (należy zgłosić do mnie skład zespołu do dnia 28
            stycznia 2024 roku), lub samodzielnie. Forma programu jest dowolna
            (aplikacja konsoli, aplikacja typu desktop, aplikacja webowa).
            Jedyną dopuszczalną formą dostarczenia kodu źródłowego programu jest
            zamieszczenie go w publicznym repozytorium na portalu Github na
            koncie jednego z członków zespołu. Link do repozytorium należy
            dostarczyć mi w prywatnej wiadomości w aplikacji Teams (Andrzej
            Herman) lub na adres:{" "}
            <span className="font-bold">aherman@san.edu.pl.</span> W przypadku
            nie zaliczenia przedmiotu tą formą pozostaje Państwu zaliczenie
            kolokwium. Kod źródłowy aplikacji należy dostarczyć w terminie do{" "}
            <span className="font-bold">20 lutego 2024 roku. </span>
          </p>
          <p className="pt-3 text-lg tracking-tight text-justify">
            Do wyboru jest 7 tematów aplikacji. W jednej grupie studenckiej
            każdy zespół wybiera inny temat programu. Nie przyjmuję innych
            programów !!! Poniżej znajdziecie Państwo tematy aplikacji należy
            się zalogowac aby zobaczyć szczegóły:
          </p>
          <div className="flex items-center justify-center flex-wrap gap-12 py-12">
            <TopicCard
              icon={Landmark}
              title="Bank"
              link="/bank"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich Klientów wirtualnego banku. Następnie symuluje logowanie do serwisu bankowego. Po poprawnym zalogowaniu Klient może wykonać przelew ze swojego rachunku na rachunek innego Klienta ..."
            />
            <TopicCard
              icon={Plane}
              title="Biuro podróży"
              link="/travel"
              content="Prezentujemy trzy promocyjne (losowo wybrane) oferty wakacyjne. Oferty budujemy na podstawie dostępnych hoteli. Długość pobytu dla ofert to odpowiednio: 7, 10 i 14 dni. Każda z trzech ofert musi obejmować inny kraj oraz inną kategorię hotelu ..."
            />
            <TopicCard
              icon={ShoppingBasket}
              title="Kasa sklepowa"
              link="/cashdesk"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich produktów wirtualnego sklepu. Umożliwia także opcję 'Zakupy'. Po wejściu w 'Zakupy' symuluje skanowanie kodów kreskowych produktów przez kasjera. Oczywiście kod jest podawany z klawiatury ..."
            />
            <TopicCard
              icon={Coins}
              title="Portal aukcyjny"
              link="/auction"
              content="Aplikacja daje możliwość zakupu i sprzedaży przedmiotu na portalu aukcyjnym. Po wybraniu opcji zakupu wyświetlamy listę dostępnych przedmiotów. Lista musi zawierać numer przedmiotu, nazwę, kategorię oraz cenę ..."
            />
            <TopicCard
              icon={CarTaxiFront}
              title="Taxi"
              link="/taxi"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich dzielnic miasta oraz wszystkich taksówek w mieście. Lista dzielnic musi zawierać numer dzielnicy, jej nazwę oraz aktualną ilość znajdujących się w niej taksówek ..."
            />
            <TopicCard
              icon={Car}
              title="Wypożyczalnia"
              link="/rental"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich klientów wypożyczalni oraz listy wszystkich samochodów. Lista klientów musi zawierać: Id klienta, jego imię i nazwisko oraz datę uzyskania prawa jazdy. Jeżeli klient wypożyczalni..."
            />
            <TopicCard
              icon={Building2}
              title="Zakład pracy"
              link="/company"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich pracowników zakładu. Lista musi zawierać: Id pracownika, jego imię i nazwisko, datę urodzenia oraz stanowisko. W zakładzie pracują urzędnicy oraz pracownicy fizyczni ...

              "
            />
          </div>
          <p className="text-lg tracking-tight text-justify">
            Każdy z tematów aplikacji jest dokładnie opisany oraz zawiera
            symulator, pokazujący jak powinien działać gotowy program. Możliwe
            są niewielkie odstępstwa od pokazanej implementacji.
          </p>
        </section>
        <section id="kolokwium" className="pt-14">
          <h3 className="font-bold text-3xl tracking-tight text-neutral-800 dark:text-white">
            Kolokwium
          </h3>
          <p className="pt-5 text-lg tracking-tight text-justify">
            Podstawą zaliczenia jest zaliczenie kolokwium z zakresu podstaw
            programowania w języku C#. Przewidziane są trzy terminy kolokwium:
          </p>
          <ul>
            <li className="list-disc list-inside pt-5 text-lg tracking-tight">
              termin zerowy (na ósmym zjeździe -{" "}
              <span className="font-bold">11 lutego 2024 r.</span>)
            </li>
            <li className="list-disc list-inside pt-3 text-lg tracking-tight">
              pierwszy termin (podczas zjazdu egzaminacyjnego -{" "}
              <span className="font-bold">25 lutego 2024 r.</span>)
            </li>
            <li className="list-disc list-inside pt-3 text-lg tracking-tight">
              termin poprawkowy (data zostanie podana później)
            </li>
          </ul>
          <p className="pt-5 text-lg tracking-tight text-justify">
            Kolokwium zawiera trzy pytania opisowe które zostaną losowo wybrane
            z listy 20 pytań. Za każde z trzech pytań można uzyskać maksymalnie
            5 punktów (łącznie max: 15pkt.). Poniżej znajdują się kryteria oceny
            oraz plik PDF zawierający zestaw wszystkich 20 pytań:
          </p>
          <div className="pt-6 md:flex md:items-center md:justify-between md:gap-4">
            <ul>
              <li className="list-disc list-inside pt-3 text-lg tracking-tight">
                <span className="font-semibold">0-5 pkt</span> – brak
                zaliczenia,
              </li>
              <li className="list-disc list-inside pt-2 text-lg tracking-tight">
                <span className="font-semibold">6-7 pkt</span> – ocena 3
                (dostateczny),
              </li>
              <li className="list-disc list-inside pt-2 text-lg tracking-tight">
                <span className="font-semibold">8-9 pkt</span> – ocena 3+
                (dostateczny plus),
              </li>
              <li className="list-disc list-inside pt-2 text-lg tracking-tight">
                <span className="font-semibold">10-11 pkt</span> – ocena 4
                (dobry),
              </li>
              <li className="list-disc list-inside pt-2 text-lg tracking-tight">
                <span className="font-semibold">12-13 pkt</span> – ocena 4+
                (dobry plus),
              </li>
              <li className="list-disc list-inside pt-2 text-lg tracking-tight">
                <span className="font-semibold">14-15 pkt</span> – ocena 5
                (bardzo dobry),
              </li>
            </ul>
            <Card className="w-full md:w-[450px] bg-white dark:bg-[#1F1F1F] mt-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8" />
                  <CardTitle className="font-bold">
                    Zestaw pytań do kolokwium
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-justify text-muted-foreground">
                  Pytania_do_kolokwium.PDF
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button size="sm">
                  <Link href="/Pytania_do_kolokwium.pdf" target="_blank">
                    Pobierz plik
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
