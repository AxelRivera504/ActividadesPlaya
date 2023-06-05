import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encargados } from '../../Model/Encargados';
import { NgbDateStruct,NgbDatepickerI18n  } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from '../../custom-datepicker-i18n';
import { ServicesService } from '../../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { estadosciviles } from '../../Model/estadosciviles';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  estadocivil!: estadosciviles[];
  
  EstadoCivilSeleccionado: String;
  encargados: Encargados = new Encargados();
  submitted: boolean = false;
  submitte1: boolean = false;
  selectedDate: NgbDateStruct;
  form: FormGroup;

  fechaValida: boolean = false;
  fechaFormatoValido: boolean = true;

  constructor(private router: Router, private service: ServicesService, private config: NgSelectConfig) { 
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';

    this.form = new FormGroup({
      enca_Sexo: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.service.getEstadosCiviles().subscribe(data => {
      this.estadocivil = data;
    });
  }

  Regresar(){
    this.router.navigate(['encargados']);
  }

  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date();
  }

  Guardar(){
    const enca_SexoControl = this.form.get('enca_Sexo');
  
    if (!this.encargados.enca_Nombres || !this.encargados.enca_Apellidos ||
        !this.encargados.enca_DNI || !this.encargados.enca_Email ||
        !this.encargados.enca_Telefono || !this.encargados.enca_Sexo  || !this.EstadoCivilSeleccionado || !this.fechaValida || !this.fechaFormatoValido ) {
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
      this.encargados.enca_UsuarioCreador = idUsuario;
    }
    this.encargados.esci_id = parseInt(this.EstadoCivilSeleccionado.toString())
    this.encargados.enca_FechaNac = this.convertToDate(this.selectedDate);
    this.service.InsertarEncargados(this.encargados).
    subscribe((data:any)=>{
      console.log(this.encargados);
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
        this.Regresar()
      }else{
        this.submitte1 = true;
        this.encargados.enca_DNI = ''
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: 'Ya existe un encargado con el DNI digitado',
          icon: 'warning'
        })
      }
     
    })
  }

  onDateSelect(date: NgbDateStruct) {
    if (date && date.year && date.month && date.day) {
      this.fechaValida = true;
      const dateString = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      this.fechaFormatoValido = regex.test(dateString);
    } else {
      this.fechaValida = false;
      this.fechaFormatoValido = true; 
    }
  }
}