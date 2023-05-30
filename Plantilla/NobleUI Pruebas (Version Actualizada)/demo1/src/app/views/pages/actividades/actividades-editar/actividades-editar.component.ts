  import { Component, OnInit, ViewChild } from '@angular/core';
  import Swal from 'sweetalert2';
  import { ServicesService } from '../../Service/services.service';
  import { ImgbbService } from '../../imgbbService/imgbb.service';
  import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
  import { Options } from 'sortablejs';
  import { NgSelectConfig } from '@ng-select/ng-select';
  import { Router } from '@angular/router';
  import { Actividades } from '../../Model/Actividades';
  import { Equipos } from '../../Model/Equipos';
  import { playas } from '../../Model/Playas';
  import { EquipoXActividades } from '../../Model/EquipoXActividades';
  import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
  import { Encargados } from '../../Model/Encargados';
import { EncargadosXActividad } from '../../Model/EncargadosXActividad';
import { id } from '@swimlane/ngx-datatable';
import { never } from 'rxjs';

  @Component({
    selector: 'app-actividades-editar',
    templateUrl: './actividades-editar.component.html',
    styleUrls: ['./actividades-editar.component.scss']
  })
  export class ActividadesEditarComponent implements OnInit {

  
    actividades!: Actividades[];
    playas!: playas[];
    equipos: Equipos[] = [];
    equipos1: Equipos[] = [];
    encargados: [] = [];
    encargadosSeleccionados: [];
    ddl: boolean
    equipoxactividades = new EquipoXActividades()
    encargadosXActividades = new EncargadosXActividad()
    playasModel = new playas()
    imgchanging = false
    lockimg = false
    actividadesModel = new Actividades()
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
      private imgbbService: ImgbbService,
      private config: NgSelectConfig,
      private router:Router,
      private modalService: NgbModal,) {
        /*Cosas del select*/
      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
      /*/Cosas del select*/
      }

      ngOnInit(): void {
        this.service.getEquipos().subscribe((data: any) => {
          this.equipos = data;
        });
      
        this.service.getPlayas().subscribe((data: any) => {
          this.playas = data;
        });

        const getActividad = localStorage.getItem('actividad');
        if (getActividad) {
          this.actividadesModel = JSON.parse(getActividad);
        }

        this.service.getEquipoxActividades(this.actividadesModel.acti_Id)
        .subscribe((data:any)=>{
          this.equipos1 = data

          this.equipos = this.equipos.filter((equipo) => {
            return !this.equipos1.some((equipo1) => equipo1.equi_Id === equipo.equi_Id);
          });
        })

        this.service.getEncargados()
        .subscribe((data:any)=>{
          this.encargados = data
        })

        setTimeout(() => {
          this.service.getEncargadosXActividad(this.actividadesModel.acti_Id)
          .subscribe((data:any)=>{
            console.log(data)
            this.encargadosSeleccionados = data
          })
        },300);

        
      }
    
    onUploadError(event: any): void {
      console.log('onUploadError:', event);
    }

    onUploadSuccess(event: any): void {
      // console.log('onUploadSuccess:', event[0].dataURL);
      this.imgbbService.uploadImage(event[0])
      .subscribe((data:any)=>{
        if(data.status == 200){
          this.actividadesModel.acti_ImgUrl = data.data.url
          this.lockimg = true
        }
      })
    }

    resetDropzoneUploads(): void {
      if (this.directiveRef) {
        this.directiveRef.reset();
      }
    }

    compareFn(encargado1: Encargados, encargado2: Encargados): boolean {
      // Comparar los valores clave de los encargados
      return encargado1.enca_id === encargado2.enca_id;
    }

    Editar(){
      console.log(this.encargadosSeleccionados)
      var x = true

      if(this.actividadesModel.acti_Nombre == undefined || this.actividadesModel.acti_Nombre == ""){
        x = false
      }

      if(this.actividadesModel.acti_Cupo == undefined || this.actividadesModel.acti_Cupo == null){
        x = false
      }

      if(this.actividadesModel.play_Id == undefined || this.actividadesModel.play_Id == null){
        x = false
      }

      if(this.actividadesModel.acti_Precio == undefined || this.actividadesModel.acti_Precio == null){
        x = false
      }

      if(this.encargadosSeleccionados){
        if(this.encargadosSeleccionados.length < 0){
          this.ddl = false
          x = false
        }else{
          this.ddl = true
        }
      }

      if(x){
        const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
        if (idUsuario !== undefined) {
          this.actividadesModel.acti_UsuarioModificador = idUsuario;
          this.equipoxactividades.eqac_UsuarioCreador = idUsuario;
          this.encargadosXActividades.enac_UsuarioCreador = idUsuario;
        }
        this.service.updateActividades(this.actividadesModel)
        .subscribe((data:any)=>{
          // console.log(data)
          if(data.data.codeStatus == 1){
            this.equipoxactividades.acti_Id = this.actividadesModel.acti_Id
            this.encargadosXActividades.acti_Id = this.actividadesModel.acti_Id
              this.service.deleteEquipoXActividades(this.equipoxactividades)
              .subscribe((data:any)=>{
              })

           setTimeout(()=>{
            this.equipos1.forEach(element => {
              this.equipoxactividades.equi_Id = element.equi_Id
              this.service.createEquipoXActividades(this.equipoxactividades)
              .subscribe((data:any)=>{
                console.log("Equipo a insertar: " + element.equi_Descripcion)
              })
            });
           },1000)
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              title: '¡Registro editado con exito!',
              icon: 'success'
            })
            
            this.service.deleteEncargadosXActividad(this.encargadosXActividades)
            .subscribe((data:any)=>{
              console.log(data)
            })           

            setTimeout(() => {
              this.encargadosSeleccionados.forEach(element => {
                this.encargadosXActividades.enca_Id = element
                this.service.createEncargadosXActividad(this.encargadosXActividades)
                .subscribe((data:any)=>{
                  console.log("Encargado a insertar:" + data.enca_Id)
                })
              });
            }, 1000);

            this.router.navigate(["/actividades"])
          }else if(data.data.codeStatus == 2)
          {
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
          }else{
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
      }else{
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
    }

    imgEdit(){
      this.imgchanging = !this.imgchanging
    } 

  }
