# 🌿 Predora.ai - Agriculture ERP Demo

A modern, clickable web demo for Predora.ai, a SaaS ERP product inspired by ERPNext, tailored for the European fruit and berry farming sector with a focus on German clients.

## 🎯 Overview

This demo showcases a comprehensive ERP solution designed specifically for agriculture operations, featuring:
- Modern, aesthetic UI with green theme
- Realistic German sample data
- 9 fully functional modules
- Desktop-optimized (16:9 aspect ratio)

## 📋 Modules

### 1. **Login Page**
- Clean Predora.ai branding
- Demo credentials: `demo@predora.ai` / `demo`

### 2. **Admin Dashboard**
- KPIs: Total Orders, Inventory Value, Compliance Alerts, Active Contracts
- Interactive charts for sales trends and inventory distribution
- Quick action links
- Recent activity overview

### 3. **Sales Module**
- Sales orders list with filtering
- Customer management (German businesses)
- Order statuses: Draft, Confirmed, Delivered
- Sample customers: Obsthandel Müller, Fruchtgroßhandel Schmidt, etc.

### 4. **Purchase Module**
- Purchase orders management
- Vendor tracking
- PO statuses: Requested, Approved, Received
- Sample vendors: Beerenhof Schmidt, Landgut Weber, etc.

### 5. **Inventory Module**
- Stock ledger with real-time tracking
- Item master (Strawberries, Raspberries, Blueberries, etc.)
- Warehouse locations: Main Cold Storage, Packing Shed, Storage Unit A
- Low stock alerts

### 6. **Traceability Module**
- Batch tracking from supplier to customer
- Interactive timeline view: Harvest → Processing → Cold Storage → Delivery
- Sample batch: BATCH-2025-STR-001
- Full compliance badge display

### 7. **Compliance Module**
- EU agricultural standards checklist
- Sample audits: GlobalG.A.P., QS Certification, EU Organic, HACCP, IFS
- Document upload placeholders
- Upcoming audit calendar

### 8. **Farm Profile Module**
- Visual farm layout map
- Land parcels management: Plot A (Strawberries), Plot B (Raspberries), Plot C (Blueberries)
- Infrastructure tracking: Packhouse (North Packing Unit), Cold Storage (Cold Room 1)
- Tree encoding and geo-tagging
- Total farm area: 13.5 hectares

### 9. **Contract Farming Module**
- Farmer registration and management
- Contract lifecycle tracker
- Input distribution tracking
- Sample farmers: Johann Keller, Marta Grün, Hans Schneider, Lisa Wagner
- Contract statuses: Registered, Active, Completed

## 🛠️ Tech Stack

- **Frontend**: Angular 19.2.0
- **Styling**: SCSS with custom green-themed variables
- **Data**: Mock data service with German business context
- **Routing**: Angular Router for seamless navigation
- **Icons**: Emoji-based for quick prototyping

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Access the Demo

1. Open browser to `http://localhost:4200`
2. You'll be redirected to the login page
3. Use demo credentials: `demo@predora.ai` / `demo`
4. Explore all 9 modules via the navigation bar

## 🎨 Design Features

- **Color Scheme**: Light green with white backgrounds and soft gray accents
- **Typography**: Clean sans-serif fonts (Inter, Roboto)
- **Layout**: Card-based sections, collapsible menus, responsive grid
- **Currency**: EUR (€)
- **Date Format**: DD.MM.YYYY (German standard)

## 📊 Sample Data Highlights

- **6 Sales Orders** totaling €115,900
- **5 Purchase Orders** totaling €58,400
- **6 Inventory Items** valued at €139,870
- **5 Traceability Batches**
- **5 Compliance Standards** tracked
- **3 Farm Plots** covering 13.5 hectares
- **5 Active Contracts** with local farmers

## 🌍 Localization

- All screens in English
- German business names and locations
- European farming terminology
- EUR currency throughout
- DD.MM.YYYY date format

## 📝 Demo Notes

This is a **demo-only version** of Predora.ai:
- No authentication backend
- Mock data only (no database)
- Static demo suitable for pre-sales presentations
- Focus on visual clarity and navigation flow

## 🎯 Target Audience

German fruit and berry farmers and distributors in the European market, including:
- Obsthandel (Fruit Trading Companies)
- Bio-Märkte (Organic Markets)
- Großhändler (Wholesalers)
- Regional retailers (Edeka, Rewe, Kaufland)

## 📧 Contact

For more information about Predora.ai, contact: **anna.bauer@predora.ai**

---

**Built with** ❤️ **for European Agriculture**
