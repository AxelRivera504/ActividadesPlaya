import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  usuario: string = '';
  password: string = '';
  submitted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.submitted = false;
  }

  onLoggedin(e: MouseEvent) {
    e.preventDefault();
    const apiUrl = 'https://localhost:44312/api/Usuario/ValidarLogin';

    if (!this.usuario || !this.password) {
      this.submitted = true;
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
      }).fire({
        title: '¡ERROR!, Los campos de contraseña y usuario están vacíos',
        icon: 'error'
      });
      return;
    }

    const requestBody = {
      usua_Usuario: this.usuario,
      usua_Clave: this.password,
    };

    this.http.post(apiUrl, requestBody).subscribe(
      (response: any) => {
        console.log(response)
        if (response.data && response.data.usua_Usuario) {
          localStorage.setItem('IdUsuario', response.data.usua_ID);
          localStorage.setItem('Usuario', response.data.usua_Usuario);
          localStorage.setItem('Enca_Id', response.data.enca_ID);
          localStorage.setItem('enca_NombreCompleto', response.data.enca_NombreCompleto);
          localStorage.setItem('role_Descripcion', response.data.role_Descripcion);
          localStorage.setItem('role_ID', response.data.role_ID);
          localStorage.setItem('isLoggedin', 'true');
          if (localStorage.getItem('isLoggedin')) {
            this.router.navigate([this.returnUrl]);
          }
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
            title: '¡Inicio de sesión exitoso!\nBienvenido(a) ' + response.data.enca_NombreCompleto,
            icon: 'success'
          });
        } else {         
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
            title: '¡ERROR!, Usuario o contraseña incorrectos',
            icon: 'error'
          });
        }
      },
      (error: any) => {
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
        }).fire({
          title: '¡ERROR!, Usuario o contraseña incorrectos',
          icon: 'error'
        });
        console.error(error);
      }
    );
  }
}
