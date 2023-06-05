import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { Encargados } from '../Model/Encargados';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-encargados',
  templateUrl: './encargados.component.html',
  styleUrls: ['./encargados.component.scss']
})
export class EncargadosComponent implements OnInit {
  basicModalCode: any;
  basicModalCloseResult: string = '';
  modalRef: NgbModalRef | undefined;
  Encargados!: Encargados[];

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  
  encargados1: Encargados = new Encargados();
  @ViewChild('myTable', { static: false }) table!: ElementRef;

  constructor(private service: ServicesService, private router: Router,private modalService: NgbModal) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getEncargados().subscribe(data => {
      console.log(data);
      this.Encargados = data;

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

  Editar(encargados1:Encargados){
    localStorage.setItem('encargadosEd', JSON.stringify(encargados1));
    this.router.navigate(['editar-enc']); 
  }

  openBasicModal1(content: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("enca_id",id.toString())
  }

  Detalles(encargados: Encargados){
    localStorage.setItem('encargados', JSON.stringify(encargados));
    this.router.navigate(['details-enc']); 
  }


  Delete(){
    const enca_id : number | undefined = isNaN(parseInt(localStorage.getItem("enca_id") ?? '', 0)) ? undefined: parseInt(localStorage.getItem("enca_id") ?? '', 0);
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.encargados1.enca_UsuarioModificador = idUsuario;
    }
    if (enca_id !== undefined) {
      this.encargados1.enca_id = enca_id;
    }
    this.service.DeleteEncargados(this.encargados1).
    subscribe((data:any)=>{
      console.log(this.encargados1);
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
          this.service.getEncargados().subscribe(data=>{
            this.Encargados = data;
            this.rerender();
      })
      }else if(data.data.codeStatus == -5){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: '¡El registro esta siendo utilizado!',
            icon: 'error'
        })
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: '¡Ha ocurrido un error!',
            icon: 'error'
        })
      }
    })
  } 

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  }

  crear(){
    this.router.navigate(['crear']); 
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

}
