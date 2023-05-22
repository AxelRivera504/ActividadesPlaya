import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from "simple-datatables";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamentos } from '../Model/departamentos';
import { ServicesService } from '../Service/services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  departamentoForm!: FormGroup;
  departamento!: departamentos[];
  departamento1: departamentos = new departamentos(); 
  basicModalCloseResult: string = '';
  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,) { }


  @ViewChild('myTable', { static: false }) table!: ElementRef;
  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data =>   {
      console.log(data);
      this.departamento = data;

      // Inicializar DataTable después de asignar los datos
      this.initializeDataTable();
    });
  }
  ngAfterViewInit(): void {
    // No es necesario inicializar DataTable aquí
  }

  private initializeDataTable(): void {
    const dataTableOptions = {
      searchable: true, // Habilitar la barra de búsqueda
      paging: true, // Habilitar la paginación
      perPage: 10, // Número de filas por página
      labels:{
        placeholder: "Buscar...",
        info: "Mostrando {start} de {end} de {rows} entradas",
        noRows: "No encuentra resutados",
        perPage: "{select} entradas por pagina",
        noResults: "No hay coincidencias",
      }
    };

    setTimeout(() => {
      const dataTable = new DataTable(this.table.nativeElement, dataTableOptions);
    }, 0);
  }

  Create() {
      if(this.departamento1.dept_Descripcion != null && this.departamento1.dept_Descripcion != ""  && 
      this.departamento1.dept_Id != null && this.departamento1.dept_Id != ""){
    const idUsuario = localStorage.getItem("IdUsuario");
  
    if (idUsuario !== null && !isNaN(parseInt(idUsuario))) {

      this.departamento1.dept_UsuarioCreador = parseInt(idUsuario, 10);
  
      this.service.createDepartamentos(this.departamento1)
        .subscribe((data: any) => {
          console.log();
          if(data.data.codeStatus == 1){
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: '¡Registro Ingresado con éxito!',
              icon: 'success'
            });
            this.modalService.dismissAll();
          }else if(data.data.codeStatus == 2){
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: 'Ese registro ya existe',
              icon: 'warning'
            });
          }
        });
    } else {
      // El valor no existe en el localStorage o no es un número válido, realizar alguna acción o mostrar un mensaje de error
    }
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: 'Rellene los campos',
          icon: 'warning'
        });
      }
  }

  Edit(id: number){
    console.log(id)
  }

}
