import { sendMail } from "@/utils/send-mail";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let response = { message: "Invalid Request" };
  const data = await request.formData();
  const firstName = data.get("firstname") as string;
  const lastName = data.get("lastname") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  if (!firstName || !lastName || !email || !message) {
    response = { message: "Please fill out all required Fields." };
  } else {
    try {
      const res = await sendMail(firstName, lastName, email, message);
      response = { message: "Success" };
    } catch (error) {
      response = { message: "Error" };
    }
  }

  return Response.json(response);
}
