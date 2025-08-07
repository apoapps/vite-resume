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
      // Create a clone of the element to avoid affecting the original
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Create a temporary container
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-9999px';
      tempContainer.style.left = '-9999px';
      tempContainer.style.width = `${this.LETTER_WIDTH}px`;
      tempContainer.style.height = `${this.LETTER_HEIGHT}px`;
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = '#ffffff';
      
      // Style the clone for proper rendering
      clone.style.transform = 'scale(1)';
      clone.style.transformOrigin = 'top left';
      clone.style.margin = '0';
      clone.style.padding = '0';
      clone.style.width = `${this.LETTER_WIDTH}px`;
      clone.style.height = `${this.LETTER_HEIGHT}px`;
      
      // Force light theme for PDF export
      clone.classList.remove('dark');
      const darkElements = clone.querySelectorAll('.dark\\:bg-gray-900, .dark\\:bg-gray-800, .dark\\:text-white, .dark\\:text-gray-300');
      darkElements.forEach((el) => {
        (el as HTMLElement).classList.forEach(className => {
          if (className.startsWith('dark:')) {
            el.classList.remove(className);
          }
        });
      });
      
      // Append to document
      tempContainer.appendChild(clone);
      document.body.appendChild(tempContainer);
      
      // Wait for render
      await new Promise(resolve => setTimeout(resolve, 200));

      // Generate canvas from clone
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: this.LETTER_WIDTH,
        height: this.LETTER_HEIGHT,
        x: 0,
        y: 0,
      });

      // Clean up temporary container
      document.body.removeChild(tempContainer);

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