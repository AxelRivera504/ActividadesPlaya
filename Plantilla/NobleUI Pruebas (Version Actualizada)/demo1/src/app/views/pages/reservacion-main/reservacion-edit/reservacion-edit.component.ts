import { Component, OnInit, ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../Model/Clientes';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import { Person, PeoplesData } from 'src/app/core/dummy-datas/peoples.data';
import { ClienteDdl } from '../../Model/ClienteDdl';
import { FormBuilder} from '@angular/forms';
import { Actividades } from '../../Model/Actividades';
import { ActividadesXFecha } from '../../Model/ActividadesXFecha';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { Reservaciones } from '../../Model/Reservaciones';
import { ClienteXReservacion } from '../../Model/ClienteXReservacion';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { metodospago } from '../../Model/metodospago';
import { Factura } from '../../Model/Factura';
import 'jspdf-autotable';
import { Encargados } from '../../Model/Encargados';
import jsPDF from 'jspdf';
import { FactuList } from '../../Model/ListaFactura';
import { ReportData } from '../../Model/ReportData';
import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';
import Swal from 'sweetalert2';

const fillJustifyNav = {
  htmlCode: 
`<ul ngbNav #fillJustifyNav="ngbNav" class="nav-tabs nav-fill">
  <li [ngbNavItem]="1">
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Home</h6>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Profile</h6>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="3">
    <a ngbNavLink>Contact</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Contact</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
        Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
        Duis pharetra et nisl at faucibus.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="4">
    <a ngbNavLink class="disabled">Disabled</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Disabled content</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="fillJustifyNav" class="border border-top-0 p-3"></div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

const defaultCard = {
  htmlCode: 
`<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" (click)="false" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}


@Component({
  selector: 'app-reservacion-edit',
  templateUrl: './reservacion-edit.component.html',
  styleUrls: ['./reservacion-edit.component.scss']
})
export class ReservacionEditComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer!: ElementRef;
  errorMessage: string;

  selectedDateX: NgbDate | null;

  basicModalCloseResult: string = '';
  modalRef: NgbModalRef | undefined;
  basicModalCode: any;

  actividades!: Actividades[];
  fillJustifyNavCode: any;
  validationForm1: UntypedFormGroup;
  validationForm2: UntypedFormGroup;

  selectedActivity: Actividades | null = null;
  defaultCardCode: any;
  reservaciones:Reservaciones = new Reservaciones()
  isForm1Submitted: Boolean;
  isForm2Submitted: Boolean;
  validar2: boolean = false;

  clientesForm: Cliente = new Cliente();
  submitted: boolean = false;
  submitte1: boolean = false;
  selectedDate: NgbDateStruct;
  form: FormGroup;
  Clientes!: ClienteDdl[];
  fechaValida: boolean = false;
  fechaFormatoValido: boolean = true;
  
  selectedPeople: any = null;
  clientesFromApi: any[] = [];
  people: Person[] = [];

  Actividad: ActividadesXFecha = new ActividadesXFecha();
  selectedDate1: NgbDateStruct;
  form3: FormGroup;
  submittedDate: boolean = false;
  fechaValida1: boolean = false;
  fechaFormatoValido1: boolean = true;

  metodos!: metodospago[];
  metodoSeleccionado: String;
  submittedMeto:boolean = false;
  reserva: Reservaciones = new Reservaciones();
  clienReser: ClienteXReservacion = new ClienteXReservacion();

  factu:Factura = new Factura();
  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;
  defaultPaginationCurrentPage = 1;
  itemsPerPage = 6;
  filteredActividades: any[] = [];
  searchTerm: string = '';

   XD: boolean = false;
   public isChecked: boolean = false;
   public isChecked2: boolean = false;
   isSelectionBlocked = false;
   fact_Id!: number;
   InfoFact!:[];
   clientesFac: Cliente = new Cliente()

   Activo: boolean = true;
   ExistsOrNot: boolean = false;


   /*Variables para el proceso de editar*/
   EstadoClientes:boolean = false;
   isCheckedEdit: boolean = true;
   @ViewChild('checkbox') checkbox: any;
   FechaFromApI: NgbDateStruct;
   ActividadFromAPI: Actividades | null = null;
   fechaSeleccionada: boolean = false;
   /*Variables para el proceso de editar*/
  constructor(private calendar: NgbCalendar,public formBuilder: UntypedFormBuilder,private router: Router, private service: ServicesService, private config: NgSelectConfig,private modalService: NgbModal) { 
    this.form = new FormGroup({
      clie_Sexo: new FormControl(null),
    });
    this.selectedDateX = null;
  }

  toggleSelection(): void {
    this.isSelectionBlocked = !this.isSelectionBlocked;
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
      .getDatosReservacion(parseInt(localStorage.getItem('idReservaEdit')!.toString()))
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
          .getEncargadosByIdReport2(this.selectedActivity!.acti_Id)
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
          .getClientesByIdRese(parseInt(localStorage.getItem('idReservaEdit')!.toString()))
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
      .getFactura(parseInt(localStorage.getItem('idFacturaEdit')!.toString()))
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
          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Numero", 10, 54);

          doc.setLineWidth(1); 
          doc.setDrawColor(0, 0, 0); 
          doc.line(10, 47, 50, 47);
          doc.setFontSize(13); 
          doc.setFont("Pacifico", "normal");
          doc.text(data.fuct_Id.toString(), 13, 58);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Información de la factura", 35, 54);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Empleado: "+ data.nombreCompleto , 37, 58);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Dirección empresa: San Pedro sula, Barrio san juan, a saber donde", 37, 62);

          doc.setFontSize(12);
          doc.text(`Fecha de Reservación: ${data.rese_FechaReservacion}`, 37, 66);
        

          doc.setFontSize(12);

          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 70, doc.internal.pageSize.getWidth() - 10, 70);

          doc.setFontSize(14); 
          doc.setFont("Pacifico", "bold");
          doc.text("Información del cliente", 10, 78);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Id del cliente: ${data.clie_id}`, 13, 82);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Nombre: ${data.clie_NombreCompleto}`, 13, 86);

          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`DNI: ${data.clie_DNI}`, 100, 86);
          
          doc.setFontSize(12);
          doc.setFont("Pacifico", "Normal");
          doc.text(`Email: ${data.clie_Email}`, 100, 82);
          // Agregar más datos según sea necesario
          doc.setLineWidth(1); // Establecer el grosor de la línea en 1 (puedes ajustar este valor según tus necesidades)
          doc.setDrawColor(0, 0, 0); // Establecer el color de la línea en negro (valores RGB: 0, 0, 0)
          doc.line(10, 91, doc.internal.pageSize.getWidth() - 10, 91);
  
          // Llamar a las funciones de encabezado y pie de página
          header(doc);
          footer(doc);
          const headerColor = '#F49334';
        
          this.service
          .getClientesByIdRese(parseInt(localStorage.getItem('idReservaEdit')!.toString()))
          .subscribe(
            (response: Cliente[]) => {
              console.log(response);
              const clientesData = response.map(element => [
                element.clie_id,
                element.clie_Nombres,
                element.clie_Apellidos,
                element.clie_DNI,
                element.clie_Email
              ]);
        
              (doc as any).autoTable({
                head: [['ID', 'Nombres', 'Apellidos', 'DNI', 'Email']],
                body: clientesData,
                startY: 112,
                margin: { top: 10 },
                theme: 'grid',
                styles: {
                  headStyles: {
                    fillColor: headerColor,
                    textColor: '#F49334',
                  },
                },
              });
        
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
        })
  }



  get minDate(): NgbDate {
    const today = this.calendar.getToday();
    return new NgbDate(today.year, today.month, today.day);
  }

  
  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date(); // Devuelve la fecha actual como valor predeterminado
  }

  convertToDate1(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }else{

      return new Date(); // Devuelve la fecha actual como valor predeterminado
    }
  }

  toggleCheckbox() {
    this.XD = !this.XD;
  }

  toggleCheckbox1() {
    this.service.getActividades().subscribe(data => {
      this.actividades = data;
      
      this.service.ListarInfoActividadSelected(parseInt(localStorage.getItem('idReservaEdit')!.toString())).subscribe(
        (data: any) => {
          console.log(data);
          if (data && data.length > 0) {
            this.selectedActivity = this.actividades.find(activity => activity.acti_Id === data[0].acti_Id) || null;
            
          } else {
            this.selectedActivity = null;
          }
        }
      );
    });
  }

  search(): void {
    this.filteredActividades = this.actividades.filter(item => {
      // Puedes ajustar la lógica de búsqueda según tus necesidades
      return item.acti_Nombre.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  getFilteredActividades() {
    if (this.searchTerm) {
      return this.actividades.filter(item =>
        item.acti_Nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return this.actividades;
    }
  }

  ConfirmarFactura(){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.reservaciones.rese_UsuarioCreador = idUsuario;
      this.factu.fuct_UsuarioCreador = idUsuario;
    }
    if(!this.metodoSeleccionado){
      return new Promise((resolve, reject) => {
        Swal.fire({
          titleText: '¿Desea pagar la reservación ahora?',
          position: 'center',
          showCancelButton: true,
          showConfirmButton: true,
          cancelButtonText: 'No',
          confirmButtonText: 'Si',
          timerProgressBar: true,
          icon: 'info'
        }).then((result) => {
          if (result.isConfirmed) {
            //El Usuario quiere pagar la factura y le imprimira en la factura el reporte de la información de la factura completa
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: 'Debe escoger un metodo de pago',
              icon: 'info'
            })        
            this.submittedMeto = true;
            this.Activo = true;           
            console.log("quiere pagar ahorita")
            
            resolve(true);
          }else if (result.dismiss === Swal.DismissReason.cancel) {
            //El Usuario no quiere pagar de momento la factura y le imprimira en la factura el reporte de la información de reseravación     
            console.log("No quiere pagar ahorita")      
            this.submittedMeto = false; //apagar alerta del metodo de pago
            if(this.ExistsOrNot){ //verificar con el chequeo de la fechas de la actividad si esta existe, Si existe hara un update y sino la insertara
              console.log("EXISTE EL ACTI")
              this.factu.rese_Id = parseInt(localStorage.getItem('idReservaEdit')!.toString());
              this.factu.mepa_id = 1;
              this.factu.fuct_Isv = 0;
              this.factu.fuct_Subtotal = 0;
              this.factu.fuct_Total = 0;
              this.service. UpdateFacturaNoPaga(this.factu).subscribe((data:any)=>{
                console.log(data.data.codeStatus)
                this.fact_Id = data.data.codeStatus;
                if(data.data.codeStatus >= 1){
                  this.wizardForm.goToNextStep();
                  this.LimpiarTodo()
                  this.generatePDF();
                }else{
                  Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    title: '¡ERROR!, ¡oh no!, hubo un error.',
                    icon: 'error'
                  })
                }
              })
            }else{//Aqui significa que la actividad No existe por lo cual se debe realalizar un insert a la BD
              console.log("NO EXISTE EL ACTI")
              this.factu.rese_Id = parseInt(localStorage.getItem('idReservaEdit')!.toString());
              this.factu.mepa_id = 1;
              this.factu.fuct_Isv = 0;
              this.factu.fuct_Subtotal = 0;
              this.factu.fuct_Total = 0;
              this.factu.fuct_Id = parseInt(localStorage.getItem('idFacturaEdit')!.toString());
              this.service. UpdateFacturaNoPaga(this.factu).subscribe((data:any)=>{
                console.log(data.data.codeStatus)
                this.fact_Id = data.data.codeStatus;
                if(data.data.codeStatus >= 1){
                  this.wizardForm.goToNextStep();
                  this.LimpiarTodo()
                  this.generatePDF();
                }else{
                  Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    title: '¡ERROR!, ¡oh no!, hubo un error.',
                    icon: 'error'
                  })
                }
              })
            }
            resolve(false);
          } else {
            //Solo cierra el modal al presionar fuera de el
            console.log("cerro el modal")
            reject();
          }
            });
          });
        }else{
             //El Usuario quiere pagar la factura y escogio el de un solo el metodo de pago y debe le imprimir la factura el reporte de la información de la factura completa
            //El Usuario no quiere pagar de momento la factura y le imprimira en la factura el reporte de la información de reseravación     
            this.submittedMeto = false; //apagar alerta del metodo de pago
            if(this.ExistsOrNot){ //verificar con el chequeo de la fechas de la actividad si esta existe, Si existe hara un update y sino la insertara
             console.log("XD")
              this.factu.rese_Id = parseInt(localStorage.getItem('idReservaEdit')!.toString());
              this.factu.mepa_id = parseInt(this.metodoSeleccionado.toString());
              this.factu.fuct_Id = parseInt(localStorage.getItem('idFacturaEdit')!.toString());
              this.service. UpdateFactura(this.factu).subscribe((data:any)=>{
                console.log(data.data.codeStatus)
                this.fact_Id = data.data.codeStatus;
                if(data.data.codeStatus >= 1){
                  this.wizardForm.goToNextStep();
                  this.LimpiarTodo()
                  this.generatePDF2();
                }else{
                  Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    title: '¡ERROR!, ¡oh no!, hubo un error.',
                    icon: 'error'
                  })
                }
              })
            }else{//Aqui significa que la actividad No existe por lo cual se debe realalizar un insert a la BD
              this.submittedMeto = false; //apagar alerta del metodo de pago
                this.factu.rese_Id = parseInt(localStorage.getItem('idReservaEdit')!.toString());
                this.factu.mepa_id = parseInt(this.metodoSeleccionado.toString());
                this.factu.fuct_Id = parseInt(localStorage.getItem('idFacturaEdit')!.toString());
                this.service. UpdateFactura(this.factu).subscribe((data:any)=>{
                  console.log(data.data.codeStatus)
                  this.fact_Id = data.data.codeStatus;
                  if(data.data.codeStatus >= 1){
                    this.wizardForm.goToNextStep();
                    this.LimpiarTodo()
                    this.generatePDF2();
                  }else{
                    Swal.fire({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,
                      title: '¡ERROR!, ¡oh no!, hubo un error.',
                      icon: 'error'
                    })
                  }
                })         
            }
      this.Activo = true;
      console.log("Cuando se escoge un un metodo de pago de un solo")
    }
   return null;
  }

  ConfirmarFact(){
    this.wizardForm.goToNextStep();
  }

  selectActivity(activity: Actividades) {
  if (this.selectedActivity === activity) {
    // Si la actividad ya está seleccionada, deselecciónala
    activity.selected = false;
    this.selectedActivity = null;
    this.validar2 = false;
    this.checkbox.nativeElement.checked = false;
  } else {
    // Si la actividad no está seleccionada, selecciona esta y deselecciona las demás
    this.checkbox.nativeElement.checked = false;
    this.actividades.forEach(item => item.selected = false);
    activity.selected = true;
    this.validar2 = true;
    this.selectedActivity = activity;
    console.log(this.selectedActivity)
  }
}


  Guardar(){
    const clie_SexoControl = this.form.get('clie_Sexo');
  
    if (!this.clientesForm.clie_Nombres || !this.clientesForm.clie_Apellidos ||
        !this.clientesForm.clie_DNI || !this.clientesForm.clie_Email ||
        !this.clientesForm.clie_Sexo  || !this.fechaValida || !this.fechaFormatoValido ) {
          console.log(this.clientesForm.clie_Nombres)
      this.submitted = true;  
      this.submitte1 = true;  
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Rellene los campos!',
        icon: 'warning'
      })
      return;
    }

    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.clientesForm.clie_UsuarioCreador = idUsuario;
    }
    this.clientesForm.clie_FechaNac = this.convertToDate(this.selectedDate);

    this.service.InsertarClientes(this.clientesForm).
    subscribe((data:any)=>{
      console.log(this.clientesForm);
      if(data.data.codeStatus == 1){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Registro Ingresado con exito!',
          icon: 'success'
        })
        const cliente5Element = document.getElementById('Cliente5');
        if (cliente5Element) {
          cliente5Element.style.display = 'none';
        }
         this.service.getCliente().subscribe(data =>{
          console.log(data)
          this.Clientes = data;
        })
        const btnForm1 = document.getElementById('btnContinueForm1');
        if (btnForm1) {
          btnForm1.style.display = '';
        }
        this.Limpiar()
      }else{
        this.submitte1 = true;
        this.clientesForm.clie_DNI = ''
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: '¡ERROR!, Ya existe un cliente con el DNI digitado',
          icon: 'error'
        })
      }
     
    })
  }


  Limpiar(){
    this.clientesForm.clie_Nombres = '';
    this.clientesForm.clie_Apellidos = '';
    this.clientesForm.clie_DNI = '';
    this.clientesForm.clie_Email = '';
    this.clientesForm.clie_FechaNac = new Date();
    this.clientesForm.clie_Sexo = '';
  }

  Cancelar(){
    this.Limpiar()
    this.submitted=  false;
    this.submitte1=  false;
    const btnForm1 = document.getElementById('btnContinueForm1');
    const cliente5Element = document.getElementById('Cliente5');
        if (cliente5Element) {
          cliente5Element.style.display = 'none';
          if (btnForm1) {
            btnForm1.style.display = '';
          }
        }
  }

  onDateSelect(date: NgbDateStruct) {
    // Verificar si se ha seleccionado una fecha válida
    if (date && date.year && date.month && date.day) {
      this.fechaValida = true;
  
      // Validar el formato de fecha
      const dateString = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      this.fechaFormatoValido = regex.test(dateString);
    } else {
      this.fechaValida = false;
      this.fechaFormatoValido = true; // Restablecer el formato de fecha válido
    }
  }

  
  onDateSelect1(date: NgbDateStruct) {
    // Verificar si se ha seleccionado una fecha válida
    if (date && date.year && date.month && date.day) {
      this.fechaValida1 = true;
  
      this.fechaSeleccionada = true;
       // Validar el formato de fecha
    const utcDate = Date.UTC(date.year, date.month - 1, date.day); // Restar 1 al mes ya que en JavaScript los meses son base 0
    const selectedDate = new Date(date.year, date.month - 1, date.day, 0, 0, 0)
    const dateString = selectedDate.toISOString().split('T')[0]; // Obtener la cadena de fecha en formato yyyy-mm-dd
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    this.fechaFormatoValido1 = regex.test(dateString);
    console.log(dateString);
    console.log(selectedDate);
    this.Actividad.acfe_Fecha = selectedDate;
    this.Actividad.acti_Id = this.selectedActivity!.acti_Id;
      this.service.VerificarCuposActividad(this.Actividad).subscribe((response:any)=>{
          if(response.data.codeStatus != -2 && response.data.codeStatus != -5){
            if(response.data.codeStatus == 0){
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4500,
                 timerProgressBar: true,
                title: 'Ya no hay cupos para esta actividad',
                icon: 'error'
              })
            }          
          }
      })
    } else {
      this.fechaSeleccionada = false;
      this.fechaValida1 = false;
      this.fechaFormatoValido1 = true; // Restablecer el formato de fecha válido
    }
  }

  

  

  ngOnInit(): void { 
    console.log(localStorage.getItem('idReservaEdit')!.toString())
    console.log(this.selectedPeople)
    setTimeout(()=>{
    this.service.getClientesByIdRese(parseInt(localStorage.getItem('idReservaEdit')!.toString())).
    subscribe((data:any)=>{
      console.log(data)
      this.selectedPeople = data
      this.clientesFromApi = data;
    })
  },500)  

  
    this.LimpiarTodo()
    this.service.getMetodosPago().subscribe(data => {
      this.metodos = data;
    });



    this.defaultCardCode = defaultCard;
    this.service.getCliente().subscribe(data =>{
      console.log(data)
      this.Clientes = data;
    })
    
    this.service.getActividades().subscribe(data => {
      this.actividades = data;
      
      this.service.ListarInfoActividadSelected(parseInt(localStorage.getItem('idReservaEdit')!.toString())).subscribe(
        (data: any) => {
          console.log(data);
          if (data && data.length > 0) {
            this.selectedActivity = this.actividades.find(activity => activity.acti_Id === data[0].acti_Id) || null;
            this.ActividadFromAPI = this.actividades.find(activity => activity.acti_Id === data[0].acti_Id) || null;
            console.log(this.selectedActivity)
          } else {
            this.selectedActivity = null;
          }
        }
      );
    });

   this.service.getDatosReservacion(parseInt(localStorage.getItem('idReservaEdit')!.toString())).subscribe((data: any) => {
      console.log(data);
      console.log(data[0].rese_FechaReservacion);

      // Convertir la cadena de texto a un objeto Date
      const fechaReservacion = new Date(data[0].rese_FechaReservacion);

      // Asignar los componentes de fecha al objeto NgbDateStruct
      this.selectedDate1 = {
        year: fechaReservacion.getFullYear(),
        month: fechaReservacion.getMonth() + 1,
        day: fechaReservacion.getDate()
      };

      this.FechaFromApI = {
        year: fechaReservacion.getFullYear(),
        month: fechaReservacion.getMonth() + 1,
        day: fechaReservacion.getDate()
      };
    });


    this.fillJustifyNavCode = fillJustifyNav;

    /**
     * form1 value validation
     */
    this.validationForm1 = this.formBuilder.group({
      firstName : ['', Validators.required],
    });
    
    /**
     * formw value validation
     */
    this.validationForm2 = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      mobileNumber : ['', Validators.required],
      password : ['', Validators.required]
    });

    this.isForm1Submitted = false;
    this.isForm2Submitted = false;

  }

  Next2(content: TemplateRef<any>) {
    if (!this.selectedActivity) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: '¡ERROR!, Debe escoger una actividad a realizar',
        icon: 'error'
      });
    } else {
      this.modalRef = this.modalService.open(content, {});
      this.modalRef.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
      }).catch((res) => {});        
    }
  }
  

  Siguiente(){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.reservaciones.rese_UsuarioCreador = idUsuario;
    }
    if(((JSON.stringify(this.FechaFromApI) != JSON.stringify(this.selectedDate1)) &&  (JSON.stringify(this.selectedActivity) != JSON.stringify(this.ActividadFromAPI)))){
      console.log(JSON.stringify(this.FechaFromApI))
      console.log(JSON.stringify(this.selectedDate1))
      console.log(JSON.stringify(this.selectedActivity))
      console.log(JSON.stringify(this.ActividadFromAPI))
      if ( !this.fechaValida1 || !this.fechaFormatoValido1 ) {
        this.submittedDate = true;  
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Debe escoger un fecha!',
          icon: 'warning'
        })
        return;
        }else{
            if(this.selectedPeople.length <= this.selectedActivity!.acti_Cupo){
              this.Actividad.acfe_Fecha = this.convertToDate1(this.selectedDate1);
              this.Actividad.acfe_Id  =this.selectedActivity!.acti_Id;
              this.service.VerificarCuposActividad(this.Actividad).subscribe((response:any)=>{
                  if(response.data.codeStatus != -2 && response.data.codeStatus != -5){
                    if(response.data.codeStatus <= this.selectedPeople.length && response.data.codeStatus == 0 ){
                      Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 6000,
                        timerProgressBar: true,
                        title: '!ERROR!, Ya no hay cupos para esta actividad en esta fecha',
                        icon:'error'
                      })
                    }else{
                      if(response.data.codeStatus <= this.selectedPeople.length){
                        Swal.fire({
                          toast: true,
                          position: 'top-end',
                          showConfirmButton: false,
                          timer: 6000,
                          timerProgressBar: true,
                          title: '!ERROR!, No hay cupos suficientes para esta actividad',
                          icon:'error'
                        })
                      }else{
                        console.log("existe")
                        this.ExistsOrNot = true;
                          const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
                          if (idUsuario !== undefined) {
                            this.reservaciones.rese_UsuarioCreador = idUsuario;
                          }
                          this.reservaciones.rese_Cantidad = this.selectedPeople.length;
                          this.reservaciones.rese_FechaReservacion =  this.convertToDate1(this.selectedDate1);
                          this.reservaciones.acti_Id = this.selectedActivity!.acti_Id;
                          this.reservaciones.rese_Id =  parseInt(localStorage.getItem('idReservaEdit')!.toString());
                          this.service.EditarReservacionExiste(this.reservaciones).subscribe((data:any)=>{
                            if(data.data.codeStatus == 1){
                              this.factu.fuct_Subtotal = (this.selectedPeople.length * this.selectedActivity!.acti_Precio);
                              const subtotal = this.factu.fuct_Subtotal;
                              this.factu.fuct_Isv = (subtotal * 0.15);
                              this.factu.fuct_Total = (this.factu.fuct_Subtotal + this.factu.fuct_Isv)
                              if (idUsuario !== undefined) {
                                this.factu.fuct_UsuarioCreador = idUsuario;
                              }                  
                              this.modalService.dismissAll();
                              this.wizardForm.goToNextStep();
                            }else{
                              Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 4500,
                                timerProgressBar: true,
                                title: '¡Error!, Errro al insertar los datos',
                                icon: 'error'
                              })
                            }
                          }) 
                      }     
                    }                    
                  }else{              
                    if(response.data.codeStatus == -2){
                      this.ExistsOrNot = false;
                      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
                      if (idUsuario !== undefined) {
                        this.reservaciones.rese_UsuarioCreador = idUsuario;
                      }
                      this.reservaciones.rese_Cantidad = this.selectedPeople.length;
                      this.reservaciones.rese_FechaReservacion =  this.convertToDate1(this.selectedDate1);
                      this.reservaciones.acti_Id = this.selectedActivity!.acti_Id;
                      this.reservaciones.rese_Id =  parseInt(localStorage.getItem('idReservaEdit')!.toString());
                      this.service.EditarReservacionNoExiste(this.reservaciones).subscribe((data:any)=>{
                        if(data.data.codeStatus == 1){
                          this.factu.fuct_Subtotal = (this.selectedPeople.length * this.selectedActivity!.acti_Precio);
                          const subtotal = this.factu.fuct_Subtotal;
                          this.factu.fuct_Isv = (subtotal * 0.15);
                          this.factu.fuct_Total = (this.factu.fuct_Subtotal + this.factu.fuct_Isv)
                          if (idUsuario !== undefined) {
                            this.factu.fuct_UsuarioCreador = idUsuario;
                          }                  
                          this.modalService.dismissAll();
                          this.wizardForm.goToNextStep();
                        }else{
                          Swal.fire({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 4500,
                            timerProgressBar: true,
                            title: '¡Error!, Errro al insertar los datos',
                            icon: 'error'
                          })
                        }
                      })             
                    }else{
                      Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4500,
                        timerProgressBar: true,
                        title: '¡Error!, No hay suficientes cupos para esta actividad',
                        icon: 'error'
                      })
                    }
                  }
              })        
          }else{
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 4500,
              timerProgressBar: true,
              title: '¡Error!, No hay suficientes cupos para esta actividad',
              icon: 'error'
            })
          } 
        }
    }else{
      console.log(JSON.stringify(this.FechaFromApI))
      console.log(JSON.stringify(this.selectedDate1))
      console.log(JSON.stringify(this.selectedActivity))
      console.log(JSON.stringify(this.ActividadFromAPI))
      this.wizardForm.goToNextStep(); 
      this.modalService.dismissAll();
      this.factu.fuct_Subtotal = (this.selectedPeople.length * this.selectedActivity!.acti_Precio);
      console.log(this.factu.fuct_Subtotal)
      const subtotal = this.factu.fuct_Subtotal;
      this.factu.fuct_Isv = (subtotal * 0.15);
      console.log(this.factu.fuct_Isv)
      this.factu.fuct_Total = (this.factu.fuct_Subtotal + this.factu.fuct_Isv)
      if (idUsuario !== undefined) {
        this.factu.fuct_UsuarioCreador = idUsuario;
      }                  
    }
   
  }
  
  LimpiarTodo(){
    this.clienReser = new ClienteXReservacion();
    this.reservaciones = new Reservaciones();
    this.reservaciones = new Reservaciones();
    this.Actividad = new ActividadesXFecha();
    this.factu = new Factura();
    this.selectedPeople = null;
  }

  CancelarFecha(){
    this.selectedDate1 = new  NgbDate(0,0,0)
    this.fechaValida = false;
    this.fechaFormatoValido = false;
    this.submittedDate = false;  
  }
  


  /**
   * Wizard finish function
   */
  finishFunction() {
    Swal.fire({
      titleText: '¡Reservación editada exitosamente!',
      position: 'center',
      timerProgressBar: true,
      timer:5000,
      icon: 'success'
    })
    this.router.navigate(['reservaciones']);    
  }

  /**
   * Returns form
   */
  get form1() {
    return this.validationForm1.controls;
  }

  get form2() {
    return this.validationForm2.controls;
  }



  CrearCliente(){
    this.isForm1Submitted = false ;
    const cliente5Element = document.getElementById('Cliente5');
    const btnForm1 = document.getElementById('btnContinueForm1');
    
    // Verifica si el elemento existe antes de realizar alguna operación
    if (cliente5Element) {
      // Establece el valor de display para mostrar el elemento
      cliente5Element.style.display = '';
      if (btnForm1) {
        btnForm1.style.display = 'none';
      }
    }


  }

  /**
   * Go to next step while form value is valid
   */
  form1Submit() {
    console.log(this.selectedPeople + "Aqui estoy en el form1")
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if(this.validationForm1.valid) {
      this.clienReser.rese_Id = parseInt(localStorage.getItem('idReservaEdit')!.toString()) 
      if (JSON.stringify(this.selectedPeople) === JSON.stringify(this.clientesFromApi)) {
        this.EstadoClientes = true;
        this.wizardForm.goToNextStep();
      } else {
        this.reserva.rese_Id =parseInt(localStorage.getItem('idReservaEdit')!.toString()) 
        this.reserva.rese_Cantidad = this.selectedPeople.length
        this.reserva.rese_FechaReservacion = this.convertToDate1(this.selectedDate1)
        this.reserva.acti_Id = this.selectedActivity!.acti_Id
        this.service.UpdateReservacion(this.reserva).subscribe
        ((data:any)=>{
          if(data.data.codeStatus == 1){
            this.service.DeleteClienteXReservacionByIdRese(this.clienReser).subscribe((data:any)=>{
              var cont = 0;
              if(data.data.codeStatus === 1){
                if (idUsuario !== undefined) {
                  this.clienReser.clre_UsuarioCreador = idUsuario;
                }
                  for(var i = 0 ; i <= this.selectedPeople.length ; i++){
                    console.log("Estos aqui bro en el if")
                    this.clienReser.clie_Id =  this.selectedPeople[i].clie_id;
                      if(i === 0){
                        console.log("OWNER")
                        this.clienReser.rese_OwnerPayy = true;
                      }else{
                        console.log("NO OWNER")
                        this.clienReser.rese_OwnerPayy = false;
                      }//Recorrido del array  
                      this.service.InsertarClientesXReservacion(this.clienReser).subscribe((data:any)=>{
                        cont ++;
                        if(cont === this.selectedPeople.length){                                        
                          this.wizardForm.goToNextStep();
                          this.XD = true
                          this.isChecked = true;
                          const CKX = document.getElementById('ckXD');
                          CKX!.style.display = '';        
                        }
                      })
                    }
              }else{
                Swal.fire({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true,
                  title: '¡ERROR!, ¡oh no!, hubo un error.',
                  icon: 'error'
                })
              }
            })
          }else{
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 5000,
              timerProgressBar: true,
              title: '¡ERROR!,La actividad para la que esta reservada esta actividad no tiene cupos suficientes\nTiene tres opciones: \n \n>Cambiar la fecha de su reservación \n>Cambiar la actividad \n>Reducir la cantidad de personas en su reservación',
              icon: 'error'
            })
          }
        })
    }
    }else{
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: '¡ERROR!,Debe escoger un cliente para poder seguir con la reservación',
        icon: 'error'
      })
      this.isForm1Submitted = true;
    }
  
  }


  /**
   * Go to next step while form value is valid
   */
  form2Submit() {
    if(this.validationForm2.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm2Submitted = true;
  }


  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}

