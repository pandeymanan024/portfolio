import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  if (!file) {
    return new NextResponse('No file uploaded', { status: 400 });
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  pages.forEach((page: typeof pages[number]) => {
    page.drawText('Enhanced by Manan', {
      x: 50,
      y: 30,
      size: 18,
      font,
      color: rgb(0.2, 0.4, 0.8),
      opacity: 0.5,
    });
  });
  const enhancedPdfBytes = await pdfDoc.save();
  return new NextResponse(enhancedPdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="enhanced_resume.pdf"',
    },
  });
}