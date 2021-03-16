import { jsPDF as JSPDF } from 'jspdf';
import 'jspdf-autotable';
import engineeringToolboxLogo from './LOGO.png';
import { theme } from '../../../style';

class FatigueReport {
  constructor(name, surname, projectName, additionalComments, fatigueState) {
    this.name = name;
    this.surname = surname;
    this.projectName = projectName;
    this.additionalComments = additionalComments.trim() || '';
    this.doc = new JSPDF('p', 'px', 'a4');
    this.yPos = 0;
    this.xPos = 25;
    this.state = fatigueState;
  }

  static getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  addSummarySection() {
    const {
      unitSystem, surfaceFactor, loadFactor, reliabilityFactor, userDefinedFactor,
      ultimateStrength, fatigueTheory, yieldStrength,
    } = this.state;
    this.doc.setFontSize('16');
    this.doc.setTextColor(theme.logoColor);
    this.yPos += 90;
    this.doc.text(this.xPos, this.yPos, 'Summary');
    this.doc.autoTable({
      columnStyles: { 0: { textColor: theme.logoColor, cellWidth: 80 } },
      body: [
        ['Porject name', this.projectName],
        ['Unit', unitSystem],
        ['Surface finish', surfaceFactor.isrequired ? this.state.surfaceFactor.value : 'n/a'],
        ['Load type', loadFactor.isrequired ? this.state.loadFactor.value : 'n/a'],
        ['Reliability Level', reliabilityFactor.isrequired ? this.state.reliabilityFactor.value : 'n/a'],
        ['User Defined Factor', userDefinedFactor.isrequired ? parseFloat(this.state.userDefinedFactor.value).toFixed(3) : 'n/a'],
        ['Ultimate strength', ultimateStrength],
        ['Yield strength', fatigueTheory === 'SODERBERG' ? yieldStrength : 'n/a'],
        ['Fatigue theory', fatigueTheory],
        ['Cumulative damage', this.state.results.summary.totalDamage.toFixed(3)],
        ['Modification factor', this.state.results.summary.modificationFactor.toFixed(3)],
        ['Additional comments', this.additionalComments ? this.additionalComments : 'n/a'],

      ],
      startY: 110,
      theme: 'striped',
      margin: {
        top: 65,
      },
    });
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
      this.doc.addImage(logo, 'PNG', 8, 0, 146, 43);
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

  addfatigueTable(unit) {
    this.doc.setFontSize('16');
    this.doc.setTextColor(theme.logoColor);
    this.yPos += 90;
    this.doc.text(this.xPos, this.yPos, 'Analysis results');
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
      body: this.state.results.excelData.map((row) => row.map((item) => item.toFixed(2))),
      startY: 110,
      showHead: 'everyPage',
      theme: 'grid',
      margin: {
        top: 65,
      },
    });
  }

  addChart(figureRef, title) {
    this.yPos += 250;
    this.doc.text(this.xPos, this.yPos, title);
    this.yPos += 20;
    const imgData = figureRef.toDataURL('image/png');
    this.doc.addImage(imgData, 'PNG', this.xPos, this.yPos, 385, 236);
    this.yPos += 200 - 40;
    this.doc.addPage();
    this.yPos = 0;
  }

  saveDoc() {
    this.doc.save('Fatigue_Analysis_Report.pdf');
  }
}

export const fatReport = (name, surname, projectName, additionalComments, fatigueState) => new FatigueReport(name, surname, projectName, additionalComments, fatigueState);
