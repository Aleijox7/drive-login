import { Token, UserData } from "@/type";
import RedisClient from "@/utils/redis";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(request: NextRequest, response: NextResponse) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code") as string
    const [pin, clientId, clientSecret] = searchParams.get("state")?.split("|") as string[]
    const scope = searchParams.get("scope") as string

    const { data: token } = await axios.post<Token>("https://oauth2.googleapis.com/token", {
        client_id: clientId ?? process.env.NEXT_PUBLIC_CLIENT_ID as string,
        redirect_uri: `${process.env.NEXT_PUBLIC_CLIENT_URL}/callback`,
        client_secret: clientSecret ?? process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
        grant_type: "authorization_code",
        code,
        scope,
    })

    if (!token) {
        return NextResponse.redirect("/")
    }

    // Set all the oauth data on cookies
    cookies().set("oauth", JSON.stringify(token), {
        maxAge: token.expires_in
    });

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard`)
}
