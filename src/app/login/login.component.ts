import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, signal } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,              // <- ESSA LINHA É OBRIGATÓRIA PARA ngModel FUNCIONAR
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nome = '';
  senha = '';

  hide = signal(true);

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  login() {
    if (this.nome !== 'admin' || this.senha !== '123456') {
      this._snackBar.open(
        'Nome ou senha inválidos',
        'Fechar',
        {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        }
      );

    } else {
      this.router.navigate(['/home']);
    }
  }
}