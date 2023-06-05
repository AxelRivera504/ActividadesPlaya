import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicesService } from '../../Service/services.service';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { Options } from 'sortablejs';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { pantallas } from '../../Model/pantallas';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { roles } from '../../Model/roles';
import { RolesXpantallas } from '../../Model/RolesXPantallas';


@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles.Edit.html',
  styleUrls: ['./roles.Edit.scss']
})
export class RolesEditarComponent implements OnInit {


  roles = new roles();
  pantallas!: pantallas[];
  pantallas1!: pantallas[];
  rolesXpantallas = new RolesXpantallas();

  imgchanging = false
  lockimg = false
  submitted: boolean = false
  modalRef: NgbModalRef | undefined;

  public configdropzone: DropzoneConfigInterface = {
    dictDefaultMessage: "Arrastra y suelta los archivos aquí o haz clic para seleccionarlos.",
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  // - Transfer Between Lists - //

  sharedOptions: Options = {
    group: 'shared-group',
  };

  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  constructor(private service: ServicesService,
    private config: NgSelectConfig,
    private router: Router,
    private modalService: NgbModal,) {
    /*Cosas del select*/
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
  }

  ngOnInit(): void {
 

        this.service.obtenerPantallas()
        .subscribe((data: any) => {
          this.pantallas = data
      })
    

    const getRoles = localStorage.getItem('roles');
    if (getRoles) {
      this.roles = JSON.parse(getRoles);
    }

      setTimeout(() => {
    this.service.obtenerPantallasPorRol(this.roles.role_ID)
      .subscribe((data: any) => {
        this.pantallas1 = data

        this.pantallas = this.pantallas.filter((pantalla) => {
          return !this.pantallas1.some((pantalla1) => pantalla1.pant_ID === pantalla.pant_ID);
        });
      })
    },100);

      
  }

  onUploadError(event: any): void {
    console.log('onUploadError:', event);
  }

  Regresar() {
    this.router.navigate(['roles']);
  }

  resetDropzoneUploads(): void {
    if (this.directiveRef) {
      this.directiveRef.reset();
    }
  }

  Editar() {
    var x = true

    if (this.roles.role_Descripcion == undefined || this.roles.role_Descripcion == "" ||this.pantallas1.length === 0) {
      x = false
    }


    if (x) {
      const idUsuario: number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined : parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.roles.role_UsuarioCreador = idUsuario;
      }


      this.service.updateRoles(this.roles)
        .subscribe((data: any) => {
          // console.log(data)
          if (data.data.codeStatus != 0) {
            this.rolesXpantallas.role_ID = this.roles.role_ID
            const roleid = data.data.codeStatus; 
            
            this.service.deleteRolesXpantallas(this.rolesXpantallas)
              .subscribe((data: any) => {
                console.log('La data',data.data.codeStatus)
                if (data.data.codeStatus == 1) {
                    this.pantallas1.forEach(element => {
                      this.rolesXpantallas.pant_ID = element.pant_ID
                      this.rolesXpantallas.roleXpant_UsuarioCreador = 1
                      this.rolesXpantallas.role_ID = roleid
                      this.service.createRolesXpantallas(this.rolesXpantallas).subscribe();

                    });
                 

                  Swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    title: '¡Registro editado con exito!',
                    icon: 'success'
                  })
                  this.router.navigate(["roles"])
                }
              })




          } else if (data.data.codeStatus == 2) {
            this.submitted = true
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: '¡Ese registro ya existe!',
              icon: 'warning'
            })
          } else {
            this.submitted = true
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: '¡Ha ocurrido un error!',
              icon: 'error'
            })
          }
        })
    } else {
      this.submitted = true
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Rellene los campos!',
        icon: 'warning'
      })
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

  imgEdit() {
    this.imgchanging = !this.imgchanging
  }

}
