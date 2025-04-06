import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.contrasena === 'admin') {
      this.router.navigate(['/inicio']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
