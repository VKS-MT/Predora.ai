import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contract-farming',
  imports: [CommonModule, FormsModule],
  templateUrl: './contract-farming.component.html',
  styleUrl: './contract-farming.component.scss'
})
export class ContractFarmingComponent {
  private dataService = inject(DataService);
  contracts = this.dataService.getContracts();
  selectedStatus = 'All';
  
  get filteredContracts() {
    if (this.selectedStatus === 'All') return this.contracts;
    return this.contracts.filter(c => c.status === this.selectedStatus);
  }
  
  getTotalArea() {
    return this.filteredContracts.reduce((sum, c) => sum + c.area, 0);
  }
  
  getTotalExpectedYield() {
    return this.filteredContracts.reduce((sum, c) => sum + c.expectedYield, 0);
  }
  
  getActiveCount() {
    return this.contracts.filter(c => c.status === 'Active').length;
  }
}
