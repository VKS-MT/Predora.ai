import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './components/sales/sales.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { TraceabilityComponent } from './components/traceability/traceability.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { FarmProfileComponent } from './components/farm-profile/farm-profile.component';
import { ContractFarmingComponent } from './components/contract-farming/contract-farming.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'traceability', component: TraceabilityComponent },
      { path: 'compliance', component: ComplianceComponent },
      { path: 'farm-profile', component: FarmProfileComponent },
      { path: 'contract-farming', component: ContractFarmingComponent }
    ]
  }
];
