import { Resend } from "resend";
import {EmailTemplate} from "../../../components/Email/EmailTemplate"
import { NextRequest,NextResponse } from "next/server";
const resend = new Resend("re_NHPwJdrP_GJz7b3ywWhNWeQBLqXbhPhAN");

export async function POST(req:NextRequest) {
    const body = await req.json()
    console.log("body is " + body)
    return NextResponse.json( body );
    // const {firstName,lastName,email,phone,message} = body
    // console.log(firstName,lastName,email,phone,message)
    // try {
    //   const data = await resend.sendEmail({
    //     from: "noreply@alhas.me",
    //     to: email,
    //     subject: "hello world",
    //     react: EmailTemplate({ firstName: firstName, product: message }),
    //   });
  
    //   res.status(200).json({ data });
    // } catch (error) {
    //   res.status(500).json({ error });
    // }
  }
  