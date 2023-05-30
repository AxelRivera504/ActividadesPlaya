import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { roles } from '../Model/roles';
import { ServicesService } from '../Service/services.service';
import { pantallas } from '../Model/pantallas';
import { RolesXpantallas } from '../Model/RolesXPantallas';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: roles[] = [];
  pantallas: RolesXpantallas[] = [];
  mostrarTablaMaestra: boolean = false;
  rolSeleccionado: number | null = null;
  role: roles = new roles()
  basicModalCode: any;
  basicModalCloseResult: string = '';
  modalRef: NgbModalRef | undefined;

  constructor(private service: ServicesService, private router: Router, private modalService: NgbModal) { }

  @ViewChild(DataTableDirective, { static: false })
  private datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.service.getRoles().subscribe(data => {
      console.log(data);
      this.roles = data;
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  ngAfterViewInit(): void {
    this.initializeDataTable();
  }

  Editar(roles: roles) {
    localStorage.setItem('roles', JSON.stringify(roles));
    this.router.navigate(["EditarRoles"])
  }
  
  openBasicModal1(content: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("role_ID",id.toString())
  }
  
  crear() {
    this.router.navigate(["Create"]);
  }

  private initializeDataTable(): void {
    setTimeout(() => {
      if (this.datatableElement && this.datatableElement.dtInstance) {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    }, 0);
  }

  mostrarPantallas(roleID: number) {
    if (this.rolSeleccionado === roleID) {
      // Si el rol seleccionado es el mismo, se oculta la tabla maestra
      this.mostrarTablaMaestra = false;
      this.rolSeleccionado = null;
    } else {
      this.rolSeleccionado = roleID;
      this.obtenerPantallasPorRol(roleID).subscribe(
        (data) => {
          console.log(data);
          this.pantallas = data;
          this.mostrarTablaMaestra = true;
          this.initializeDataTable(); // Reinicializa el DataTable para mostrar las tablas maestras
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  obtenerPantallasPorRol(roleID: number) {
    return this.service.obtenerPantallasPorRol(roleID);
  }

  Detalles(roles: roles){
    localStorage.setItem('roles', JSON.stringify(roles));
    this.router.navigate(["/DetallesRoles"])
  }
  
  
  Eliminar( ){
    const role_Id : number | undefined = isNaN(parseInt(localStorage.getItem("role_ID") ?? '', 0)) ? undefined: parseInt(localStorage.getItem("role_ID") ?? '', 0);
    
    console.log(this.roles)
    if (role_Id !== undefined) {
      this.role.role_ID = role_Id;
    }

  this.service.deleteRoles(this.role).subscribe((data: any) => {
    console.log(data);
    console.log(data.data.codeStatus)
    if (data.data.codeStatus == 1) {
      console.log(data.data.codeStatus)
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        title: '¡Roles eliminado con éxito!',
        icon: 'success'
      });
      this.modalService.dismissAll()
      setTimeout(() => {
        this.service.getRoles().subscribe(data => {
          this.roles = data;
        });

      }, 0.5);
    }
    else if(data.data.codeStatus == 2)
     {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        title: '¡El rol que quiere eliminar esta en uso!',
        icon: 'error'
      })
      this.modalService.dismissAll()
      setTimeout(() => {
        this.service.getRoles().subscribe(data => {
          this.roles = data;
        });

      }, 0.5);
     }






  });
  
}
}
