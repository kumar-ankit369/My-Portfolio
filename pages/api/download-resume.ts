import { NextApiRequest, NextApiResponse } from 'next';
import { jsPDF } from 'jspdf';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const doc = new jsPDF();
    const lineHeight = 7;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 15;
    let yPosition = margin;

    // Header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('KUMAR ANKIT', margin, yPosition);
    yPosition += 8;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('+91-8210480527 | anklivetolearn@gmail.com | Bangalore, Karnataka, India', margin, yPosition);
    yPosition += 8;

    doc.setDrawColor(100);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 6;

    // Content
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 6;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryLines = doc.splitTextToSize(
      'Computer Science student (Data Science specialization) with expertise in AI, Machine Learning, Deep Learning, and Full-Stack Development.',
      pageWidth - 2 * margin
    );
    summaryLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    yPosition += 4;
    doc.setFont('helvetica', 'bold');
    doc.text('SKILLS', margin, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'normal');
    doc.text('Languages: C, C++, Python, Java, HTML, JavaScript, SQL', margin, yPosition);
    yPosition += lineHeight + 2;

    doc.text('Technologies: ML, DL, generative AI, Next.js, MERN, Docker, Kubernetes', margin, yPosition);
    yPosition += lineHeight + 6;

    doc.setFont('helvetica', 'bold');
    doc.text('PROJECTS', margin, yPosition);
    yPosition += 6;

    doc.setFont('helvetica', 'normal');
    doc.text('• AI-Driven Marine Biodiversity Intelligence Platform', margin, yPosition);
    yPosition += lineHeight;
    doc.text('• SmartClass AI - Classroom Automation System', margin, yPosition);
    yPosition += lineHeight;
    doc.text('• Fed-EADP-LoRA: Privacy-Preserving Federated Learning', margin, yPosition);
    yPosition += lineHeight + 6;

    doc.setFont('helvetica', 'bold');
    doc.text('AWARDS', margin, yPosition);
    yPosition += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.text('• SIH Winner (College Level) - May 2025', margin, yPosition);
    yPosition += lineHeight;
    doc.text('• 4th Place - Srujana Hackathon - Oct 2025', margin, yPosition);

    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Kumar_Ankit_Resume.pdf"');
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
