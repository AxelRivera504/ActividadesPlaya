import { Component, OnInit } from '@angular/core';
import { Encargados } from '../../Model/Encargados';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../Service/services.service';
import Swal from 'sweetalert2';
import { estadosciviles } from '../../Model/estadosciviles';
@Component({
  selector: 'app-editar-enc',
  templateUrl: './editar-enc.component.html',
  styleUrls: ['./editar-enc.component.scss']
})
export class EditarEncComponent implements OnInit {
  estadocivil!: estadosciviles[];
  
  EstadoCivilSeleccionado: String;

  encargados!: Encargados;
  submitted: boolean = false;
  submitte1: boolean = false;
  selectedDate: NgbDateStruct;
  form: FormGroup;

  fechaValida: boolean = false;
  fechaFormatoValido: boolean = true;

  constructor(private router: Router, private service: ServicesService) { 
    this.form = new FormGroup({
      enca_Sexo: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.service.getEstadosCiviles().subscribe(data => {
      this.estadocivil = data;
    });

    const encarga = localStorage.getItem('encargadosEd');
    if (encarga) {
      this.encargados = JSON.parse(encarga);
      console.log(this.encargados);
  
      // Obtener la fecha de nacimiento del cliente
      const fechaNacimiento = new Date(this.encargados.enca_FechaNac);
      this.EstadoCivilSeleccionado = this.encargados.esci_Descripcion.toString();
      // Crear el objeto NgbDateStruct con la fecha de nacimiento
      this.selectedDate = {
        year: fechaNacimiento.getFullYear(),
        month: fechaNacimiento.getMonth() + 1,
        day: fechaNacimiento.getDate()
      };
      this.fechaValida = true;
    }
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
        !this.encargados.enca_Telefono || !enca_SexoControl || 
        !enca_SexoControl.valid || !this.EstadoCivilSeleccionado || !this.fechaValida || !this.fechaFormatoValido ) {
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
      this.encargados.enca_UsuarioModificador = idUsuario;
    }
    this.encargados.esci_id = parseInt(this.EstadoCivilSeleccionado.toString())
    this.encargados.enca_FechaNac = this.convertToDate(this.selectedDate);
    this.service.ActualizarEncargados(this.encargados).
    subscribe((data:any)=>{
      console.log(this.encargados);
      if(data.data.codeStatus == 1){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Registro Actualizado con exito!',
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
          title: '¡ERROR!, Ya existe un encargado con el DNI digitado',
          icon: 'error'
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
