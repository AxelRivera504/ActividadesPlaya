import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { roles } from '../../Model/roles';
import { pantallas } from '../../Model/pantallas';
import { Options } from 'sortablejs';
import { RolesXpantallas } from '../../Model/RolesXPantallas';

@Component({
  selector: 'app-create',
  templateUrl: './roles.create.html',
  styleUrls: ['./create.scss']
})
export class CreateComponent implements OnInit {
  
  sharedOptions: Options = {
    group: 'shared-group',
  };
  

  roles: roles = new roles();
  submitted: boolean = false;
  submitte1: boolean = false;
  selectedDate: NgbDateStruct;
  form: FormGroup;

  fechaValida: boolean = false;
  fechaFormatoValido: boolean = true;

  pantallas: pantallas[] = [];
  pantallas1: pantallas[] = [];
  rolesXpantallas = new RolesXpantallas();

  constructor(
    private router: Router,
    private service: ServicesService,
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    this.form = new FormGroup({
      enca_Sexo: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.service.obtenerPantallas()
    .subscribe((data: any)=>{
      this.pantallas = data
    })

  }

  Regresar() {
    this.router.navigate(['roles']);
  }

  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date();
  }

  Guardar() {
    var x = true;
    if  (this.roles.role_Descripcion == undefined || this.roles.role_Descripcion == "" || this.pantallas1.length === 0) {
      x = false;
    }
    if (x) {
      const idUsuario: number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined : parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.roles.role_UsuarioCreador = idUsuario;
      }
      console.log(this.roles);
      this.service.createRoles(this.roles)
        .subscribe((data: any) => {
          console.log(data);
               
        if(data.data.codeStatus !=0){
            console.log(data);
            console.log(data.data);
            console.log(data.data.codeStatus);
            
            this.pantallas1.forEach(element => {
              this.rolesXpantallas.pant_ID = element.pant_ID;
              this.rolesXpantallas.role_ID = data.data.codeStatus;
              this.service.createRolesXpantallas(this.rolesXpantallas)
                .subscribe((data: any) => {
                  console.log(data);
                });
            });
        
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: '¡Registro Ingresado con exito!',
              icon: 'success'
            });
           

            this.router.navigate(['roles']);
            
          }
        });
    } else {
      this.submitted = true;
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Rellene los campos!',
        icon: 'warning'
      });
    }

    if(this.pantallas1.length === 0)
    {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Seleccione al menos una pantalla!',
        icon: 'warning'
      });
    }
  }
}
