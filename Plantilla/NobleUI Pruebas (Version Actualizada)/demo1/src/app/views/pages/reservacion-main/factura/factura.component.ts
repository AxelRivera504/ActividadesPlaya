import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import { FactuList } from '../../Model/ListaFactura';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer!: ElementRef;
  errorMessage: string;

  constructor(private service: ServicesService, 
    private router:Router,) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.generatePDF2();
    },150)
  }


  generatePDF2(): void {
    const doc = new jsPDF();
    const header = function (doc: any) {
      doc.setFontSize(18);
      const pageWidth = doc.internal.pageSize.width;
      doc.setTextColor(40);
      // Agregar imagen
      doc.addImage(
        'https://i.ibb.co/W3vSBmv/Green-Yellow-Abstract-Summers-Island-Logo-1-removebg-preview.png',
        'png',
        pageWidth - 70,
        -10,
        65,
        65
      );
  
      // Agregar texto
      doc.setFontSize(30);
      doc.setFont('Pacifico', 'normal');
      doc.text('FACTURA', 10, 30);
    };
  
    const footer = function (doc: any) {
      // Obtener las dimensiones del footer
      const footerHeight = 65; // Altura del footer en mm
    
      // Agregar imagen en el footer
      const imageUrl = 'https://i.ibb.co/jzbQb6B/14064375-5439134.jpg';
      const imageWidth = doc.internal.pageSize.getWidth();
      const imageHeight = footerHeight;
    
      doc.addImage(imageUrl, 'JPEG', 0, doc.internal.pageSize.getHeight() - footerHeight, imageWidth, imageHeight);
    
      // Agregar textos en el footer
      doc.setFontSize(16);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(0, 0, 0);  // Establecer color de texto en negro
    
      doc.text(
        '¡Gracias por preferirnos para sus actividades playeras!',
        35,
        doc.internal.pageSize.getHeight() - footerHeight + 25
      );
    
      doc.text(
        '¡Playa mágica les desea lo mejor en sus actividades playeras aventureros!',
        5,
        doc.internal.pageSize.getHeight() - footerHeight + 35
      );
    };
  
    console.log(localStorage.getItem('idF')!.toString());
    console.log(localStorage.getItem('array'))
    const arrayFromLocalStorage = JSON.parse(localStorage.getItem('array')!);
    console.log(arrayFromLocalStorage); 
    this.service
      .getFactura(parseInt(localStorage.getItem('idF')!.toString()))
      .subscribe(
        (response: FactuList[]) => {
          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 47, doc.internal.pageSize.getWidth() - 10, 47);
          const data: FactuList = response[0];
          doc.setFontSize(18);
          const pageWidth = doc.internal.pageSize.width;
          doc.setTextColor(40);
          doc.setTextColor(40);
          doc.setDrawColor(0, 0, 0);
          doc.setLineWidth(0.5);
          // Agregar datos de la factura
          doc.setFontSize(12);
          doc.setFontSize(16); 
          doc.setFont("Pacifico", "normal");
          doc.text("Información de la factura", 10, 54);

          doc.setFontSize(13); 
          doc.setFont("Pacifico", "normal");
          doc.text("Factura Nº: " + data.fuct_Id, 10, 58);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Empleado: "+ data.nombreCompleto , 100, 58);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Dirección empresa: San Pedro sula, Barrio san juan, a saber donde", 10, 62);

          doc.setFontSize(12);
          doc.text(`Fecha de Reservación: ${data.rese_FechaReservacion}`, 10, 66);
          
          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 73, doc.internal.pageSize.getWidth() - 10, 73);

          doc.setFontSize(16); 
          doc.setFont("Pacifico", "normal");
          doc.text("Información de la actividad", 10, 80);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Actividad-: "+ data.acti_Nombre , 10, 84);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Precio actividad:"+data.acti_Precio , 100, 84);
          
          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal"); 
         doc.text("Lugar de la actividad:", + 10, 88);

         doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal"); 
         doc.text("Departamento:"+data.dept_Descripcion +'- Municipio: '+data.muni_Descripcion+'- Dirección: '+data.dire_DireccionExacta +'- Playa: '+data.play_Playa,10, 92);
          
          doc.setFontSize(12);

          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 99, doc.internal.pageSize.getWidth() - 10, 99);
          // Agregar más datos según sea necesario
  
          // Llamar a las funciones de encabezado y pie de página
          header(doc);
          footer(doc);
          const headerColor = '#F49334';
          
          /*(doc as any).autoTable({
            head: [['ID', 'Nombres', 'Apellidos', 'DNI', 'Email']],
            body: arrayFromLocalStorage!.map((cliente: Cliente) => [
              cliente.clie_id,
              cliente.clie_Nombres,
              cliente.clie_Apellidos,
              cliente.clie_DNI,
              cliente.clie_Email,
            ]),           
            startY: 112,
            margin: { top: 10 },
            theme: 'grid', // Aplica un tema (opcional)
              styles: {
                headStyles: {
                  fillColor: headerColor, // Cambia el color de relleno de la barra de encabezado
                  textColor: '#F49334', // Cambia el color del texto de la barra de encabezado
                },
              },
          });*/

          (doc as any).autoTable({
            body: [
              ['SubTotal:', data.fuct_Subtotal],
              ['IVA:', data.fuct_Isv],
              ['TOTAL:', data.fuct_Total]
            ],
            startY: (doc as any).autoTable.previous.finalY + 1,
            margin: { top: 150, right: 15, bottom: 20, left: 115 },
            theme: 'grid',
            styles: {
              cellWidth: 'wrap',
              cellPadding: 2,
              fontSize: 10
            },
            columnStyles: {
              1: { cellWidth: 25 } // Elige el valor que necesites
            },
            headStyles: {
              fillColor: headerColor, // Cambia el color de relleno de la barra de encabezado
              textColor: '#F49334', // Cambia el color del texto de la barra de encabezado
            },
          });
         
          doc.text('Participantes de la actividad: ', 14, 106); 
  
          // Mostrar el PDF en el visor
          const pdfDataUri = doc.output('datauristring');
          this.pdfViewer.nativeElement.src = pdfDataUri;
        },
        (error: any) => {
          this.errorMessage = 'Se produjo un error al obtener los datos de los empleados.';
          console.error(error);
        }
      );
  }



  Regresar(){
    this.router.navigate(['reservaciones']);
  }
}
