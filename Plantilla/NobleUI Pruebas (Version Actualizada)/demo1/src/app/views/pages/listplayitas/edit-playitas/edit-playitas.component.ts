import { Component, OnInit } from '@angular/core';
import { playas } from '../../Model/Playas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-playitas',
  templateUrl: './edit-playitas.component.html',
  styleUrls: ['./edit-playitas.component.scss']
})
export class EditPlayitasComponent implements OnInit {
  playas!: playas;
  constructor(private router:Router) { }

  ngOnInit(): void {
    const getPlayas = localStorage.getItem('playas');
    if (getPlayas) {
      this.playas = JSON.parse(getPlayas);
      console.log(getPlayas)
    }
  }

  Regresar(){
    this.router.navigate(["/actividades"])
  }
}
