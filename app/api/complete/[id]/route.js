import connectDB from "@/dbConfig/dbConfig";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request = new NextRequest(), {params}){
    const {id} = params;
    const { isCompleted : isCompleted} = await request.json();
    await connectDB();
    await Topic.findByIdAndUpdate(id, {isCompleted});
    return NextResponse.json({message:"Topic marked as complete."}, {status:200});
}