import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-traceability',
  imports: [CommonModule],
  templateUrl: './traceability.component.html',
  styleUrl: './traceability.component.scss'
})
export class TraceabilityComponent {
  private dataService = inject(DataService);
  batches = this.dataService.getBatches();
  selectedBatch = this.batches[0];
  
  selectBatch(batch: any) {
    this.selectedBatch = batch;
  }
}
