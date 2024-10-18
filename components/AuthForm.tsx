"use client";
import HorizonLogo from "./HorizonLogo";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      password: "",
    },
  });

  // Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }

    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <HorizonLogo />
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-grey-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {/* {user ? ( */}
        <div className="flex flex-col gap-4">
        <PlaidLink user={user} variant="primary" />
        </div>
      {/* ) : ( */}
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="First Name"
                      placeholder="Enter your first name"
                      name="firstName"
                    />

                    <CustomInput
                      control={form.control}
                      label="Last Name"
                      placeholder="Enter your last name"
                      name="lastName"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    label="Address"
                    placeholder="Enter your specific address"
                    name="address1"
                  />

                  <CustomInput
                    control={form.control}
                    label="City"
                    placeholder="Enter your city"
                    name="city"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="State"
                      placeholder="Example: NY"
                      name="state"
                    />

                    <CustomInput
                      control={form.control}
                      label="Postal Code"
                      placeholder="Example: 11101"
                      name="postalCode"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                      name="dateOfBirth"
                    />

                    <CustomInput
                      control={form.control}
                      label="SSN"
                      placeholder="Example: 1234"
                      name="ssn"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                label="Email"
                placeholder="Enter your email"
                name="email"
              />
              <CustomInput
                control={form.control}
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center items-center gap-1">
            <p className="flex justify-center gap-1">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
