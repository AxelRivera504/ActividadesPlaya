import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { playas } from '../../Model/Playas';
import { ImgbbService } from '../../imgbbService/imgbb.service';
import { ServicesService } from '../../Service/services.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { direcciones } from '../../Model/direcciones';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { departamentos } from '../../Model/departamentos';
import { municipios } from '../../Model/municipios';

@Component({
  selector: 'app-create-playitas',
  templateUrl: './create-playitas.component.html',
  styleUrls: ['./create-playitas.component.scss']
})
export class CreatePlayitasComponent implements OnInit {

  playas!: playas[]

  direcciones!: direcciones[]
  departamentos!: departamentos[]
  municipios!: municipios[]
  municipioddl!: municipios[];
  direccionesModel = new direcciones()
  playasModel = new playas()
  departamentosModel = new departamentos()
  municipioModel = new municipios()
  submitted: boolean = false  
  submitted1: boolean = false  
  departamentoModel: departamentos = new departamentos();
  basicModalCloseResult: string = '';
  public configdropzone: DropzoneConfigInterface = {
    dictDefaultMessage: "Arrastra y suelta los archivos aquí o haz clic para seleccionarlos.",
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  onUploadError(event: any): void {
    console.log('onUploadError:', event);
  }

  onUploadSuccess(event: any): void {
    console.log('onUploadSuccess:', event[0].dataURL);
    this.imgbbService.uploadImage(event[0])
    .subscribe((data:any)=>{
      if(data.status == 200){
        this.playasModel.play_ImgUrl = data.data.url
      }
    })
  }

  resetDropzoneUploads(): void {
    if (this.directiveRef) {
      this.playasModel.play_ImgUrl = ""
      this.directiveRef.reset();
    }
  }

  constructor(private service: ServicesService,
    private imgbbService: ImgbbService,
    private config: NgSelectConfig,
    private router:Router,
    private modalService: NgbModal) { 
             /*Cosas del select*/
    this.config.notFoundText = 'Seleccione un departamento';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
    }

  ngOnInit(): void {

    this.service.getPlayas()
    .subscribe((data: any)=>{
      this.playas = data
    })

    this.service.getDirecciones()
    .subscribe((data:any)=>{
      this.direcciones = data
    })

    this.service.getDepartamentos()
    .subscribe((data:any)=>{
      this.departamentos = data
    })

    this.service.getMunicipios()
    .subscribe((data:any)=>{
      this.municipios = data
    })
  }

  onDepartamentoChange() {
    this.municipioModel = new municipios()
    if(this.departamentoModel.dept_Id == null){
      this.municipioddl = []
      this.municipioModel = new municipios()
    }
    setTimeout(() => {
      const municipiosDepartamento = this.municipios.filter(item => item.dept_Id === this.departamentoModel.dept_Id);
      console.log(municipiosDepartamento)
      this.municipioddl = municipiosDepartamento
    }, 1);
  }


  openBasicModal(content: TemplateRef<any>) {
    this.submitted1 = false;
    this.direccionesModel = new direcciones()
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  Guardar(){
    var x = true
    if(this.departamentoModel.dept_Id == undefined || this.departamentoModel.dept_Id == ""){
      x = false
    } 
  
    if(this.municipioModel.muni_Id == undefined || this.municipioModel.muni_Id == ""){
      x = false
    }
  
    if(this.direccionesModel.dire_DireccionExacta == undefined || this.direccionesModel.dire_DireccionExacta == ""){
      x = false
    }
  
    if(x){
   
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.direccionesModel.dire_UsuarioCreador = idUsuario;
      }
      this.direccionesModel.muni_Id = this.municipioModel.muni_Id
      this.service.createDirecciones(this.direccionesModel)
      .subscribe((data:any) =>{
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
          this.modalService.dismissAll()
          setTimeout(() => {
            this.service.getDirecciones()
            .subscribe(data => {
              console.log(data);
              this.direcciones = data
              const ultimoRegistro = data.find(direccion => direccion.dire_Id === data[data.length - 1].dire_Id);
              if(ultimoRegistro){
               this.playasModel.dire_Id = ultimoRegistro.dire_Id
              }
            });
          }, 1000);
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
      this.submitted1 = true
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

  Crear(){
    var x = true

    if(this.playasModel.play_Playa == undefined || this.playasModel.play_Playa == ""){
      x = false
    }

    if(this.playasModel.dire_Id == null || this.playasModel.dire_Id == undefined){
      x = false
    }

    if(this.playasModel.play_ImgUrl == undefined || this.playasModel.play_ImgUrl == ""){
      x = false
    }

    if(x){
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.playasModel.play_UsuarioCreador = idUsuario;
      }
      this.service.createPlayas(this.playasModel)
      .subscribe((data:any)=>{
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
          this.router.navigate(["/listplayitas"])
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

}
