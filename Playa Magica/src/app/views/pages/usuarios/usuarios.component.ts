import { Component, ElementRef, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { usuarios } from '../Model/Usuarios';
import { ServicesService } from '../Service/services.service';
import { Encargados } from '../Model/Encargados';
import { roles } from '../Model/roles';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { data } from 'jquery';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  UsuariosCreate: usuarios = new usuarios();
  UsuariosEdit: usuarios= new usuarios();
  UsuarioId:string;
  encargados!:Encargados[];
  roles !: roles[];
  usuarios!: usuarios[];

  constructor(private service: ServicesService, 
    private modalService: NgbModal, 
    private router:Router,
    private config: NgSelectConfig) {
      
      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
     }
     
     basicModalCloseResult: string = '';
     submitted: boolean = false;
     modalRef: NgbModalRef | undefined;


     @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();
  

  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.UsuariosCreate = new usuarios()
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
 




  openBasicModal1(content: TemplateRef<any>, usuario: usuarios) {
    this.UsuariosEdit.role_ID = usuario.role_ID;
    this.UsuariosEdit.usua_ID = usuario.usua_ID;
    this.UsuariosEdit.usua_Usuario = usuario.usua_Usuario;
    const encargadoPredeterminado: Encargados = {
      enca_id: -1,
      enca_Nombres: '',
      enca_Apellidos: '',
      enca_DNI: '',
      enca_Email: '',
      enca_NombreCompleto: '',
      enca_Telefono: '',
      enca_Sexo: '',
      esci_Descripcion: '',
      enca_FechaNac: new Date('2023-01-01'),
      enca_UsuarioModificador: 0,
      esci_id: 0,
      enca_FechaModificacion: new Date('2023-01-01'),
      enca_UsuarioModificador_Nombre: '',
      enca_FechaCreacion: 0,
      enca_UsuarioCreador_Nombre:'',
      enca_UsuarioCreador:0,
      nombreCompletoEnca: '',
      // Agregar las propiedades adicionales según el tipo Encargados
    };
    encargadoPredeterminado.enca_NombreCompleto = usuario.enca_NombreCompleto;
    this.encargados.push(encargadoPredeterminado);
    this.UsuariosEdit.enca_ID = encargadoPredeterminado.enca_id;
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result
      .then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
        if (this.UsuariosEdit.enca_ID === -1) {
          this.encargados.splice(this.encargados.length - 1, 1); // Eliminar el encargado con ID -1
        }
      })
      .catch((res) => {});
  }
  




  openBasicModal2(content: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("usua_ID",id.toString())
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data => {
      console.log(data);
      this.usuarios = data;
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
    
    this.service.getEncargadosddl().subscribe(data => {
      console.log('ddl',data);
      this.encargados = data;
     console.log(data);

    });

    
    this.service.getRoles().subscribe(data => {
      console.log(data);
      this.roles = data;
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

  Guardar(){
    var tets = true
  
    if(this.UsuariosCreate.role_ID == undefined || this.UsuariosCreate.role_ID == ""){
      tets = false
     }
    
     if(this.UsuariosCreate.enca_ID == undefined || this.UsuariosCreate.enca_ID == 0){
      tets = false
     }
    if(this.UsuariosCreate.usua_Usuario == undefined || this.UsuariosCreate.usua_Usuario == ""){
      tets = false
    }
  
    
    if(this.UsuariosCreate.usua_Clave == undefined || this.UsuariosCreate.usua_Clave == ""){
      tets = false
    }
  
      if(tets == true){
        const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
        if (idUsuario !== undefined) {
          this.UsuariosCreate.usua_UsuarioCreador = idUsuario;
        }
        this.service.createUsuarios(this.UsuariosCreate)
        .subscribe((data: any) =>{
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
              this.service.getUsuarios().subscribe(data => {
                this.usuarios = data;
              });
            }, 0.5);
            this.service.getEncargadosddl().subscribe(data => {
              console.log(data);
              this.encargados = data;
            });
          }else if (data.data.codeStatus == 2){
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


    Editar(){
      var x = true
  
    if(this.UsuariosEdit.usua_ID == undefined || this.UsuariosEdit.usua_ID == ""){
     x = false
    }    
    if(this.UsuariosEdit.usua_Usuario == undefined || this.UsuariosEdit.usua_Usuario  == ""){
      x = false
    }
    
    if(x){
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.UsuariosEdit.usua_UsuarioModificador = idUsuario;         
      }

      this.service.updateUsuarios(this.UsuariosEdit)
      .subscribe((data: any) =>{
        console.log(data)
        if(data.data.codeStatus == 1){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            title: '¡Registro editado con exito!',
            icon: 'success'
          })
          this.modalService.dismissAll()
          setTimeout(() => {
            this.service.getUsuarios().subscribe(data => {
              this.usuarios = data;
            });

          }, 0.5);
        }else if(data.data.codeStatus ==2){
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

   Eliminar( ){
    const usua_id : number | undefined = isNaN(parseInt(localStorage.getItem("usua_ID") ?? '', 0)) ? undefined: parseInt(localStorage.getItem("usua_ID") ?? '', 0);
    
    console.log(this.UsuariosEdit)
    if (usua_id !== undefined) {
      this.UsuariosEdit.usua_ID = usua_id.toString();
    }
    console.log('datos',this.UsuariosEdit),
    console.log('usuario',this.UsuariosEdit.usua_ID)

    if(this.UsuariosEdit.usua_ID.toString() != localStorage.getItem("IdUsuario")?.toString())
   {
    this.service.deleteUsuarios(this.UsuariosEdit).subscribe((data: any) => {
    console.log(data);
    console.log(data.data.codeStatus)
    if (data.data.codeStatus == 1) {
      console.log(data.data.codeStatus)
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Usuario eliminado con éxito!',
        icon: 'success'
      });
      this.modalService.dismissAll()
      setTimeout(() => {
        this.service.getUsuarios().subscribe(data => {
          this.usuarios = data;
        });

      }, 0.5);
    }
  });
   }
   else {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡El usuario que intentas borrar esta en uso!',
      icon: 'error'
    })
   }
}
   Detalles(usuarios: usuarios){
    localStorage.setItem('usuario', JSON.stringify(usuarios));
    this.router.navigate(["/Detalles"])
  }
 }

































