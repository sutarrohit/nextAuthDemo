"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginValidation } from "@/utils/zod/singupValidation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const SignIn = () => {
  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const handleLoginCredentials = async (data: z.infer<typeof LoginValidation>) => {
    try {
      const res = await signIn("credentials", {
        username: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        className: cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"),
        variant: "destructive",
        title: "Sign in",
        description: "Error While Signup",
      });
    }
  };

  return (
    <div className="border min-h-screen flex justify-center items-center">
      <Card className="w-[90%] sm:w-[400px]">
        <CardHeader>
          <CardTitle className="text-center pb-1 text-[30px] font-bold">Sign in</CardTitle>
          <CardDescription className="text-center text-[14px]">
            Enter your information to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginCredentials)}>
              <div className="mx-auto max-w-sm space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="m@example.com" required type="email" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Password" type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" type="submit">
                  Sign In
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-5 flex flex-col gap-2">
            <Button
              className="w-full flex gap-2 "
              variant="outline"
              onClick={async () => {
                await signIn("google");
              }}
            >
              <FaGoogle className="text-[20px]" />
              Sign in with Google
            </Button>

            <Button
              className="w-full flex gap-2 "
              variant="outline"
              onClick={async () => {
                await signIn("discord");
              }}
            >
              <FaGoogle className="text-[20px]" />
              Sign in with Discord
            </Button>

            <Button
              className="w-full flex gap-2"
              variant="outline"
              onClick={async () => {
                await signIn("github");
              }}
            >
              <FaGithub className="text-[20px]" />
              Sign in with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
