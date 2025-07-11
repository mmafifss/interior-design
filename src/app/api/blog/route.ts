import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/modules/BlogModel";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

// Pastikan koneksi DB berjalan saat file dijalankan
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(req: NextRequest) {
  console.log("Blog get Hit");
  return NextResponse.json({ msg: "api working" });
}

export async function POST(request: NextRequest) {
  console.log("POST request received");

  try {
    const contentType = request.headers.get("content-type");
    console.log("Content-Type:", contentType);

    if (!contentType || !contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Content-Type must be multipart/form-data for file upload" },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    console.log("FormData parsed successfully");

    const timestamp = Date.now();
    const image = formData.get("coverImage") as File | null;

    if (!image) {
      console.log("No image provided");
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;

    await writeFile(path, new Uint8Array(buffer));
    const imgUrl = `/${timestamp}_${image.name}`;

    const title = formData.get("title")?.toString() || "";
    const excerpt = formData.get("excerpt")?.toString() || "";
    const slug = formData.get("slug")?.toString() || "";
    const readingTime = formData.get("readingTime")?.toString() || "";

    const blogData = {
      title,
      excerpt,
      slug,
      readingTime,
      coverImage: imgUrl,
    };

    await BlogModel.create(blogData);
    console.log("Blog saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error: any) {
    console.error("POST handler error:", error);
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
