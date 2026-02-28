const PDFDocument = require('pdfkit');
const fs = require('fs');

function createInvoice(invoiceData) {
    const doc = new PDFDocument();
    const invoicePath = `invoice_${invoiceData.invoiceNumber}.pdf`;

    // Pipe its output somewhere, like to a file or to a web response
    doc.pipe(fs.createWriteStream(invoicePath));

    // Draw a title
    doc.fontSize(25).text('Invoice', { align: 'center' });
    doc.moveDown();

    // Add some details about the invoice
    doc.fontSize(12).text(`Invoice Number: ${invoiceData.invoiceNumber}`);
    doc.text(`Date: ${invoiceData.date}`);
    doc.text(`Client: ${invoiceData.client}`);
    doc.moveDown();

    // Add items
    invoiceData.items.forEach(item => {
        doc.text(`${item.name}: $${item.price.toFixed(2)}`);
    });
    doc.moveDown();

    // Total
    const total = invoiceData.items.reduce((sum, item) => sum + item.price, 0);
    doc.fontSize(14).text(`Total: $${total.toFixed(2)}`, { align: 'right' });

    // Finalize PDF file
    doc.end();

    return invoicePath;
}

module.exports = { createInvoice };