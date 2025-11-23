import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MenuComponent,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openWelcomeDialog();
  }

  openWelcomeDialog(): void {
    this.dialog.open(WelcomeComponent, {
      width: '800px',
      height: '600px',
      panelClass: 'welcome-dialog-panel'
    });
  }
}
