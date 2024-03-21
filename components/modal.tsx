import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useMediaQuery } from "@/lib/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

interface ModalProps {
  title?: string;
  description?: string;

  open?: boolean;
  onChange?: (status: boolean) => void;

  children?: React.ReactNode;
}

export default function Modal({
  children,
  title,
  description,
  open,
  onChange,
}: ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog
        open={open}
        onOpenChange={(status) => onChange && onChange(status)}
      >
        <DialogContent className="z-50">
          {title || description ? (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {title && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          ) : null}

          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(status) => onChange && onChange(status)}
      modal
    >
      <DrawerContent>
        {title || description ? (
          <DrawerHeader>
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {title && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
        ) : null}

        <div className="px-4 pb-6">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
