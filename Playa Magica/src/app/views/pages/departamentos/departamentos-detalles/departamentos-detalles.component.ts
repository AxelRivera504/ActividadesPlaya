import { Component, OnInit } from '@angular/core';
import { departamentos } from '../../Model/departamentos';
import { ServicesService } from '../../Service/services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos-detalles',
  templateUrl: './departamentos-detalles.component.html',
  styleUrls: ['./departamentos-detalles.component.scss']
})
export class DepartamentosDetallesComponent implements OnInit {
  departamento!: departamentos;

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,) { }

  ngOnInit(): void {
    const departamentoStr = localStorage.getItem('departamento');
    if (departamentoStr) {
      this.departamento = JSON.parse(departamentoStr);
      console.log(this.departamento)
    }
  }


  Regresar(){
    this.router.navigate(["/departamentos"])
  }
}
