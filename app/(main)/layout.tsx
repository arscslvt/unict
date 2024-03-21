import Toolbar from "@/components/toolbar";
import { Toaster } from "@/components/ui/sonner";
import dayjs from "dayjs";
import "dayjs/locale/it";
import React, { HTMLAttributes } from "react";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  exam?: React.ReactNode;
}

export default function MainLayout({
  children,
  exam,
  ...props
}: MainLayoutProps) {
  dayjs.locale("it");

  return (
    <div {...props}>
      <Toolbar />
      <main>{children}</main>
      {exam}
      <Toaster closeButton />
    </div>
  );
}
