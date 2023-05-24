import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { direcciones } from '../Model/direcciones';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { departamentos } from '../Model/departamentos';
import { municipios } from '../Model/municipios';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();
  direcciones!:direcciones[];
  departamento!: departamentos[];
  municipio!: municipios[];
  municipiotemp!: municipios[];
  

  direccionesModel: direcciones = new direcciones();
  departamentoModel: departamentos = new departamentos();
  municipioModel: municipios = new municipios();
  basicModalCloseResult: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;

  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.direccionesModel = new direcciones()
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,  
    private config: NgSelectConfig) {
          /*Cosas del select*/
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
     }
  ngOnInit(): void {
    this.service.getDirecciones().subscribe(data => {
      console.log(data);
      this.direcciones = data;
      this.dtTrigger.next(null);

      this.service.getDepartamentos().subscribe(data => {
        console.log(data);
        this.departamento = data;
      });

      this.service.getMunicipios().subscribe(data => {
        console.log(data);
        this.municipio = data;
      });

    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  cargarddl(){
    console.log("Entra")
 
  }

  onDepartamentoChange() {
    this.municipiotemp = this.municipio
    setTimeout(() => {
      const municipiosDepartamento = this.municipio.filter(item => item.dept_Id === this.departamentoModel.dept_Id);
      console.log(municipiosDepartamento)
      this.municipiotemp = municipiosDepartamento
    }, 1);
  }
}
