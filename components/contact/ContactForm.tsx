"use client";
import React from "react";
import { Label } from "@/components/contact/Label";
import { Input } from "@/components/contact/Input";
import { cn } from "@/utils/cn";
import { Textarea } from "./TextArea";
import FormSubmit from "./FormSubmit";
import { sendEmailAction } from "@/app/contact/actions";
import { useFormState } from "react-dom";
import { CheckIcon } from "@radix-ui/react-icons";

export function ContactForm() {
  const [state, formAction] = useFormState(sendEmailAction, {
    emailSent: false,
    errors: [],
  });

  return (
    <div className="w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input border-2 border-primary-8 bg-primary-1">
      <h2 className="font-bold text-xl text-primary-11">Send us an email</h2>

      <form id="contactform" className="mt-8 mb-4" action={formAction}>
        {state.errors.includes("send email") && (
          <p className="text-error-11">Failed to send email.</p>
        )}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label
              htmlFor="firstname"
              className={`${
                state.errors.includes("firstname") ? "text-error-11" : ""
              }`}
            >
              First name
            </Label>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              autoComplete="no_way"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label
              htmlFor="lastname"
              className={`${
                state.errors.includes("lastname") ? "text-error-11" : ""
              }`}
            >
              Last name
            </Label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              autoComplete="no_way"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="email"
            className={`${
              state.errors.includes("email") ? "text-error-11" : ""
            }`}
          >
            Email Address
          </Label>
          <Input id="email" type="email" name="email" autoComplete="no_way" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="message"
            className={`${
              state.errors.includes("message") ? "text-error-11" : ""
            }`}
          >
            Message
          </Label>
          <Textarea id="message" name="message" rows={5} cols={70} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-12">
          <Label
            htmlFor="phone"
            className={`${
              state.errors.includes("phone") ? "text-error-11" : ""
            }`}
          >
            Phone Number
          </Label>
          <Input id="phone" type="tel" name="phone" autoComplete="no_way" />
        </LabelInputContainer>

        {state.emailSent ? (
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 text-center">
            <div className="rounded-full p-1 bg-primary-9">
              <CheckIcon color="white" />
            </div>
            <p className="text-primary-9">Email sent!</p>
          </div>
        ) : (
          <FormSubmit />
        )}
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
