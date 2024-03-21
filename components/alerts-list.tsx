import { TypographyH3, TypographyH4, TypographyMuted } from "@/lib/typography";
import {
  ArrowRightIcon,
  DotFilledIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";
import dayjs from "dayjs";
import { Badge } from "./ui/badge";

export default function AlertsList() {
  return (
    <div className="py-6">
      <div className="pb-3 md:pb-6 flex items-center gap-6">
        <div className="flex-1">
          <TypographyH3>
            Avvisi{" "}
            <Badge
              variant={"outline"}
              size={"counter"}
              className="ml-1 -translate-y-[1px]"
            >
              3
            </Badge>
          </TypographyH3>
          <TypographyMuted>
            Ultimo aggiornamento: 2 minuti fa.{" "}
            <Button
              variant={"link"}
              size={"text"}
              className="text-muted-foreground font-normal"
            >
              Aggiorna <ReloadIcon className="inline" width={12} height={12} />
            </Button>
          </TypographyMuted>
        </div>
        <div>
          <Button variant={"outline"} size={"icon"}>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Item
          id={"1"}
          title={
            "Disponibile la graduatoria per le assegnazione delle borse di studio"
          }
          description={`
            La graduatoria per le assegnazioni delle borse di studio è disponibile
            sul sito dell'Università di Catania o su ERS*Catania.it
          `}
          date={new Date()}
          author={"ERS* Catania"}
          tags={["borse di studio", "graduatoria"]}
          isRead={false}
        />
        <Item
          id={"1"}
          title={
            "Il portale studenti si aggiorna con una nuova interfaccia e nuove funzionalità."
          }
          description={`
           Abbiamo apportato delle modifiche al portale studenti per migliorare la tua esperienza. Scopri tutte le novità.
          `}
          date={new Date()}
          author={"Università di Catania"}
          tags={["news"]}
          isRead={false}
        />
      </div>
    </div>
  );
}

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;

  title: string;
  description: string;

  date: Date;

  author: string;
  tags: string[];

  isRead: boolean;
}

const Item = ({
  id,
  title,
  description,
  date,
  author,
  tags,
  isRead,
  ...props
}: ItemProps) => {
  dayjs.locale("it");

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <div>
          <p className="font-medium">
            {title}
            <span className="inline maw-w-max">
              {!isRead && (
                <DotFilledIcon
                  width={22}
                  height={22}
                  className="inline max-w-max text-accent animate-pulse -translate-y-[1px]"
                />
              )}
            </span>
          </p>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <p className="text-sm pt-2">
          <span className="text-muted-foreground">
            di {author} — {dayjs(date).format("DD MMMM YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
};
