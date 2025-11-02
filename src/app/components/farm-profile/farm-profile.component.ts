import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-farm-profile',
  imports: [CommonModule],
  templateUrl: './farm-profile.component.html',
  styleUrl: './farm-profile.component.scss'
})
export class FarmProfileComponent {
  private dataService = inject(DataService);
  farmPlots = this.dataService.getFarmPlots();
  
  getTotalArea() {
    return this.farmPlots.reduce((sum, plot) => sum + plot.area, 0);
  }
}
