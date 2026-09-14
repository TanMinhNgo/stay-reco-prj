'use client';

type PdfReport = {
  title: string;
  scope: string;
  reference?: string;
};

function pdfSafe(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/[()\\]/g, '\\$&');
}

function buildPdf({ title, scope, reference = 'StayReco Partner Portal' }: PdfReport) {
  const issuedAt = new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());
  const lines = [
    'STAYRECO',
    'BAO CAO VAN HANH KHACH SAN',
    '',
    pdfSafe(title).toUpperCase(),
    'Pham vi: ' + pdfSafe(scope),
    'Ma tham chieu: ' + pdfSafe(reference),
    'Thoi diem xuat: ' + pdfSafe(issuedAt),
    '',
    'Tai lieu duoc tao tu Partner Hotel Platform.',
    'Du lieu chi dung cho muc dich van hanh va doi soat noi bo.',
  ];
  const text = lines.map((line, index) => {
    const size = index === 0 ? 20 : index === 1 ? 11 : index === 3 ? 15 : 10;
    const color = index <= 1 || index === 3 ? '0.14 0.31 0.44 rg' : '0.24 0.28 0.33 rg';
    const font = index <= 1 || index === 3 ? '2' : '1';
    return color + ' BT /F' + font + ' ' + size + ' Tf 54 ' + (780 - index * 28) + ' Td (' + line + ') Tj ET';
  }).join('\n');
  const stream = 'q\n0.14 0.31 0.44 rg\n54 742 487 2 re f\nQ\n' + text + '\n0.9 0.92 0.94 RG\n54 96 m 541 96 l S\n0.4 0.45 0.5 rg BT /F1 8 Tf 54 76 Td (StayReco - tai lieu he thong) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
    '<< /Length ' + stream.length + ' >>\nstream\n' + stream + '\nendstream',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  ];
  let pdf = '%PDF-1.4\n% StayReco\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += String(index + 1) + ' 0 obj\n' + object + '\nendobj\n';
  });
  const xref = pdf.length;
  pdf += 'xref\n0 ' + String(objects.length + 1) + '\n0000000000 65535 f \n';
  offsets.slice(1).forEach((offset) => {
    pdf += String(offset).padStart(10, '0') + ' 00000 n \n';
  });
  pdf += 'trailer\n<< /Size ' + String(objects.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + String(xref) + '\n%%EOF';
  return pdf;
}

export function downloadPdfReport(report: PdfReport) {
  const baseName = pdfSafe(report.title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'stayreco-report';
  const blob = new Blob([buildPdf(report)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = baseName + '.pdf';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 500);
}
