"use server";

type FormState = {
  emailSent: boolean;
  errors: string[];
};

export async function sendEmailAction(
  prevState: FormState,
  formData: FormData
) {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const emailAddress = formData.get("email") as string;
  const message = formData.get("message") as string;
  let errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  if (!firstName || firstName.trim().length === 0) {
    errors.push("firstname");
  }

  if (!lastName || lastName.trim().length === 0) {
    errors.push("lastname");
  }

  if (
    !emailAddress ||
    emailAddress.trim().length === 0 ||
    !validateEmail(emailAddress.trim())
  ) {
    errors.push("email");
  }

  if (!message || message.trim().length === 0) {
    errors.push("message");
  }

  if (errors.length > 0) {
    return { emailSent: false, errors: errors };
  }

  const response = await fetch("http:localhost:3000/api/contact", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.message === "Error") {
    errors.push("send email");
    return { emailSent: false, errors };
  }

  return { emailSent: true, errors: [] };
}
