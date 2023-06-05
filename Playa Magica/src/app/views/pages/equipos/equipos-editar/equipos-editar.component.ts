import { Component, OnInit, ViewChild } from '@angular/core';
import { Equipos } from '../../Model/Equipos';
import { ServicesService } from '../../Service/services.service';
import { ImgbbService } from '../../imgbbService/imgbb.service';
import { Router } from '@angular/router';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos-editar',
  templateUrl: './equipos-editar.component.html',
  styleUrls: ['./equipos-editar.component.scss']
})
export class EquiposEditarComponent implements OnInit {

    /*Dropzone config*/
    public configdropzone: DropzoneConfigInterface = {
      dictDefaultMessage: "Arrastra y suelta los archivos aquí o haz clic para seleccionarlos.",
      clickable: true,
      maxFiles: 1,
      autoReset: null,
      errorReset: null,
      cancelReset: null
    };
    @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  /*/Dropzone config*/

  equipos!: Equipos[]
  equiposModel = new Equipos()
  submitted = false
  imgchanging = false
  constructor(private service: ServicesService,
    private imgbbService: ImgbbService,
    private router:Router) { }

  ngOnInit(): void {
    const getEquipo = localStorage.getItem('equipo');
    if (getEquipo) {
      this.equiposModel = JSON.parse(getEquipo);
      console.log(getEquipo)
    }
  }

  onUploadError(event: any): void {
    console.log('onUploadError:', event);
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: 'Ha ocurrido un error al subir la imagen',
      icon: 'error'
    })
  }

  onUploadSuccess(event: any): void {
    console.log('onUploadSuccess:', event[0].dataURL);
    this.imgbbService.uploadImage(event[0])
    .subscribe((data:any)=>{
      if(data.status == 200){
        this.equiposModel.equi_ImgUrL = data.data.url
      }
    })
  }

  resetDropzoneUploads(): void {
    if (this.directiveRef) {
      this.equiposModel.equi_ImgUrL = ""
      this.directiveRef.reset();
    }
  }

  Guardar(){
    var x = true

    if(this.equiposModel.equi_Descripcion == undefined || this.equiposModel.equi_Descripcion == ""){
      x = false
    }

    if(this.equiposModel.equi_UsoLimite == undefined || this.equiposModel.equi_UsoLimite == null){
      x = false
    }

    if(x){
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.equiposModel.equi_UsuarioModificador = idUsuario;
      }
      this.service.updateEquipos(this.equiposModel)
      .subscribe((data:any)=>{
        console.log(data)
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
          this.router.navigate(["/equipos"])
        }else if(data.data.codeStatus == 2){
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

  
  Regresar(){
    this.router.navigate(["/equipos"])
  }

}
