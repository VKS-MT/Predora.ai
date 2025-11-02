import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sales',
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  private dataService = inject(DataService);
  salesOrders = this.dataService.getSalesOrders();
  
  selectedStatus = 'All';
  
  get filteredOrders() {
    if (this.selectedStatus === 'All') return this.salesOrders;
    return this.salesOrders.filter(o => o.status === this.selectedStatus);
  }
  
  getTotalValue() {
    return this.filteredOrders.reduce((sum, o) => sum + o.value, 0);
  }
}
