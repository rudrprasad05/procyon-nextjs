"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
˝

export default function RequestAccess({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Domain Registration</DialogTitle>
          <DialogDescription>
            You'll be contacted by a member of our team to discuss your request.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
