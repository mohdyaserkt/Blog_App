import { NextResponse } from "next/server"

export const GET = async(request)=>{

    return new NextResponse("its not works",{status:200});
};