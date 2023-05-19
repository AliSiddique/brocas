import { handleAuth } from "@auth0/nextjs-auth0";
import type { NextRequest } from "next/server";
export async function POST(req:NextRequest) {

 handleAuth();
}