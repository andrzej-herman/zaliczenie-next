import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PeopleList = () => {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <h5 className="text-2xl font-bold tracking-tight">
          Lista osób, które wybrały formę zaliczenia
        </h5>
        <div className="pt-10 pb-6">
          <Tabs defaultValue="aplikacja" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="aplikacja">Aplikacja</TabsTrigger>
              <TabsTrigger value="kolokwium">Kolokwium</TabsTrigger>
            </TabsList>
            <TabsContent value="aplikacja"></TabsContent>
            <TabsContent value="kolokwium"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
