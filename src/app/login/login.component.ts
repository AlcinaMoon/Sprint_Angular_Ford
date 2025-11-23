import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // 1. IMPORTADO AQUI

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nome = '';
  senha = '';
  dataAtual = new Date();


  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  login() {
    if (this.nome !== 'admin' || this.senha !== '123456') {

      this._snackBar.open('Nome ou senha inválidos', 'Fechar', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['error-snackbar'] 
      });
    } else {
      this.router.navigate(['/home']);
    }
  }
}