import RedisClient from "@/utils/redis";
import { NextRequest, NextResponse } from "next/server";
import {UserData} from "@/type";
import { cookies } from 'next/headers';

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const pin = body.pin as string;
    const token = cookies().get("oauth")?.value;

    if (!token) {
        return NextResponse.redirect("/")
    }

    const tokenData = JSON.parse(token);

    const stringUserData = await RedisClient.get(pin.toLowerCase()) as string
    const userData = JSON.parse(stringUserData) as UserData

    const newUserData = {
        ...userData,
        token: tokenData,
    }

    const ttl = await RedisClient.ttl(pin.toLowerCase())
    await RedisClient.set(pin.toLowerCase(), JSON.stringify(newUserData), 'EX', ttl)

    return NextResponse.json({ redirect: `${process.env.NEXT_PUBLIC_CLIENT_URL}/success` });
}