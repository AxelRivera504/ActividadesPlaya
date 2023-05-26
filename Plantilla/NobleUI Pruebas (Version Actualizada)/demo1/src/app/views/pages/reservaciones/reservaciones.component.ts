import { Component, OnInit, ViewChild } from '@angular/core';
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
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent implements OnInit {
  actividades!: Actividades[];
  fillJustifyNavCode: any;
  validationForm1: UntypedFormGroup;
  validationForm2: UntypedFormGroup;
  selectedActivity: Actividades | null = null;
  defaultCardCode: any;

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
  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  constructor(public formBuilder: UntypedFormBuilder,private router: Router, private service: ServicesService, private config: NgSelectConfig) { 
    this.form = new FormGroup({
      clie_Sexo: new FormControl(null),
    });
  }

  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date(); // Devuelve la fecha actual como valor predeterminado
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
    console.log(activity.selected)
  }
}

  Guardar(){
    const clie_SexoControl = this.form.get('clie_Sexo');
  
    if (!this.clientesForm.clie_Nombres || !this.clientesForm.clie_Apellidos ||
        !this.clientesForm.clie_DNI || !this.clientesForm.clie_Email ||
        !clie_SexoControl || !clie_SexoControl.valid || !this.fechaValida || !this.fechaFormatoValido ) {
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

  

  ngOnInit(): void {
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

  Next2(){
    console.log(this.selectedPeople)
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
      this.wizardForm.goToNextStep(); 
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'GENIAL!, Reservación realizada con exito ',
        icon: 'success'
      })
      for(var i = 0 ; i<= this.selectedPeople.lenght ; i++){
        //this.service.Insertar
      }
    }
  }

  


  /**
   * Wizard finish function
   */
  finishFunction() {
    alert('Successfully Completed');
  }

  /**
   * Returns form
   */
  get form1() {
    return this.validationForm1.controls;
  }

  /**
   * Returns form
   */
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
