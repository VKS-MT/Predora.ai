import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private dataService = inject(DataService);
  stats = this.dataService.getDashboardStats();
  currentUser = this.dataService.getCurrentUser();
  recentSales = this.dataService.getSalesOrders().slice(0, 5);
  recentPurchases = this.dataService.getPurchaseOrders().slice(0, 5);
  complianceItems = this.dataService.getCompliance();
}
