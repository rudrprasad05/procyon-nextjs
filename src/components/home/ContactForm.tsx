"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/contact", values);
      console.log("Form submission response:", response.data);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-4/5 mx-auto py-12">
      <div className="relative flex items-center rounded-md bg-purple-800 p-3 overflow-clip border border-purple-500 mb-6">
        <h2 className="text-xl font-medium text-white text-center w-full">
          Contact Us
        </h2>
      </div>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 p-2">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-lg font-medium text-green-800">
            Thank you for your message!
          </h3>
          <p className="text-green-600 mt-2">
            We'll get back to you as soon as possible.
          </p>
          <Button
            className="mt-4 bg-purple-800 hover:bg-purple-700"
            onClick={() => setIsSuccess(false)}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-solid border-muted-foreground"
                      placeholder="Enter your name"
                      {...field}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-solid border-muted-foreground"
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border border-solid border-muted-foreground">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="email-marketing">
                        Email Marketing
                      </SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="ecommerce">
                        E-commerce Solutions
                      </SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border border-solid border-muted-foreground min-h-[120px]"
                      placeholder="Tell us about your project"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-purple-800 hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
