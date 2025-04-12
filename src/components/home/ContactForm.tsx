"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldValue, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const messageType = [
  { id: "1", name: "Web Development" },
  { id: "2", name: "Graphic Design" },
  { id: "3", name: "Computer Repairs" },
  { id: "4", name: "Email Hosting" },
  { id: "5", name: "Other" },
];

const ChangePasswordForm = z.object({
  name: z
    .string()
    .min(6, { message: "Password must contain more than 2 characters" })
    .max(32, { message: "Password must have less than 2 characters" }),
  email: z
    .string()
    .min(6, { message: "Password must contain more than 2 characters" })
    .max(32, { message: "Password must have less than 2 characters" }),
  message: z
    .string()
    .min(6, { message: "Password must contain more than 2 characters" })
    .max(32, { message: "Password must have less than 2 characters" }),
  category: z.string(),
});

type ChangePasswordFormType = z.infer<typeof ChangePasswordForm>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [catState, setcatState] = useState<FieldValue<String>>("");

  const form = useForm<ChangePasswordFormType>({
    resolver: zodResolver(ChangePasswordForm),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormType) => {
    setIsLoading(true);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 mb-24 w-5/6 mx-auto text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="border border-solid border-muted-foreground"
                    autoComplete="off"
                    placeholder="enter your name"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="border border-solid border-muted-foreground"
                    autoComplete="off"
                    placeholder="Enter your email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => {
            return (
              <FormItem className="grow">
                <FormLabel>Parent Category</FormLabel>
                <Select
                  onValueChange={(e) => {
                    field.onChange;
                    setcatState(e);
                    console.log(e);
                  }}
                  defaultValue={messageType[0].id as string}
                >
                  <FormControl>
                    <SelectTrigger className="border border-solid border-muted-foreground">
                      <SelectValue placeholder="Select a tag" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {messageType?.map((i) => (
                      <SelectItem key={i.id} value={i?.id}>
                        {i.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Message</FormLabel>
              <FormControl>
                <Textarea
                  className="border border-solid border-muted-foreground"
                  autoComplete="off"
                  placeholder="enter message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="" type="submit">
          {isLoading && <Loader2 className={"animate-spin mr-3"} />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
