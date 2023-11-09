const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const pdfkit = require('pdfkit');
const ExcelJS = require('exceljs');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(express.json());
 
 
 
// Generate PDF and Excel files from static table data and send them as attachments via email
app.post('/generate-and-send', async (req, res) => {
  const { recipientEmail, fileFormat, filteredData } = req.body;
  // app.get('https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/LandscapeDetailsSet?sap-client=100')
  console.log(filteredData);
  try {
    // Read table data from JSON file
   
 
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
    console.log(tempDir)
    const tableData = filteredData;
 
    let attachmentPath, attachmentType;
    if (fileFormat === 'pdf') {
      // Generate PDF
     
      const pdfDoc = new pdfkit();
      pdfDoc.text('SAP Landscape Table\n\n');
      // pdfDoc.font('Helvetica-Bold');
      // pdfDoc.text('SAP Product', { continued: true, underline: true });
      // pdfDoc.text('\tSAP System ID', { continued: true, underline: true });
      // pdfDoc.text('\tSystem Description', { continued: true, underline: true });
      // pdfDoc.text('\tType', { continued: true, underline: true });
      // pdfDoc.text('\tEnvironment', {continued: true,  underline: true });
      // pdfDoc.text('\tDoes it run on a Hana database', { continued: true, underline: true });
      // pdfDoc.text('\tHANA', { underline: true });
      // pdfDoc.moveDown(0.5);
 
      // pdfDoc.font('Helvetica');
      attachmentPath = path.join(tempDir, 'table.pdf');
      tableData.forEach((row, index) => {
        console.log(row.Sapproduct, " ", row.Systype)
        pdfDoc.text(`${row.Sysid} ${row.Systype} ${row.Runhdb} ${row.Sapproduct}\n`);
        // pdfDoc.text(`${row.sap_prod}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.sap_sys_id}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.sys_desc}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.Type}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.Environment}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.run_hana}`, { continued: true });
        // pdfDoc.text('\t');
        // pdfDoc.text(`${row.HANA}`);
        // Draw horizontal gridline
        // pdfDoc.moveTo(0, pdfDoc.y + 10)
        //   .lineTo(pdfDoc.page.width, pdfDoc.y + 10)
        //   .stroke();
 
        // // Move down to the next line
        // if (index !== tableData.length - 1) {
        //   pdfDoc.moveDown();
        // }
      });
      pdfDoc.pipe(fs.createWriteStream(attachmentPath));
      pdfDoc.end();
      attachmentType = 'application/pdf';
    } else if (fileFormat === 'excel') {
      // Generate Excel
      attachmentPath = path.join(tempDir, 'table.xlsx');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');
      worksheet.columns = [
        { header: 'SAP Product', key: 'Sapproduct', width: 20 },
        { header: 'SAP System ID', key: 'Sysid', width: 20 },
        // { header: 'System Description', key: 'sys_desc', width: 30 },
        { header: 'Type', key: 'Systype', width: 20 },
        // { header: 'Environment', key: 'Environment', width: 30 },
        { header: 'Does it run on a Hana database', key: 'Runhdb', width: 30 },
        // { header: 'HANA', key: 'HANA', width: 20 },
      ];
      tableData.forEach((row) => {
        worksheet.addRow(row);
      });
      await workbook.xlsx.writeFile(attachmentPath);
      // await workbook.xlsx.writeFile(attachmentPath);
      attachmentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    } else {
      throw new Error('Invalid file format');
    }
 
    // Send email with generated file as attachment
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'spsr7109@gmail.com',
        pass: 'ozlenukwwdvfqucn',
      },
    });
    console.log("reached here");
    const mailOptions = {
      from: 'spsr7109@gmail.com',
      to: recipientEmail,
      subject: 'Table Data',
      text: 'Please find the attached file with table data.',
      attachments: [
        {
          filename: `table.${fileFormat === "excel" ? "xlsx" : "pdf"}`,
          path: attachmentPath,
          contentType: attachmentType,
        },
      ],
    };
 
    await transporter.sendMail(mailOptions);
 
    // Delete temporary file
    fs.unlinkSync(attachmentPath);
 
    res.json({ message: 'sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});