import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
}

const TopicCard = ({ icon: Icon, title, content, link }: TopicCardProps) => {
  return (
    <Card className="w-[625px] bg-white dark:bg-[#1F1F1F]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8" />
          <CardTitle className="font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base text-justify text-muted-foreground">
          {content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm">
          <Link href={link}>Zobacz szczegóły</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;
