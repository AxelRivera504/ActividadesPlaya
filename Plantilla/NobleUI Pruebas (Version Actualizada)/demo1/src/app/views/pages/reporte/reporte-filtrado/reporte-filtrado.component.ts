import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import { MantenimientoXEquipo } from '../../Model/MantenimientoXEquipo';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

    const almacenado = localStorage.getItem('fechas');
    const arregloFechas = almacenado ? JSON.parse(almacenado) : [];
    console.log(arregloFechas)

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
        -12,
        80,
        80
      );
  
 // Agregar texto con más margen superior
 doc.setFontSize(30);
 doc.setFont('Pacifico', 'normal');
 doc.text('Mantenimiento de Equipos', 10, 20); // Ajustar el valor para mover el texto hacia arriba
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
      { header: 'Equipo ID', dataKey: 'equi_Id' },
      { header: 'Mantenimiento ID', dataKey: 'mant_Id' },
      { header: 'Descripción Equipo', dataKey: 'equi_Descripcion' },
      { header: 'Descripción Mantenimiento', dataKey: 'mant_Descricion' },
      { header: 'Fecha del mantenimiento', dataKey: 'maeq_FechaCreacion' },
    ] as { header: string; dataKey: keyof MantenimientoXEquipo }[];
  
    doc.setFontSize(18);
    const pageWidth = doc.internal.pageSize.width;
    doc.setTextColor(40);
    doc.setTextColor(40);
  
    // Llamar a las funciones de encabezado y pie de página
    header(doc);
    footer(doc);
  
    const startY = 60;
    const rowHeight = 20;
  
    // Obtener el contenido de la tabla en formato adecuado
    const tableContent = mantenimientos.map((mantenimiento) =>
      columns.map((column) => mantenimiento[column.dataKey])
    );
  
    // Agregar la tabla al documento PDF
    (doc as any).autoTable({
      head: [columns.map((column) => column.header)],
      body: tableContent,
      startY: startY,
    });
  
    // Generar el PDF
    const pdfOutput = doc.output('blob');
  
    // Crear una URL a partir del blob
    const url = URL.createObjectURL(pdfOutput);
  
    // Mostrar el PDF en el visor
    this.pdfViewer.nativeElement.src = url;
  }
}
