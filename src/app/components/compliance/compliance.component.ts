import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compliance',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.scss'
})
export class ComplianceComponent {
  private dataService = inject(DataService);
  complianceItems = this.dataService.getCompliance();
  
  getCompliantCount() {
    return this.complianceItems.filter(i => i.status === 'Compliant').length;
  }
  
  getPendingCount() {
    return this.complianceItems.filter(i => i.status === 'Pending').length;
  }
  
  getMissingCount() {
    return this.complianceItems.filter(i => i.status === 'Missing').length;
  }
}
