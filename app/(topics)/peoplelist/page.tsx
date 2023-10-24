"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Doc } from "@/convex/_generated/dataModel";
import { compare, PeopleProps } from "@/helpers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PeopleList = () => {
  const createList = (data: Doc<"sanusers">[] | undefined): PeopleProps[] => {
    let people = new Array();
    if (data !== undefined) {
      data.forEach((d) => {
        people.push({
          album: d.album,
          fullName: d.lastName + " " + d.firstName,
          group: d.studentGroupNumber.toString(),
          topic: d.topic,
        });
      });
      people.sort(compare);
    }

    return people;
  };

  const applications = useQuery(api.sanusers.getAplikacja);
  const kolokwiums = useQuery(api.sanusers.getKolokwium);

  const applicationList = createList(applications);
  const kolokwiumList = createList(kolokwiums);

  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col h-full">
      <div className="container mx-auto h-full flex-1">
        <h5 className="text-2xl font-bold tracking-tight">
          Lista osób, które wybrały formę zaliczenia
        </h5>
        <div className="pt-10 pb-6">
          <Tabs defaultValue="aplikacja" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="aplikacja">Stworzenie aplikacji</TabsTrigger>
              <TabsTrigger value="kolokwium">Kolokwium</TabsTrigger>
            </TabsList>
            <TabsContent value="aplikacja">
              <p className="text-lg text-justify tracking-tight py-4 font-bold">
                Stworzenie aplikacji
              </p>
              {applicationList && applicationList.length > 0 ? (
                <div className="min-h-[1000px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nazwisko i Imię</TableHead>
                        <TableHead className="text-right">Nr albumu</TableHead>
                        <TableHead className="text-center">
                          Grupa studencka
                        </TableHead>
                        <TableHead>Wybrany temat</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applicationList.map((c) => (
                        <TableRow key={c.album}>
                          <TableCell>{c.fullName}</TableCell>
                          <TableCell className="text-right">
                            {c.album}
                          </TableCell>
                          <TableCell className="text-center">{`gr.${c.group}`}</TableCell>
                          <TableCell className="font-medium">
                            {c.topic}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="min-h-[1000px]">
                  <h5>Brak studentów</h5>
                </div>
              )}
            </TabsContent>
            <TabsContent value="kolokwium">
              <p className="text-lg text-justify tracking-tight py-4 font-bold">
                Kolokwium
              </p>
              {kolokwiumList && kolokwiumList.length > 0 ? (
                <div className="min-h-[1000px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nazwisko i Imię</TableHead>
                        <TableHead className="text-right">Nr albumu</TableHead>
                        <TableHead className="text-center">
                          Grupa studencka
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kolokwiumList.map((c) => (
                        <TableRow key={c.album}>
                          <TableCell>{c.fullName}</TableCell>
                          <TableCell className="text-right">
                            {c.album}
                          </TableCell>
                          <TableCell className="text-center">{`gr.${c.group}`}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="min-h-[1000px]">
                  <h5>Brak studentów</h5>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
