import { promises as fs } from "fs"; // Menggunakan promises version dari fs
import path from "path";
import { NextResponse } from "next/server"; // Untuk membuat response

// Penting: Karena kita membaca file dari filesystem,
// kita perlu menggunakan runtime Node.js, bukan Edge runtime default.
export const runtime = "nodejs";

export async function GET() {
  const filename = "SyaidAndhika-resume.pdf";
  // Path absolut ke file di folder public
  const filePath = path.join(process.cwd(), "public", "resume", filename);

  try {
    // Periksa apakah file ada dan bisa dibaca
    await fs.access(filePath, fs.constants.R_OK);

    // Baca file secara asinkron
    const fileBuffer = await fs.readFile(filePath);

    // Buat response dengan header Content-Disposition
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf", // Tipe MIME file Anda
        "Content-Disposition": `attachment; filename="${filename}"`, // Header yang memaksa download
      },
    });

    return response;
  } catch (error) {
    console.error("Error downloading resume:", error);
    // Jika file tidak ditemukan atau ada error lain saat membaca file
    return NextResponse.json(
      { message: "Resume file not found or error reading file." },
      { status: 404 } // Status 404 Not Found jika file tidak ada
    );
  }
}
