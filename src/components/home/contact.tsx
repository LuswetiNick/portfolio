"use client";

import { CardContent, CardFooter } from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FlipWords } from "../ui/flip-words";
import { BackgroundGradient } from "../ui/background-gradient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const words = ["Modern", "Fast", "Powerful"];
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <main id="contact" className="relative py-14 bg-background w-full">
      <div className="relative z-10 max-w-screen-xl mx-auto sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto text-center sm:px-0">
          <h3 className="text-muted-foreground text-3xl font-semibold sm:text-4xl w-full">
            Let&apos;s build something <br /> <FlipWords words={words} />
          </h3>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 sm:max-w-2xl sm:px-8">
          <div>
            <BackgroundGradient className="rounded-md w-full p-4 sm:p-10 bg-card">
              <p className="text-3xl font-semibold sm:text-4xl text-center mb-4">
                Get in touch
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <CardContent className="grid w-full items-center gap-4">
                    {/* <div className="flex flex-col space-y-1.5">
                      <label className="font-medium">Full name</label>
                      <input
                        {...form.register("fullname")}
                        type="text"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                      />
                      {form.formState.errors.fullname && (
                        <p className="text-destructive text-sm mt-1">
                          {form.formState.errors.fullname.message}
                        </p>
                      )}
                    </div> */}
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
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
                            <Input type="email" {...field} />
                          </FormControl>
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
                              rows={5}
                              {...field}
                              className=" resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="w-full ">
                    <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-semibold text-xl text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
                      Send
                    </button>
                  </CardFooter>
                </form>
              </Form>
            </BackgroundGradient>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
};

export default Contact;
