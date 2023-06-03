import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import { MantenimientoXEquipo } from '../../Model/MantenimientoXEquipo';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-reporte-filtrado',
  templateUrl: './reporte-filtrado.component.html',
  styleUrls: ['./reporte-filtrado.component.scss']
})
export class ReporteFiltradoComponent implements OnInit {
  MantenimientoXEquipo!: MantenimientoXEquipo[];

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    const getReporte = localStorage.getItem('reporteData');
    if (getReporte) {
      this.MantenimientoXEquipo = JSON.parse(getReporte);
      console.log(getReporte);
      setTimeout(() => {

      });
    }
  }

  generarPDF(): void {
    const documentDefinition: any = {
      content: [] as any[]
    };
  
    // Itera sobre cada objeto del arreglo MantenimientoXEquipo
    this.MantenimientoXEquipo.forEach(mantenimiento => {
      // Agrega la descripción del equipo y la descripción del mantenimiento al contenido del PDF
      documentDefinition.content.push(
        { text: 'Equipo: ' + mantenimiento.equi_Descripcion, style: 'header' },
        { text: 'Mantenimiento: ' + mantenimiento.mant_Descricion, style: 'subheader' },
        { text: '\n' }
      );
    });
  
    // Genera el PDF y ábrelo en un nuevo tab del navegador
    pdfMake.createPdf(documentDefinition).open();
  }
  
  

}
