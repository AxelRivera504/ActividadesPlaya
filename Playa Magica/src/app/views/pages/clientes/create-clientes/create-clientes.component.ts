import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../Model/Clientes';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.scss']
})
export class CreateClientesComponent implements OnInit {

  clientes: Cliente = new Cliente();
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
      clie_Sexo: new FormControl(null),
    });
  }

  Regresar(){
    this.router.navigate(['clientes']);
  }

  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date(); // Devuelve la fecha actual como valor predeterminado
  }

  ngOnInit(): void {
  }

  Guardar(){
    const clie_SexoControl = this.form.get('clie_Sexo');
  
    if (!this.clientes.clie_Nombres || !this.clientes.clie_Apellidos ||
        !this.clientes.clie_DNI || !this.clientes.clie_Email ||
        !this.clientes.clie_Sexo || !this.fechaValida || !this.fechaFormatoValido ) {
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
      this.clientes.clie_UsuarioCreador = idUsuario;
    }
    this.clientes.clie_FechaNac = this.convertToDate(this.selectedDate);

    this.service.InsertarClientes(this.clientes).
    subscribe((data:any)=>{
      console.log(this.clientes);
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
        this.clientes.clie_DNI = ''
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: 'Ya existe un cliente con el DNI digitado',
          icon: 'warning'
        })
      }
     
    })
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

}
