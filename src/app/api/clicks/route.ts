import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type ClickDoc = { _id: string; count: number };

export async function GET() {
  const db = await getDb();
  const docs = await db.collection<ClickDoc>("clicks").find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
