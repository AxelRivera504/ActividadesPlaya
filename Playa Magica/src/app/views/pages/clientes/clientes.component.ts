import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Cliente } from '../Model/Clientes';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  basicModalCode: any;
  basicModalCloseResult: string = '';
  modalRef: NgbModalRef | undefined;

  Cliente!: Cliente[];

  clientes: Cliente = new Cliente();
  @ViewChild('myTable', { static: false }) table!: ElementRef;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(private service: ServicesService, private router: Router,private modalService: NgbModal) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getCliente().subscribe(data => {
      console.log(data);
      this.Cliente = data;
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  ngAfterViewInit(): void {
    // No es necesario inicializar DataTable aquí
  }

  Editar(clientes:Cliente){
    localStorage.setItem("clientesData",JSON.stringify(clientes))
    this.router.navigate(['editar-clientes']); 
  }
  
  openBasicModal1(content: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("clie_Id",id.toString())
  }

  Delete(){
    const clie_Id : number | undefined = isNaN(parseInt(localStorage.getItem("clie_Id") ?? '', 0)) ? undefined: parseInt(localStorage.getItem("clie_Id") ?? '', 0);
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.clientes.clie_UsuarioModificador = idUsuario;
    }
    if (clie_Id !== undefined) {
      this.clientes.clie_id = clie_Id;
    }
    this.service.DeleteClientes(this.clientes).
    subscribe((data:any)=>{
      console.log(this.clientes);
      console.log(data)
      if(data.data.codeStatus == 1){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Registro eliminado con exito!',
          icon: 'success'
        })
        this.modalService.dismissAll();
          this.service.getCliente().subscribe(data=>{
            this.Cliente = data;
            this.rerender();
      })}else if(data.data.codeStatus == -5){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: '¡El registro esta siendo utilizado',
            icon: 'warning'
        })
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3009,
          timerProgressBar: true,
          title: '¡Ha ocurrido un error',
            icon: 'error'
        })
      }
    })
  } 

  Detalles(clintes: Cliente){
    localStorage.setItem('clientes', JSON.stringify(clintes));
    this.router.navigate(['detailscli']); 
  }

  crear(){
      this.router.navigate(['create-clientes']); 
  }

  private initializeDataTable(): void {
    const dataTableOptions = {
      searchable: true, // Habilitar la barra de búsqueda
      paging: true, // Habilitar la paginación
      perPage: 10,
      labels:{
        placeholder: "Buscar...",
        info: "Mostrando {start} de {end} de {rows} entradas",
        noRows: "No encuentra resutados",
        perPage: "{select} entradas por pagina",
        noResults: "No hay coincidencias",
      }
    };

  }


  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  }


}
