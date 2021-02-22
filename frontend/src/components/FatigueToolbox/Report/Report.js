import { jsPDF as JSPDF } from 'jspdf';
import 'jspdf-autotable';
import engineeringToolboxLogo from './LOGO.png';
import { theme } from '../../../style';

class FatigueReport {
  constructor(name, surname, projectName, additionalComments) {
    this.name = name;
    this.surname = surname;
    this.projectName = projectName;
    this.additionalComments = additionalComments || '';
    this.doc = new JSPDF('p', 'px', 'a4');
    this.yPos = 0;
    this.xPos = 25;
  }

  static getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  addDocumentLayout() {
    const noOfPages = this.doc.internal.getNumberOfPages();
    const logo = new Image();
    const nameDistance = (this.name.length + this.surname.length) * 6 + 10;
    const currentDate = FatigueReport.getCurrentDate();
    const dateDistance = currentDate.length * 8 + 10;
    const offsetDistance = nameDistance > dateDistance ? nameDistance : dateDistance;
    logo.src = engineeringToolboxLogo;
    for (let i = 0; i < noOfPages; i++) {
      this.doc.setPage(i + 1);
      const pageWidth = this.doc.internal.pageSize.getWidth();
      this.doc.addImage(logo, 'PNG', 1, 1, 146, 43);
      this.doc.setFontSize(14);
      this.doc.setTextColor(theme.logoColorHover);
      this.doc.text(10, 50, 'Fatigue Toolbox');
      this.doc.setTextColor('black');
      this.doc.setFontSize(12);
      this.doc.text(pageWidth - offsetDistance, 26, `Author: ${this.name} ${this.surname}`);
      this.doc.text(pageWidth - offsetDistance, 43, `Date: ${FatigueReport.getCurrentDate()}`);
      this.doc.line(10, 60, pageWidth - 5, 60); // horizontal lines
      // Apply footer information

      const str = `Page ${i + 1} of ${noOfPages} ${'Fatigue Toolbox'}-${'1.0'}`;
      this.doc.setFontSize(10); // optional
      this.doc.text(str, 50, this.doc.internal.pageSize.height - 10);
    }
  }

  fatigueTable(dataTable, unit) {
    this.doc.autoTable({
      headStyles: {
        valign: 'middle', halign: 'center', fillColor: ['#E3E2DF'], textColor: [0, 0, 0], fontSize: 8,
      },
      columnStyles: {
        0: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        1: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        2: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        3: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        4: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        5: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        6: { halign: 'center', fillColor: [255, 255, 255], textColor: [0, 0, 0] },
      },
      columns: [{ header: `Min.Stress,${unit}` }, { header: `Max.Stress,${unit}` }, { header: `Alt.Stress,${unit}` }, { header: `Mean Stress,${unit}` }, { header: `Fatigue Stress,${unit}` }, { header: 'Required cycles' }, { header: 'Damage' }],
      body: dataTable.map((row) => row.map((item) => item.toFixed(2))),
      startY: 110,
      showHead: 'everyPage',
      theme: 'grid',
      margin: {
        top: 65,
      },
    });
  }

  saveDoc() {
    this.doc.save('Fatigue_Analysis_Report.pdf');
  }
}

export const fatReport = (name, surname, projectName, additionalComments) => new FatigueReport(name, surname, projectName, additionalComments);

// export function CreateFIVreport(
//   projectName,
//   description,
//   ifAddComments,
//   addComments,
//   author,
// ) {
//   this.projectName = projectName;
//   this.description = description;
//   this.ifAddComments = ifAddComments;
//   this.addComments = '' || addComments;
//   this.doc = new jsPDF('p', 'px', 'a4');
//   this.yPos = 0;
//   this.xPos = 30;
//   this.author = author;
// }

// CreateFIVreport.prototype.getReportDetails = function () {
//   console.log(`Project name: ${this.projectName}
//     Description: ${this.description}
//     Additional comments?: ${this.ifAddComments}
//     Additional comments: ${this.addComments}
//     If GVF plot: ${this.ifGFVplot}
//     If Velocity plot: ${this.ifVelocityPlot}
//     If Mixture plot: ${this.ifMixturePlot}
//     `);
// };

// CreateFIVreport.prototype.addDocInfo = function (appTitle, appVersion) {
//   const noOfPages = this.doc.internal.getNumberOfPages();
//   const logo = new Image();
//   logo.src = companyLogo;
//   for (let i = 0; i < noOfPages; i++) {
//     // Apply header information
//     this.doc.setPage(i + 1);
//     const pageWidth = this.doc.internal.pageSize.getWidth();
//     this.doc.addImage(logo, 'PNG', 1, 1, 150, 50);
//     this.doc.setFontSize(fontSize.fontStandardPlus);
//     this.doc.setTextColor(color.loggedUser);
//     this.doc.text(35, 50, appTitle);
//     this.doc.setTextColor(color.black);
//     this.doc.setFontSize(fontSize.fontStandard);
//     this.doc.text(pageWidth - 150, 26, `Author: ${this.author}`);
//     this.doc.text(pageWidth - 150, 43, `Date: ${getCurrentDate()}`);
//     this.doc.line(10, 60, pageWidth - 10, 60); // horizontal lines
//     // Apply footer information

//     const str = `Page ${i + 1} of ${noOfPages} ${appTitle}-${appVersion}`;
//     this.doc.setFontSize(10); // optional
//     this.doc.text(str, 50, this.doc.internal.pageSize.height - 10);
//   }
// };

// CreateFIVreport.prototype.addDocumentSummary = function () {
//   this.doc.setFontSize(fontSize.fontH6);
//   this.doc.setTextColor(color.loggedUser);
//   this.doc.setFontType('bold');
//   this.yPos += 90;
//   this.doc.text(this.xPos, this.yPos, 'Summary');
//   this.doc.autoTable({
//     columnStyles: { 0: { textColor: color.loggedUser, cellWidth: 80 } },
//     body: [
//       ['Project Name', this.projectName],
//       ['Description', this.description],
//       ['Additional comments', this.ifAddComments ? this.addComments : 'n/a'],
//     ],
//     startY: 110,
//     theme: 'striped',
//     margin: {
//       top: 65,
//     },
//   });

//   this.yPos = this.doc.lastAutoTable.finalY - 50;
// };

// CreateFIVreport.prototype.setHeaderFont = function () {
//   this.doc
//     .setTextColor(color.loggedUser)
//     .setFontType('bold')
//     .setFontSize(fontSize.fontH6);
// };

// CreateFIVreport.prototype.addPdfPage = function () {
//   if (this.yPos > 250) {
//     this.doc.addPage();
//     this.yPos = 0;
//   }
// };

// CreateFIVreport.prototype.addChart = function (figureRef, title) {
//   this.addPdfPage();
//   this.yPos += 100;
//   this.setHeaderFont();
//   this.doc.text(this.xPos, this.yPos, title);
//   this.yPos += 20;
//   const imgData = figureRef.toDataURL('image/png');
//   this.doc.addImage(imgData, 'PNG', this.xPos, this.yPos, 380, 156);
//   this.yPos += 160 - 40;
// };

// CreateFIVreport.prototype.addInfo = function () {
//   this.addDocInfo('FIV Screening Application', '1.0');
// };

// CreateFIVreport.prototype.saveReport = function () {
//   this.addDocInfo('FIV Screening Application', '1.0');
//   this.doc.save('FIV_LOF_Screening_Report.pdf');
// };
