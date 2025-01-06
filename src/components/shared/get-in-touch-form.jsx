"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import useEmail from "@/hooks/useEmail";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Please enter a valid 10-digit phone number.",
  }),
  comments: z
    .string()
    .min(10, {
      message: "Comments must be at least 10 characters long.",
    })
    .max(500, {
      message: "Comments must not exceed 500 characters.",
    }),
});

export function GetInTouchForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const { sendEmail, loading } = useEmail();

  async function onSubmit(data) {
    const templateParams = {
      customer_name: data?.name,
      customer_email: data?.email,
      contact_number: data?.phone,
      comments: data?.comments,
    };

    await sendEmail(
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_GET_IN_TOUCH_TEMPLATE_ID
    );

    toast({
      title: "Form submitted!",
      description: "We've received your message and will get back to you soon.",
    });

    form.reset();
  }

  return (
    <div className="bg-[rgb(17,24,39)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400">
            We&apos;re here to help you optimize your processes and maximize
            results
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="bg-gray-800 border-gray-700 text-white"
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
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@example.com"
                        {...field}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="1234567890"
                        {...field}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Please enter a 10-digit phone number without spaces or
                      dashes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help you..."
                        className="resize-none bg-gray-800 border-gray-700 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Please provide any additional information or questions you
                      have.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
