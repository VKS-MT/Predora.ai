import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  private dataService = inject(DataService);
  inventory = this.dataService.getInventory();
  
  getTotalValue() {
    return this.inventory.reduce((sum, item) => sum + item.value, 0);
  }
  
  isLowStock(item: any) {
    return item.quantity <= item.reorderLevel;
  }
  
  getLowStockCount() {
    return this.inventory.filter(i => this.isLowStock(i)).length;
  }
}
