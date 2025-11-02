import { Component, inject, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, BaseChartDirective],
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
  
  getComplianceRate() {
    const compliant = this.complianceItems.filter(c => c.status === 'Compliant').length;
    return ((compliant / this.complianceItems.length) * 100).toFixed(0);
  }

  // Sales Trend Chart Configuration
  public salesChartType: ChartType = 'line';
  
  public salesChartData: ChartConfiguration['data'] = {
    labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024'],
    datasets: [
      {
        label: 'Sales Volume (k units)',
        data: [45, 52, 61, 58, 68, 78],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#10b981'
      },
      {
        label: 'Sales Value (€m)',
        data: [44, 50, 60, 63, 66, 72],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#059669'
      }
    ]
  };

  public salesChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11
          }
        }
      }
    }
  };
}
