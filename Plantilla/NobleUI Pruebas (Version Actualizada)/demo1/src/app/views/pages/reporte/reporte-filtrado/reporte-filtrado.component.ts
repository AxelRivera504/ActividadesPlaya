import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import { MantenimientoXEquipo } from '../../Model/MantenimientoXEquipo';
import 'jspdf-autotable';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reporte-filtrado',
  templateUrl: './reporte-filtrado.component.html',
  styleUrls: ['./reporte-filtrado.component.scss']
})
export class ReporteFiltradoComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer!: ElementRef;
  errorMessage: string;
  MantenimientoXEquipo!: MantenimientoXEquipo[];

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    const getReporte = localStorage.getItem('reporteData');
    if (getReporte) {
      this.MantenimientoXEquipo = JSON.parse(getReporte);
      console.log(getReporte);
      setTimeout(() => {
        this.generatePDF();
      });
    }
  }
  
  generatePDF(): void {
    const doc = new jsPDF();

    const header = function (doc: any) {
      doc.setFontSize(18);
      const pageWidth = doc.internal.pageSize.width;
      doc.setTextColor(40);

      // Agregar imagen
      doc.addImage(
        'https://i.ibb.co/ZddkzHw/Green-Yellow-Abstract-Summers-Island-Logo-1.png',
        'png',
        pageWidth - 70,
        -15,
        80,
        80
      );

      // Agregar texto
      doc.setFontSize(30);
      doc.setFont('Pacifico', 'normal');
      doc.text('Mantenimiento de Equipos', 10, 30);
    };

    const footer = function (doc: any) {
      doc.setFontSize(12);
      doc.setFont('Pacifico', 'normal');
      doc.text(
        '¡Gracias por utilizar nuestro servicio de mantenimiento de equipos!',
        60,
        doc.internal.pageSize.height - 10
      );

      doc.setFontSize(12);
      doc.setFont('Pacifico', 'normal');
      doc.text(
        '¡Equipo mágico te desea un excelente mantenimiento!',
        45,
        doc.internal.pageSize.height - 20
      );
    };

    const mantenimientos: MantenimientoXEquipo[] = this.MantenimientoXEquipo;
    const columns = [
      { header: 'ID', dataKey: 'maeq_Id' },
    ] as { header: string; dataKey: keyof MantenimientoXEquipo }[];

    doc.setFontSize(18);
    const pageWidth = doc.internal.pageSize.width;
    doc.setTextColor(40);
    doc.setTextColor(40);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);

    // Llamar a las funciones de encabezado y pie de página
    header(doc);
    footer(doc);

    const tableData = mantenimientos.map((mantenimiento: MantenimientoXEquipo) => ({
      maeq_Id: mantenimiento.maeq_Id.toString(),
    }));

    (doc as any).autoTable({
      head: columns.map((column) => column.header),
      body: tableData,
      startY: 60,
      margin: { top: 10 },  
    });

    // Generar el PDF
    const pdfOutput = doc.output('blob');

    // Crear una URL a partir del blob
    const url = URL.createObjectURL(pdfOutput);

    // Mostrar el PDF en el visor
    this.pdfViewer.nativeElement.src = url;
  }
}
