import { NextResponse } from "next/server";

let cached: { count: number; timestamp: number } | null = null;

export async function GET() {
  const now = Date.now();
  const TEN_MIN = 10 * 60 * 1000;

  if (!cached || now - cached.timestamp > TEN_MIN) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
      );

      if (!res.ok) throw new Error("YouTube API error");
      const data = await res.json();

      const count = data.items[0].statistics.subscriberCount;
      cached = { count: Number(count), timestamp: now };
    } catch (err) {
      console.error("Failed to fetch subscriber count:", err);
      return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
  }

  return NextResponse.json({ subscribers: cached.count });
}