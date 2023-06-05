import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Model/Clientes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../../Service/services.service';
@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.scss']
})
export class EditarClientesComponent implements OnInit {
  clientes!:Cliente;
  selectedDate: NgbDateStruct;
  form: FormGroup;
  submitted: boolean = false;
  submitte1: boolean = false;
  fechaValida: boolean = false;
  fechaFormatoValido: boolean = true;
  constructor(private router: Router,private service: ServicesService) {
this.form = new FormGroup({
      clie_Sexo: new FormControl(null),
    });
   }

  ngOnInit(): void {
    const client = localStorage.getItem('clientesData');
    if (client) {
      this.clientes = JSON.parse(client);
      console.log(this.clientes);
  
      // Obtener la fecha de nacimiento del cliente
      const fechaNacimiento = new Date(this.clientes.clie_FechaNac);
  
      // Crear el objeto NgbDateStruct con la fecha de nacimiento
      this.selectedDate = {
        year: fechaNacimiento.getFullYear(),
        month: fechaNacimiento.getMonth() + 1,
        day: fechaNacimiento.getDate()
      };
      this.fechaValida = true;
    }
     
  }

  

  Actualizar(){
    const clie_SexoControl = this.form.get('clie_Sexo');

      if (!this.clientes.clie_Nombres || !this.clientes.clie_Apellidos ||
        !this.clientes.clie_DNI || !this.clientes.clie_Email ||
        !this.clientes.clie_Sexo || !this.fechaValida || !this.fechaFormatoValido ) {
      this.submitted = true;  
      this.submitte1 = true;  
      console.log(this.fechaValida)
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
      this.clientes.clie_UsuarioModificador = idUsuario;
    }

    this.clientes.clie_FechaNac = this.convertToDate(this.selectedDate);

    this.service.ActualizarClientes(this.clientes).
    subscribe((data:any)=>{
      console.log(this.clientes);
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
        this.clientes.clie_DNI = ''
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

  convertToDate(date: NgbDateStruct): Date {
    if (date) {
      return new Date(date.year, date.month - 1, date.day);
    }
    return new Date(); // Devuelve la fecha actual como valor predeterminado
  }

  Regresar(){
    this.router.navigate(['clientes']);
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
