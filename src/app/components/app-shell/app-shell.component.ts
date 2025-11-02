import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  isTablet = false;

  menuItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/sales', icon: 'shopping_cart', label: 'Sales' },
    { path: '/purchase', icon: 'shopping_bag', label: 'Purchase' },
    { path: '/inventory', icon: 'inventory_2', label: 'Inventory' },
    { path: '/traceability', icon: 'search', label: 'Traceability' },
    { path: '/compliance', icon: 'verified', label: 'Compliance' },
    { path: '/farm-profile', icon: 'agriculture', label: 'Farm Profile' },
    { path: '/contract-farming', icon: 'description', label: 'Contracts' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
      this.isTablet = this.breakpointObserver.isMatched(Breakpoints.Tablet);
    });
  }

  get sidenavMode() {
    return this.isMobile ? 'over' : 'side';
  }

  get sidenavOpened() {
    return !this.isMobile;
  }
}
