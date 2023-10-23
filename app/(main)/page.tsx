"use client";

import TopicCard from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignUpButton, useUser } from "@clerk/nextjs";
import {
  Coins,
  Landmark,
  Plane,
  ShoppingBasket,
  CarTaxiFront,
  Car,
  Building2,
  FileText,
  FileQuestion,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

const availableGroups = [
  {
    value: "1",
    label: "Grupa 1",
  },
  {
    value: "2",
    label: "Grupa 2",
  },
  {
    value: "3",
    label: "Grupa 3",
  },
  {
    value: "4",
    label: "Grupa 4",
  },
  {
    value: "5",
    label: "Grupa 5",
  },
  {
    value: "7",
    label: "Grupa 7",
  },
];

const topics = [
  {
    value: "1",
    label: "Bank",
  },
  {
    value: "2",
    label: "Biuro podróży",
  },
  {
    value: "3",
    label: "Kasa sklepowa",
  },
  {
    value: "4",
    label: "Portal aukcyjny",
  },
  {
    value: "5",
    label: "Taxi",
  },
  {
    value: "6",
    label: "Wypożyczalnia samochodów",
  },
  {
    value: "7",
    label: "Zakład pracy",
  },
  {
    value: "8",
    label: "Zgadnij liczbę",
  },
];

const Home = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { user } = useUser();
  const { toast } = useToast();
  const [openGroup, setOpenGroup] = React.useState(false);
  const [openTopic, setOpenTopic] = React.useState(false);
  const [topicVisible, setTopicVisible] = React.useState(false);

  const [albumNumber, setAlbumNumber] = useState("");
  const [groupNumber, setGroupNumber] = useState<string>("");
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const sendData = () => {
    // here

    var data = {
      userId: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      album: albumNumber,
    };
  };

  const handleAlbumNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumNumber(e.target.value);
  };

  const handleSelectedForm = (value: string) => {
    setSelectedForm(value);
    if (value === "2") setTopicVisible(true);
    else setTopicVisible(false);
  };

  const getUserInput = (): string => {
    if (user !== null) {
      if (user !== undefined) {
        if (user.fullName !== null) {
          return user.fullName;
        } else {
          return "-";
        }
      } else return "-";
    } else return "-";
  };

  console.log(groupNumber);
  console.log(selectedForm);

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
            <div className="flex items-center justify-center gap-4">
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="py-8 md:py-0 text-base md:text-lg tracking-tight"
                  >
                    Wybierz formę zaliczenia
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[650px]">
                  <DialogHeader>
                    <DialogTitle>Wybierz formę zaliczenia</DialogTitle>
                    <DialogDescription>
                      Uzupełnij wymagane dane aby wybrać formę zaliczenia
                      przedmiotu
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col space-y-4 px-2">
                    <div className="flex items-center justify-between gap-5 pt-2">
                      <div className="w-full">
                        <Label htmlFor="fullName" className="mb-2">
                          Imię i nazwisko
                        </Label>
                        <Input
                          id="fullName"
                          defaultValue={getUserInput()}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-6 pt-2">
                      <div className="w-full">
                        <Label htmlFor="fullName" className="mb-2">
                          Nr albumu SAN
                        </Label>
                        <Input
                          id="albumNumber"
                          value={albumNumber}
                          onChange={handleAlbumNumber}
                        />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="groupNumber" className="mb-2">
                          Nr grupy studenckiej
                        </Label>
                        <Popover open={openGroup} onOpenChange={setOpenGroup}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openGroup}
                              className="w-full justify-between"
                            >
                              {groupNumber
                                ? availableGroups.find(
                                    (framework) =>
                                      framework.value === groupNumber
                                  )?.label
                                : "Wybierz grupę studencką..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Wybierz grupę studencką..." />
                              <CommandEmpty>Nie znaleziono grupy</CommandEmpty>
                              <CommandGroup>
                                {availableGroups.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue: string) => {
                                      setGroupNumber(
                                        currentValue === groupNumber
                                          ? ""
                                          : currentValue
                                      );
                                      setOpenGroup(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        groupNumber === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 pt-2">
                      <div className="w-full">
                        <Label>Forma zaliczenia przedmiotu</Label>
                        <RadioGroup
                          value={selectedForm}
                          className="mt-4"
                          onValueChange={handleSelectedForm}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="r1" />
                            <Label htmlFor="r1">Kolokwium</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2" id="r2" />
                            <Label htmlFor="r2">Aplikacja</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    {topicVisible && (
                      <>
                        <div className="flex items-center justify-between gap-5 pt-2">
                          <div className="w-full">
                            <Label>Temat aplikacji</Label>
                            <Popover
                              open={openTopic}
                              onOpenChange={setOpenTopic}
                            >
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={openTopic}
                                  className="w-full justify-between"
                                >
                                  {topic
                                    ? topics.find(
                                        (framework) => framework.value === topic
                                      )?.label
                                    : "Wybierz temat aplikacji..."}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-full p-0">
                                <Command>
                                  <CommandInput placeholder="Wybierz temat aplikacji..." />
                                  <CommandEmpty>
                                    Nie znaleziono tematu
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {topics.map((framework) => (
                                      <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue: string) => {
                                          setTopic(
                                            currentValue === topic
                                              ? ""
                                              : currentValue
                                          );
                                          setOpenTopic(false);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            topic === framework.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <DialogFooter>
                    <Button onClick={sendData} className="mt-3">
                      Zapisz swój wybór
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog> */}

              {/* <Link href="peoplelist">
                <Button
                  size="lg"
                  variant="secondary"
                  className="py-8 md:py-0 text-base md:text-lg tracking-tight"
                >
                  Zobacz listę zapisanych studentów
                </Button>
              </Link> */}
            </div>
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
            Javascript, PHP, Go, Ruby). Kod aplikacji piszemy w zespołach dwu,
            trzyosobowych (należy zgłosić do mnie skład zespołu do dnia 28
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
            Do wyboru jest 8 tematów aplikacji. W jednej grupie studenckiej
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
              link="/salary"
              content="Aplikacja daje możliwość wyświetlenia listy wszystkich pracowników zakładu. Lista musi zawierać: Id pracownika, jego imię i nazwisko, datę urodzenia oraz stanowisko. W zakładzie pracują urzędnicy oraz pracownicy fizyczni ...
              "
            />
            <TopicCard
              icon={FileQuestion}
              title="Zgadnij liczbę"
              link="/guessnumber"
              content="Aplikacja, to prosta gra polegająca na odgadnięciu sekretnej liczby. Gracz wybiera poziom trudności gry, a następnie próbuje odgadnąć liczbę losowo wygenerowaną przez komputer. W każdym poziomie trudności jest określona liczba prób ...
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
            oraz plik PDF zawierający zestaw wszystkich 20 pytań (aby go pobrać
            należy się zalogować):
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
                {isAuthenticated && !isLoading && (
                  <Button size="sm">
                    <Link href="/Pytania_do_kolokwium.pdf" target="_blank">
                      Pobierz plik
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
