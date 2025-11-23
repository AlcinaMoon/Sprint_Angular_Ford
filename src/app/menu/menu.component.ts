import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuOnClick(): void {
    const bar = document.getElementById('menu-bar');
    const nav = document.getElementById('nav');
    const bg = document.getElementById('menu-bg');

    if (bar && nav && bg) {
      bar.classList.toggle('change');
      nav.classList.toggle('change');
      bg.classList.toggle('change-bg');
    } else {
      console.warn('Algum elemento não foi encontrado.');
    }
  }
}
