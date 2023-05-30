import { Component, OnInit, ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../Model/Clientes';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import { Person, PeoplesData } from 'src/app/core/dummy-datas/peoples.data';
import {ClienteDdl} from '../Model/ClienteDdl';
import { FormBuilder} from '@angular/forms';
import { Actividades } from '../Model/Actividades';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { Reservaciones } from '../Model/Reservaciones';
import { ClienteXReservacion } from '../Model/ClienteXReservacion';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { metodospago } from '../Model/metodospago';
import { Factura } from '../Model/Factura';
import 'jspdf-autotable';
import { Encargados } from '../Model/Encargados';
import jsPDF from 'jspdf';
import { FactuList } from '../Model/FactuList'; 
import { ReportData } from '../Model/ReportData';
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


import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';
import Swal from 'sweetalert2';
import { ActividadesXFecha } from '../Model/ActividadesXFecha';
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
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
      doc.text('FACTURA', 10, 30);
    };
  
    const footer = function (doc: any) {
      doc.setFontSize(12);
      doc.setFont('Pacifico', 'normal');
      doc.text(
        '¡Gracias por preferirnos para sus actividades playeras',
        60,
        doc.internal.pageSize.height - 10
      );
  
      doc.setFontSize(12);
      doc.setFont('Pacifico', 'normal');
      doc.text(
        '¡Playa mágica les desea lo mejor en sus actividades playeras aventureros!',
        45,
        doc.internal.pageSize.height - 20
      );
    };
  
    console.log(this.fact_Id);
    console.log(localStorage.getItem('idF')!.toString());
    console.log(this.selectedPeople);
    console.log(localStorage.getItem('array'))
    const arrayFromLocalStorage = JSON.parse(localStorage.getItem('array')!);
    const arrayFromLocalStorage1 = localStorage.getItem('array');
    console.log(arrayFromLocalStorage); 
    this.service
      .getFactura(parseInt(localStorage.getItem('idF')!.toString()))
      .subscribe(
        (response: FactuList[]) => {
          const data: FactuList = response[0];
          doc.setFontSize(18);
          const pageWidth = doc.internal.pageSize.width;
          doc.setTextColor(40);
          doc.setTextColor(40);
          doc.setDrawColor(0, 0, 0);
          doc.setLineWidth(0.5);
          // Agregar datos de la factura
          doc.setFontSize(12);
          doc.setFontSize(13); 
          doc.setFont("Pacifico", "normal");
          doc.text("Factura Nº: " + data.fuct_Id, 5, 54);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Dirección empresa: San Pedro sula, Barrio san juan, a saber donde", 5, 60);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Empleado:"+ data.nombreCompleto , 5, 66);

          doc.setDrawColor(0, 0, 0);
          doc.setLineWidth(0.5);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Actividad-: "+ data.acti_Nombre , 5, 72);

          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal");
          doc.text("Precio actividad:"+data.acti_Precio , 100, 72);
          
          doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal"); 
         doc.text("Lugar de la actividad:", + 5, 78);

         doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal"); 
         doc.text("Departamento:"+data.dept_Descripcion ,5, 84);
         
         doc.setFontSize(12); 
          doc.setFont("Pacifico", "normal"); 
         doc.text("Municipio:"+data.muni_Descripcion ,5, 90);

         doc.setFontSize(12); 
         doc.setFont("Pacifico", "normal"); 
         doc.text("Dirección exacta:"+data.dire_DireccionExacta ,5, 96);
         
         doc.setFontSize(12); 
         doc.setFont("Pacifico", "normal"); 
         doc.text("Playa:"+data.play_Playa ,5, 102);

          doc.setFontSize(12);
          doc.text(`Fecha de Reservación: ${data.rese_FechaReservacion}`, 5, 108);
          doc.setFontSize(12);
          // Agregar más datos según sea necesario
  
          // Llamar a las funciones de encabezado y pie de página
          header(doc);
          footer(doc);
          
          
          (doc as any).autoTable({
            head: [['ID', 'Nombres', 'Apellidos', 'DNI', 'Email']],
            body: arrayFromLocalStorage!.map((cliente: Cliente) => [
              cliente.clie_id,
              cliente.clie_Nombres,
              cliente.clie_Apellidos,
              cliente.clie_DNI,
              cliente.clie_Email,
            ]),           
            startY: 140,
            margin: { top: 10 },
          });

          (doc as any).autoTable({
            body: [
              ['SubTotal:', data.fuct_Subtotal],
              ['IVA:', data.fuct_Isv],
              ['TOTAL:', data.fuct_Total]
            ],
            startY: (doc as any).autoTable.previous.finalY + 1,
            margin: { top: 150, right: 15, bottom: 20, left: 115 },
            styles: {
              cellWidth: 'wrap',
              cellPadding: 2,
              fontSize: 10
            },
            columnStyles: {
              1: { cellWidth: 25 } // Elige el valor que necesites
            }
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
    this.toggleSelection()
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
    if (!this.metodoSeleccionado) {
    this.submittedMeto = true;  
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Escoja un metodo de pago!',
      icon: 'warning'
    })
    return;
  }
  this.factu.mepa_id = parseInt(this.metodoSeleccionado.toString());
  this.service.InsertarFactura(this.factu).subscribe((data:any)=>{
    console.log(data.data.codeStatus)
    this.fact_Id = data.data.codeStatus;
    localStorage.setItem('idF',data.data.codeStatus)
    if(data.data.codeStatus >= 1){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Reservación hecha con exito!',
        icon: 'success'
      })
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

  ConfirmarFact(){
    this.wizardForm.goToNextStep();
  }

  selectActivity(activity: Actividades) {
  if (this.selectedActivity === activity) {
    // Si la actividad ya está seleccionada, deselecciónala
    activity.selected = false;
    this.selectedActivity = null;
    this.validar2 = false;
  } else {
    // Si la actividad no está seleccionada, selecciona esta y deselecciona las demás
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
          console.log(this.clientesForm.clie_Nombres  )
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
          if(response.data.codeStatus != -2 && response.data.codeStatus != 0){
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 4500,
              timerProgressBar: true,
              title: 'Los cupos disponibles para esta actividad en esta fecha son de:'+response.data.codeStatus,
              icon: 'info'
            })
          }else{
            if(response.data.codeStatus = -2){
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4500,
                timerProgressBar: true,
                title: 'Los cupos disponibles para esta actividad en esta fecha son de:'+this.selectedActivity!.acti_Cupo,
                icon: 'info'
              })
            }else{
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4500,
                timerProgressBar: true, 
                title: 'Error',
                icon: 'error'
              })
            }
          }
      })
    } else {
      this.fechaValida1 = false;
      this.fechaFormatoValido1 = true; // Restablecer el formato de fecha válido
    }
  }

  

  

  ngOnInit(): void { 
    this.LimpiarTodo()
    this.service.getMetodosPago().subscribe(data => {
      this.metodos = data;
    });



    this.defaultCardCode = defaultCard;
    this.service.getCliente().subscribe(data =>{
      console.log(data)
      this.Clientes = data;
    })
    
    this.service.getActividades().subscribe(data=>{
      this.actividades = data;
    })
    
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

  Next2(content: TemplateRef<any>){
    console.log(this.selectedPeople)
    console.log(this.selectedPeople.length)
    if( this.validar2 == false){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: '¡ERROR!, Debe escoger una actividad a realizar',
        icon: 'error'
      })
    }else{  
      this.modalRef = this.modalService.open(content, {});
      this.modalRef.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
      }).catch((res) => {});        
    }
  }


  Siguiente(){
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
            if(response.data.codeStatus != -2 && response.data.codeStatus != 0){
              if(response.data.codeStatus >= this.selectedPeople.length){
                  const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
                  if (idUsuario !== undefined) {
                    this.reservaciones.rese_UsuarioCreador = idUsuario;
                  }
                  this.reservaciones.rese_Cantidad = this.selectedPeople.length;
                  console.log(this.convertToDate1(this.selectedDate1))
                  this.reservaciones.rese_FechaReservacion =  this.convertToDate1(this.selectedDate1);
                  this.reservaciones.acti_Id = this.selectedActivity!.acti_Id;
                  this.service.InsertarReservacionesExiste(this.reservaciones).subscribe((data:any)=>{  
                    var cont = 0;     
                    if(data.data.codeStatus != 0){
                      const idreser = data.data.codeStatus;
                      console.log(idreser)
                      if (idUsuario !== undefined) {
                        this.clienReser.clre_UsuarioCreador = idUsuario;
                      }
                      this.clienReser.rese_Id  = data.data.codeStatus;
                      console.log( this.clienReser.rese_Id );
                      console.log("ya existe")
                      const selectedPeopleString = JSON.stringify(this.selectedPeople);
                    localStorage.setItem('array', selectedPeopleString);
                      for(var i = 0 ; i <= this.selectedPeople.length ; i++){
                          this.clienReser.clie_Id =  this.selectedPeople[i].clie_id;  
                          this.service.InsertarClientesXReservacion(this.clienReser).subscribe((data:any)=>{
                            cont ++;  
                            console.log(cont);
                            if(cont === this.selectedPeople.length){
                              Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                title: '!Datos insertados con exito!',
                                icon: 'success'
                              })
                              this.factu.fuct_Subtotal = (this.selectedPeople.length * this.selectedActivity!.acti_Precio);
                              console.log(this.factu.fuct_Subtotal)
                              const subtotal = this.factu.fuct_Subtotal;
                              this.factu.fuct_Isv = (subtotal * 0.15);
                              console.log(this.factu.fuct_Isv)
                              this.factu.fuct_Total = (this.factu.fuct_Subtotal + this.factu.fuct_Isv)
                              if (idUsuario !== undefined) {
                                this.factu.fuct_UsuarioCreador = idUsuario;
                              }       
                              this.factu.rese_Id = idreser;            
                              console.log(this.factu.fuct_Total)
                              this.toggleSelection()
                              this.isChecked2 = true;
                              const CKX1 = document.getElementById('CKActi');
                              CKX1!.style.display = '';
                              this.modalService.dismissAll();
                              this.wizardForm.goToNextStep();
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
                        title: '!ERROR!, hubo un error al intentar insertar los datos',
                        icon:'error'
                      })
                    }
                  })
              }else{
                Swal.fire({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 6000,
                  timerProgressBar: true,
                  title: '!ERROR!, La cantidad de personas en su reservación sobrepasa los cupos disponible para esta actividad \n Cupos disponible:'+response.data.codeStatus + ' y la cantidad de personas que reservan es de: '+this.selectedPeople.length,
                  icon:'error'
                })
              }                              
            }else{              
              if(response.data.codeStatus == -2){
                const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
                  if (idUsuario !== undefined) {
                    this.reservaciones.rese_UsuarioCreador = idUsuario;
                  }
                  this.reservaciones.rese_Cantidad = this.selectedPeople.length;
                  console.log(this.convertToDate1(this.selectedDate1))
                  this.reservaciones.rese_FechaReservacion =  this.convertToDate1(this.selectedDate1);
                  this.reservaciones.acti_Id = this.selectedActivity!.acti_Id;
                  this.service.InsertarReservaciones(this.reservaciones).subscribe((data:any)=>{  
                    var cont = 0;     
                    if(data.data.codeStatus != 0){
                      const idreser = data.data.codeStatus;
                      console.log(idreser)
                      if (idUsuario !== undefined) {
                        this.clienReser.clre_UsuarioCreador = idUsuario;
                      }
                      this.clienReser.rese_Id  = data.data.codeStatus;
                      console.log("No existe")
                      const selectedPeopleString = JSON.stringify(this.selectedPeople);
                    localStorage.setItem('array', selectedPeopleString);
                      for(var i = 0 ; i <= this.selectedPeople.length ; i++){
                          this.clienReser.clie_Id =  this.selectedPeople[i].clie_id;  
                          this.service.InsertarClientesXReservacion(this.clienReser).subscribe((data:any)=>{
                            cont ++;
                            console.log(cont)  
                            if(cont === this.selectedPeople.length){
                              Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                title: '!Datos insertados con exito!',
                                icon: 'success'
                              })                           
                              this.factu.fuct_Subtotal = (this.selectedPeople.length * this.selectedActivity!.acti_Precio);
                              console.log(this.factu.fuct_Subtotal)
                              const subtotal = this.factu.fuct_Subtotal;
                              this.factu.fuct_Isv = (subtotal * 0.15);
                              console.log(this.factu.fuct_Isv)
                              this.factu.fuct_Total = (this.factu.fuct_Subtotal + this.factu.fuct_Isv)
                              if (idUsuario !== undefined) {
                                this.factu.fuct_UsuarioCreador = idUsuario;
                              }       
                              this.factu.rese_Id = idreser;            
                              console.log(this.factu.fuct_Total)
                              this.toggleSelection()
                              this.isChecked2 = true;
                              const CKX1 = document.getElementById('CKActi');
                              CKX1!.style.display = '';
                              this.modalService.dismissAll();
                              this.wizardForm.goToNextStep();
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
                        title: '!ERROR!, hubo un error al intentar insertar los datos',
                        icon:'error'
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
                  title: 'Error',
                  icon: 'error'
                })
              }
            }
        }) 
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
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      title: 'ESDRA THE BEST LA QUEREMOS ♥ ❣ ❤ ❥ ღ',
      icon: 'success'
    }) 
    this.router.navigate(['dashboard']);    
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
    if(this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
      this.XD = true
      this.isChecked = true;
      const CKX = document.getElementById('ckXD');
      CKX!.style.display = '';
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
