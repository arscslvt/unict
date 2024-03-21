"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import {
  ArrowRightIcon,
  Cross1Icon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import Modal from "./modal";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/it";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ExamsList() {
  return (
    <Card className="min-w-full max-h-max md:min-w-64 md:max-w-72 relative z-10">
      <CardHeader>
        <CardTitle>Prossimi appelli</CardTitle>
        <CardDescription>
          Hai 3 esami in programma per la prossima settimana.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="divide-y">
          <Item
            id="md92jn9d2j9"
            title="Sistemi Operativi"
            url="https://www.unict.it"
            date={new Date()}
            location="Aula 1"
            teacher={["Mario Rossi"]}
          />
          <Item
            id="s92j9dn29jd"
            title="Analisi Matematica 1"
            url="https://www.unict.it"
            date={new Date()}
            location="Aula 2"
            teacher={["Giuseppe Verdi", "Luigi Pirandello"]}
          />
          <div className="pt-2">
            <Button variant={"default"} className="gap-2 w-full">
              Tutti i miei appelli <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ItemProps {
  id: string;

  title: string;
  url: string;

  date: Date;
  location: string;

  teacher: string[];
}

const Item = ({ id, title, url, date, location, teacher }: ItemProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  dayjs.locale("it");

  return (
    <div className="flex items-center justify-between gap-4 py-3 last-of-type:pb-0 first-of-type:pt-0">
      <div className="text-sm">
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">
          {dayjs(date).format("DD MMMM")} alle {dayjs(date).format("hh:mm")}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-1">
          <Badge variant={"outline"}>{location}</Badge>
          {teacher.map((name, key) => (
            <Badge variant={"outline"} key={key}>
              {name}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setIsModalOpen(true)}
        >
          <InfoCircledIcon />
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        onChange={(status) => setIsModalOpen(status)}
        title="Dettagli esame"
        description={`Informazioni sull'esame di ${title}`}
      >
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">
                {`Presenta questo QR code all'ingresso dell'aula. (${location})`}
              </h3>

              <div className="text-muted-foreground">
                <p>{`L'esame si terrà il ${dayjs(date).format(
                  "DD MMMM"
                )} alle ore ${dayjs(date).format("hh:mm")}.`}</p>

                <p>
                  Visita il{" "}
                  <Link
                    href={url}
                    className="underline underline-offset-2"
                    target="_blank"
                  >
                    sito del corso
                  </Link>{" "}
                  per maggiori informazioni.
                </p>
              </div>
            </div>
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                id
              )}`}
              alt="QR code per l'accesso all'esame"
              width={200}
              height={200}
              quality={100}
              className="border min-w-40"
            />
          </div>

          <div className="pt-6">
            <h3 className="font-medium">Qualche problema?</h3>
            <div className="pt-2 flex gap-2 flex-wrap">
              <Button variant={"destructive"} className="gap-1">
                <Cross1Icon /> Annulla prenotazione
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={"secondary"}>Disattiva notifiche</Button>
                </TooltipTrigger>

                <TooltipContent className="max-w-64 text-center">
                  Non riceverai più notifiche relative ad aggiornamenti per
                  questo esame via email.
                </TooltipContent>
              </Tooltip>
              <Button variant={"secondary"} className="gap-1">
                Contatta il docente
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
