import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export class PDFExporter {
  private readonly LETTER_WIDTH = 816;
  private readonly LETTER_HEIGHT = 1056;

  async exportToPDF(element: HTMLElement, fileName: string = 'resume.pdf'): Promise<void> {
    if (!element) {
      throw new Error('Element not found for PDF export');
    }

    try {
      // Store original transform
      const originalTransform = element.style.transform;
      element.style.transform = 'scale(1)';

      // Generate canvas from element
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: this.LETTER_WIDTH,
        height: this.LETTER_HEIGHT,
      });

      // Restore original transform
      element.style.transform = originalTransform;

      // Create PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
      });

      // Add image to PDF (US Letter: 8.5" x 11")
      pdf.addImage(imgData, 'PNG', 0, 0, 8.5, 11, undefined, 'FAST');
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Could not generate PDF. See console for details.');
    }
  }
}