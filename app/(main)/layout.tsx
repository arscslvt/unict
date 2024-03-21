import Toolbar from "@/components/toolbar";
import { Toaster } from "@/components/ui/sonner";
import dayjs from "dayjs";
import "dayjs/locale/it";
import React, { HTMLAttributes } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  dayjs.locale("it");

  return (
    <div>
      <Toolbar />
      <main>{children}</main>
      <Toaster closeButton />
    </div>
  );
}
