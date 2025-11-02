import { Injectable } from '@angular/core';

export interface User {
  name: string;
  role: string;
  email: string;
}

export interface SalesOrder {
  id: string;
  orderNumber: string;
  customer: string;
  items: string;
  quantity: number;
  value: number;
  status: 'Draft' | 'Confirmed' | 'Delivered';
  date: string;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  vendor: string;
  items: string;
  quantity: number;
  value: number;
  status: 'Requested' | 'Approved' | 'Received';
  date: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  warehouse: string;
  reorderLevel: number;
  value: number;
}

export interface Batch {
  id: string;
  batchNumber: string;
  item: string;
  quantity: number;
  supplier: string;
  customer: string;
  harvestDate: string;
  deliveryDate: string;
  status: string;
}

export interface ComplianceItem {
  id: string;
  standard: string;
  status: 'Compliant' | 'Pending' | 'Missing';
  lastAudit: string;
  nextAudit: string;
  certificate: string;
}

export interface FarmPlot {
  id: string;
  name: string;
  crop: string;
  area: number;
  location: string;
}

export interface Contract {
  id: string;
  contractNumber: string;
  farmer: string;
  crop: string;
  area: number;
  duration: string;
  status: 'Registered' | 'Active' | 'Completed';
  startDate: string;
  expectedYield: number;
}

export interface DashboardStats {
  totalOrders: number;
  inventoryValue: number;
  complianceAlerts: number;
  activeContracts: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: User = {
    name: 'Anna Bauer',
    role: 'Admin',
    email: 'anna.bauer@predora.ai'
  };

  dashboardStats: DashboardStats = {
    totalOrders: 1247,
    inventoryValue: 385420,
    complianceAlerts: 3,
    activeContracts: 18
  };

  salesOrders: SalesOrder[] = [
    {
      id: '1',
      orderNumber: 'SO-2025-001',
      customer: 'Obsthandel Müller GmbH',
      items: 'Strawberries, Premium Grade',
      quantity: 500,
      value: 12500,
      status: 'Confirmed',
      date: '15.04.2025'
    },
    {
      id: '2',
      orderNumber: 'SO-2025-002',
      customer: 'Fruchtgroßhandel Schmidt',
      items: 'Raspberries, Organic',
      quantity: 300,
      value: 18900,
      status: 'Delivered',
      date: '12.04.2025'
    },
    {
      id: '3',
      orderNumber: 'SO-2025-003',
      customer: 'Bio-Markt Weber & Co.',
      items: 'Blueberries, Fresh',
      quantity: 200,
      value: 8600,
      status: 'Draft',
      date: '18.04.2025'
    },
    {
      id: '4',
      orderNumber: 'SO-2025-004',
      customer: 'Edeka Regionalgesellschaft',
      items: 'Mixed Berries, Grade A',
      quantity: 750,
      value: 22500,
      status: 'Confirmed',
      date: '14.04.2025'
    },
    {
      id: '5',
      orderNumber: 'SO-2025-005',
      customer: 'Rewe Frische Center',
      items: 'Strawberries, Organic',
      quantity: 400,
      value: 16000,
      status: 'Delivered',
      date: '10.04.2025'
    },
    {
      id: '6',
      orderNumber: 'SO-2025-006',
      customer: 'Kaufland Distribution',
      items: 'Raspberries, Premium',
      quantity: 600,
      value: 37800,
      status: 'Confirmed',
      date: '16.04.2025'
    }
  ];

  purchaseOrders: PurchaseOrder[] = [
    {
      id: '1',
      poNumber: 'PO-2025-001',
      vendor: 'Beerenhof Schmidt',
      items: 'Strawberry Seedlings',
      quantity: 5000,
      value: 15000,
      status: 'Approved',
      date: '05.04.2025'
    },
    {
      id: '2',
      poNumber: 'PO-2025-002',
      vendor: 'Landgut Weber',
      items: 'Organic Fertilizer',
      quantity: 2000,
      value: 8400,
      status: 'Received',
      date: '02.04.2025'
    },
    {
      id: '3',
      poNumber: 'PO-2025-003',
      vendor: 'AgriTech Deutschland',
      items: 'Irrigation Equipment',
      quantity: 10,
      value: 12000,
      status: 'Requested',
      date: '08.04.2025'
    },
    {
      id: '4',
      poNumber: 'PO-2025-004',
      vendor: 'BioPlant Nursery',
      items: 'Raspberry Plants',
      quantity: 3000,
      value: 18000,
      status: 'Approved',
      date: '06.04.2025'
    },
    {
      id: '5',
      poNumber: 'PO-2025-005',
      vendor: 'Packaging Solutions GmbH',
      items: 'Berry Containers (500g)',
      quantity: 10000,
      value: 5000,
      status: 'Received',
      date: '01.04.2025'
    }
  ];

  inventory: InventoryItem[] = [
    {
      id: '1',
      name: 'Strawberries',
      category: 'Fresh Berries',
      quantity: 1250,
      unit: 'kg',
      warehouse: 'Main Cold Storage',
      reorderLevel: 500,
      value: 31250
    },
    {
      id: '2',
      name: 'Raspberries',
      category: 'Fresh Berries',
      quantity: 850,
      unit: 'kg',
      warehouse: 'Main Cold Storage',
      reorderLevel: 400,
      value: 53550
    },
    {
      id: '3',
      name: 'Blueberries',
      category: 'Fresh Berries',
      quantity: 620,
      unit: 'kg',
      warehouse: 'Main Cold Storage',
      reorderLevel: 300,
      value: 26660
    },
    {
      id: '4',
      name: 'Blackberries',
      category: 'Fresh Berries',
      quantity: 380,
      unit: 'kg',
      warehouse: 'Packing Shed',
      reorderLevel: 200,
      value: 17860
    },
    {
      id: '5',
      name: 'Organic Fertilizer',
      category: 'Farm Supplies',
      quantity: 1500,
      unit: 'kg',
      warehouse: 'Storage Unit A',
      reorderLevel: 500,
      value: 6300
    },
    {
      id: '6',
      name: 'Berry Containers',
      category: 'Packaging',
      quantity: 8500,
      unit: 'pcs',
      warehouse: 'Packing Shed',
      reorderLevel: 2000,
      value: 4250
    }
  ];

  batches: Batch[] = [
    {
      id: '1',
      batchNumber: 'BATCH-2025-STR-001',
      item: 'Strawberries Premium',
      quantity: 500,
      supplier: 'Obsthof Bauer - Plot A',
      customer: 'Obsthandel Müller GmbH',
      harvestDate: '10.04.2025',
      deliveryDate: '15.04.2025',
      status: 'Delivered'
    },
    {
      id: '2',
      batchNumber: 'BATCH-2025-RAS-001',
      item: 'Raspberries Organic',
      quantity: 300,
      supplier: 'Obsthof Bauer - Plot B',
      customer: 'Fruchtgroßhandel Schmidt',
      harvestDate: '08.04.2025',
      deliveryDate: '12.04.2025',
      status: 'Delivered'
    },
    {
      id: '3',
      batchNumber: 'BATCH-2025-BLU-001',
      item: 'Blueberries Fresh',
      quantity: 200,
      supplier: 'Obsthof Bauer - Plot C',
      customer: 'Bio-Markt Weber & Co.',
      harvestDate: '12.04.2025',
      deliveryDate: '18.04.2025',
      status: 'In Transit'
    },
    {
      id: '4',
      batchNumber: 'BATCH-2025-STR-002',
      item: 'Strawberries Grade A',
      quantity: 750,
      supplier: 'Beerenhof Schmidt',
      customer: 'Edeka Regionalgesellschaft',
      harvestDate: '11.04.2025',
      deliveryDate: '14.04.2025',
      status: 'Processing'
    },
    {
      id: '5',
      batchNumber: 'BATCH-2025-MIX-001',
      item: 'Mixed Berries',
      quantity: 400,
      supplier: 'Multiple Farms',
      customer: 'Rewe Frische Center',
      harvestDate: '09.04.2025',
      deliveryDate: '10.04.2025',
      status: 'Delivered'
    }
  ];

  compliance: ComplianceItem[] = [
    {
      id: '1',
      standard: 'GlobalG.A.P. Certification',
      status: 'Compliant',
      lastAudit: '15.01.2025',
      nextAudit: '15.01.2026',
      certificate: 'GGAP-DE-2025-001'
    },
    {
      id: '2',
      standard: 'QS Certification (Qualität und Sicherheit)',
      status: 'Compliant',
      lastAudit: '20.02.2025',
      nextAudit: '20.02.2026',
      certificate: 'QS-DE-2025-089'
    },
    {
      id: '3',
      standard: 'EU Organic Regulation (834/2007)',
      status: 'Pending',
      lastAudit: '10.03.2025',
      nextAudit: '10.09.2025',
      certificate: 'BIO-DE-006-12345'
    },
    {
      id: '4',
      standard: 'HACCP Food Safety',
      status: 'Compliant',
      lastAudit: '05.01.2025',
      nextAudit: '05.07.2025',
      certificate: 'HACCP-2025-DE-034'
    },
    {
      id: '5',
      standard: 'IFS Food Standard',
      status: 'Missing',
      lastAudit: '—',
      nextAudit: 'Pending',
      certificate: 'Not Yet Issued'
    }
  ];

  farmPlots: FarmPlot[] = [
    {
      id: '1',
      name: 'Plot A - Strawberries',
      crop: 'Strawberries',
      area: 5.5,
      location: '52.5200° N, 13.4050° E'
    },
    {
      id: '2',
      name: 'Plot B - Raspberries',
      crop: 'Raspberries',
      area: 3.2,
      location: '52.5185° N, 13.4020° E'
    },
    {
      id: '3',
      name: 'Plot C - Blueberries',
      crop: 'Blueberries',
      area: 4.8,
      location: '52.5215° N, 13.4075° E'
    }
  ];

  contracts: Contract[] = [
    {
      id: '1',
      contractNumber: 'CF-2025-001',
      farmer: 'Johann Keller',
      crop: 'Strawberries',
      area: 2.5,
      duration: '6 months',
      status: 'Active',
      startDate: '01.03.2025',
      expectedYield: 12500
    },
    {
      id: '2',
      contractNumber: 'CF-2025-002',
      farmer: 'Marta Grün',
      crop: 'Raspberries',
      area: 1.8,
      duration: '4 months',
      status: 'Active',
      startDate: '15.03.2025',
      expectedYield: 7200
    },
    {
      id: '3',
      contractNumber: 'CF-2025-003',
      farmer: 'Hans Schneider',
      crop: 'Blueberries',
      area: 3.0,
      duration: '5 months',
      status: 'Registered',
      startDate: '01.05.2025',
      expectedYield: 15000
    },
    {
      id: '4',
      contractNumber: 'CF-2025-004',
      farmer: 'Lisa Wagner',
      crop: 'Blackberries',
      area: 1.5,
      duration: '4 months',
      status: 'Active',
      startDate: '20.03.2025',
      expectedYield: 6000
    },
    {
      id: '5',
      contractNumber: 'CF-2024-015',
      farmer: 'Klaus Hoffmann',
      crop: 'Strawberries',
      area: 2.0,
      duration: '6 months',
      status: 'Completed',
      startDate: '01.10.2024',
      expectedYield: 10000
    }
  ];

  constructor() { }

  // Getter methods
  getCurrentUser() {
    return this.currentUser;
  }

  getDashboardStats() {
    return this.dashboardStats;
  }

  getSalesOrders() {
    return this.salesOrders;
  }

  getPurchaseOrders() {
    return this.purchaseOrders;
  }

  getInventory() {
    return this.inventory;
  }

  getBatches() {
    return this.batches;
  }

  getCompliance() {
    return this.compliance;
  }

  getFarmPlots() {
    return this.farmPlots;
  }

  getContracts() {
    return this.contracts;
  }
}
