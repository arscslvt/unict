import React from "react";
import { Button, ButtonProps } from "./ui/button";

import {
  ArrowUpAZ,
  BookCheck,
  Coins,
  FilePen,
  Library,
  LucideProps,
} from "lucide-react";

export default function FeaturesGrid() {
  return (
    <div className="py-6 flex flex-wrap gap-3">
      <Feature icon={ArrowUpAZ} variant={"default"}>
        Tutti i servizi
      </Feature>
      <Feature icon={BookCheck}>Esami e certificati</Feature>
      <Feature icon={Coins}>Tasse e contributi</Feature>
      <Feature icon={FilePen}>Domande</Feature>
      <Feature icon={Library}>Aule Studio</Feature>
    </div>
  );
}

interface FeatureProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonProps["variant"];

  icon?: React.ComponentType<LucideProps>;
}

const Feature = ({
  children,
  variant = "outline",
  onClick,
  icon: Icon,
}: FeatureProps) => {
  return (
    <Button
      className="flex flex-1 sm:flex-initial flex-col h-max rounded-lg py-4 px-6 gap-2 hover:scale-105 hover:shadow-xl transition-all duration-150"
      variant={variant}
    >
      {Icon && <Icon width={28} height={28} strokeWidth={1.6} />}
      {children}
    </Button>
  );
};
