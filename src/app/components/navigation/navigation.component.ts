import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  private dataService = inject(DataService);
  currentUser = this.dataService.getCurrentUser();
  
  menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/sales', icon: '💰', label: 'Sales' },
    { path: '/purchase', icon: '🛒', label: 'Purchase' },
    { path: '/inventory', icon: '📦', label: 'Inventory' },
    { path: '/traceability', icon: '🔍', label: 'Traceability' },
    { path: '/compliance', icon: '✅', label: 'Compliance' },
    { path: '/farm-profile', icon: '🌾', label: 'Farm Profile' },
    { path: '/contract-farming', icon: '📝', label: 'Contract Farming' }
  ];
}
