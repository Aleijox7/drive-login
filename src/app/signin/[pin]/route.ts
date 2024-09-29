import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(req: NextRequest, { params: { pin } }: { params: { pin: string } }) {
    cookies().set("pin", pin, {
        maxAge: 120,
    });

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard`)
}
