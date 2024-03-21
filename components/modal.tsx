import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ModalProps {
  title?: string;
  description?: string;

  open?: boolean;
  onChange?: () => void;

  children?: React.ReactNode;
}

export default function Modal({
  children,
  title,
  description,
  open,
  onChange,
}: ModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(status) => {
        if (onChange) onChange();
      }}
    >
      <DialogContent>
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
