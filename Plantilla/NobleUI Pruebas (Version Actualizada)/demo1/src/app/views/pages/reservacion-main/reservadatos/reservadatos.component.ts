import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Reservaciones } from '../../Model/Reservaciones';
import { Cliente } from '../../Model/Clientes';
import { Encargados } from '../../Model/Encargados';

@Component({
  selector: 'app-reservadatos',
  templateUrl: './reservadatos.component.html',
  styleUrls: ['./reservadatos.component.scss']
})
export class ReservadatosComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer!: ElementRef;
  errorMessage: string;

  constructor(private service: ServicesService, 
    private router:Router,) { }

  ngOnInit(): void {
    this.generatePDF();
  }

  generatePDF(): void {
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
        80,
        80
      );
  
      // Agregar texto
      doc.setFontSize(30);
      doc.setFont('', 'normal');
      doc.setTextColor('#004447');
      doc.text('Datos de su reservación', 10, 30);
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
    
  
    
    this.service
      .getDatosReservacion(parseInt(localStorage.getItem('idR')!.toString()))
      .subscribe(
        (response: Reservaciones[]) => {
          const DATA1: Reservaciones = response[0];

          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 53, doc.internal.pageSize.getWidth() - 10, 53);
          doc.setFontSize(18);
          const pageWidth = doc.internal.pageSize.width;
          doc.setTextColor(40);
          doc.setTextColor(40);
          doc.setDrawColor(0, 0, 0);
          doc.setLineWidth(0.5);
          // Agregar datos de la factura
          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Reservación Nº", 10, 60);

          doc.setFontSize(13); 
          doc.setFont("Pacifico", "normal");
          doc.text(DATA1.rese_Id.toString(), 24, 64);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Información de la reservación", 60, 60);

          doc.setFontSize(13); 
          doc.setFont("Pacifico", "Normal");
          doc.text("N# de participantes: " + DATA1.rese_Cantidad, 63, 64);
        
          doc.setFontSize(13); 
          doc.setFont("Pacifico", "Normal");
          doc.text("Fecha reservación: " + DATA1.rese_FechaReservacion, 120, 64);


          doc.setFontSize(12);

          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 70, doc.internal.pageSize.getWidth() - 10, 70);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Información del cliente", 60, 78);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Cliente id: ", 10, 78);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(DATA1.clie_id.toString(), 16, 82);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Nombre: ${DATA1.clie_NombreCompleto}`, 63, 82);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`DNI: ${DATA1.clie_DNI}`, 120, 82);
          
          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Email: ${DATA1.clie_Email}`, 63, 88);
          // Agregar más datos según sea necesario
          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 94, doc.internal.pageSize.getWidth() - 10, 94);


          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Información de la actividad", 60, 102);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Actividad id: ", 10, 102);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(DATA1.acti_Id.toString(), 16, 106);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Nombre: ${DATA1.acti_Nombre}`, 63, 106);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Precio : ${DATA1.acti_Precio}LPS/P`, 120, 106);
          
          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 112, doc.internal.pageSize.getWidth() - 10, 112);



          
          header(doc);
          footer(doc);
          const headerColor = '#F49334';



          this.service
          .getEncargadosByIdReport2(DATA1.acti_Id)
          .subscribe(
            (response: Encargados[]) => {
              const data = response.map((Encarga: Encargados) => [
                Encarga.nombreCompletoEnca,
                Encarga.enca_Telefono,
                Encarga.enca_Email
              ]);


              (doc as any).autoTable({
                head: [['Nombres encargados', 'DNI encargados', 'Email encargados']],
                body: data,         
                startY: 130,
                margin: { top: 10 },
                theme: 'grid', // Aplica un tema (opcional)
                  styles: {
                    headStyles: {
                      fillColor: headerColor, // Cambia el color de relleno de la barra de encabezado
                      textColor: '#F49334', // Cambia el color del texto de la barra de encabezado
                    },
                  },
              });
              doc.text('Información sobre los encargados de la actividad: ', 14, 125); 
              
              const secondTableY = (doc as any).autoTable.previous.finalY + 10;


          

          this.service
          .getClientesByIdRese(parseInt(localStorage.getItem('idR')!.toString()))
          .subscribe(
            (response: Cliente[]) => {
              console.log(response);
              const clientesData = response.map(element => [
                element.clie_Nombres,
                element.clie_Apellidos,
                element.clie_DNI,
                element.clie_Email
              ]);
              doc.text('Participantes de la actividad: ', 14, secondTableY);
              
              (doc as any).autoTable({
                head: [[ 'Nombres', 'Apellidos', 'DNI', 'Email']],
                body: clientesData,
                startY: secondTableY + 10, // Ajusta el valor de desplazamiento vertical según tus necesidades
                margin: { top: 200, right: 15, bottom: 10 },
                theme: 'grid',
                styles: {
                  headStyles: {
                    fillColor: headerColor,
                    textColor: '#F49334',
                  },
                },
              });

                     


             
        
              // Mostrar el PDF en el visor
              const pdfDataUri = doc.output('datauristring');
              this.pdfViewer.nativeElement.src = pdfDataUri;
            },
            (error: any) => {
              this.errorMessage = 'Se produjo un error al obtener los datos de los empleados.';
              console.error(error);
            }
          );
            });
        })
  }

  Regresar(){
    this.router.navigate(['reservaciones']);
  }

}
