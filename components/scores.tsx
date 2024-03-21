import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableCell, TableRow } from "./ui/table";
import { TypographyH3, TypographySmall } from "@/lib/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function Scores() {
  const [mat, setMat] = useState("1000039392");

  const handleCopy = () => {
    if (!navigator.clipboard)
      return toast.warning("Il browser non supporta la funzione di copia.");

    navigator.clipboard.writeText(
      "Grazie per aver visitato il mio mockup su come potrebbe essere il portale studenti dell'Università di Catania. Se ti è piaciuto, condividilo con i tuoi amici e aiutami a farlo conoscere!"
    );

    toast.success("Un messaggio per te è stato copiato negli appunti. 🥰");
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="info-rapide">
        <AccordionTrigger>Informazioni rapide</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3">
            <div>
              <p>La tua matricola</p>
              <div>
                <span className="font-medium pr-2">
                  {mat.slice(0, 4)}*{mat.slice(4, 8)}
                </span>

                <Button
                  size={"sm"}
                  variant={"ghost"}
                  className="px-0 w-7 h-7"
                  onClick={handleCopy}
                >
                  <Copy width={12} height={12} />
                </Button>
              </div>
            </div>

            <Table>
              <TableRow className="hover:bg-background">
                <TableCell className="font-medium px-0">
                  Media ponderata
                </TableCell>
                <TableCell className="px-0 text-right">
                  27,32<span className="text-muted-foreground">/30</span>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-background">
                <TableCell className="px-0">Media artimetica</TableCell>
                <TableCell className="px-0 text-right">
                  27,25<span className="text-muted-foreground">/30</span>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-background">
                <TableCell className="px-0">Regolamento CDS</TableCell>
                <TableCell className="px-0 text-right">
                  27,32 <span className="text-muted-foreground">/30</span>
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-background">
                <TableCell className="px-0">CFU totali</TableCell>
                <TableCell className="px-0 text-right">82</TableCell>
              </TableRow>

              <TableRow className="hover:bg-background">
                <TableCell className="px-0">Media conseguimento</TableCell>
                <TableCell className="px-0 text-right">
                  93,17<span className="text-muted-foreground">/110</span>
                </TableCell>
              </TableRow>
            </Table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
