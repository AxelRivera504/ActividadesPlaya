import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ImgbbService } from '../../imgbbService/imgbb.service';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { Actividades } from '../../Model/Actividades';
import { playas } from '../../Model/Playas';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ServicesService } from '../../Service/services.service';
import { trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { data } from 'jquery';
import { Options } from 'sortablejs';
import { Equipos } from '../../Model/Equipos';
import { Router } from '@angular/router';
import { EquipoXActividades } from '../../Model/EquipoXActividades';

@Component({
  selector: 'app-actividades-crear',
  templateUrl: './actividades-crear.component.html',
  styleUrls: ['./actividades-crear.component.scss']
})
export class ActividadesCrearComponent implements OnInit {

  actividades!: Actividades[];
  playas!: playas[];
  equipos: Equipos[] = [];
  equipos1: Equipos[] = [];
  equipoxactividades = new EquipoXActividades()

  playasModel = new playas()
  imgstatus = false
  actividadesModel = new Actividades()
  submitted: boolean = false

  public configdropzone: DropzoneConfigInterface = {
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
    private router:Router) {
       /*Cosas del select*/
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
     }

  ngOnInit(): void {

    this.service.getPlayas()
    .subscribe((data: any)=>{
      this.playas = data
    })

    this.service.getEquipos()
    .subscribe((data: any)=>{
      this.equipos = data
    })
  }

  onUploadError(event: any): void {
    console.log('onUploadError:', event);
  }

  onUploadSuccess(event: any): void {
    console.log('onUploadSuccess:', event[0].dataURL);
    this.imgbbService.uploadImage(event[0])
    .subscribe((data:any)=>{
      if(data.status == 200){
        this.imgstatus = true
        this.actividadesModel.acti_ImgUrl = data.data.url
      }else{
        this.imgstatus = false
      }
    })
  }

  resetDropzoneUploads(): void {
    if (this.directiveRef) {
      this.directiveRef.reset();
    }
  }

  handleFileInput(event: any) {
    console.log("Si quiera entra boludo")
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      console.log(base64String); // Aquí puedes hacer lo que necesites con la representación Base64
    };
    reader.readAsDataURL(file);
  }

  Crear(){
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

    if(this.actividadesModel.acti_ImgUrl == undefined || this.actividadesModel.acti_ImgUrl == ""){
      x = false
    }

    if(x){
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.actividadesModel.acti_UsuarioCreador = idUsuario;
        this.equipoxactividades.eqac_UsuarioCreador = idUsuario;
      }
      console.log(this.actividadesModel)
      this.service.createActividades(this.actividadesModel)
      .subscribe((data:any)=>{
        console.log(data)
        if(data.data.codeStatus == -2){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            title: '¡Ese registro ya existe!',
            icon: 'warning'
          })
        }else  if(data.data.codeStatus == -1){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            title: '¡Registro Ingresado con exito!',
            icon: 'success'
          })
        }else if(data.data.codeStatus >1){
         this.equipoxactividades.acti_Id = data.data.codeStatus
         this.equipos1.forEach(element => {
          this.equipoxactividades.equi_Id = element.equi_Id
            this.service.createEquipoXActividades(this.equipoxactividades)
            .subscribe((data:any)=>{
              console.log(data)
            })
         });
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

}
