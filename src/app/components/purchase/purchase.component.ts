import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-purchase',
  imports: [CommonModule, FormsModule],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  private dataService = inject(DataService);
  purchaseOrders = this.dataService.getPurchaseOrders();
  selectedStatus = 'All';
  
  get filteredOrders() {
    if (this.selectedStatus === 'All') return this.purchaseOrders;
    return this.purchaseOrders.filter(o => o.status === this.selectedStatus);
  }
  
  getTotalValue() {
    return this.filteredOrders.reduce((sum, o) => sum + o.value, 0);
  }
}
