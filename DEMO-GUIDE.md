# 🌿 Predora.ai Demo Guide

## Quick Start

The application is now running at: **http://localhost:4200**

## Demo Walkthrough

### 1. Login Screen
- **Credentials**: `demo@predora.ai` / `demo`
- Features Predora.ai branding with green theme
- Click "Sign In to Dashboard" to access the system

### 2. Dashboard (First View After Login)
- **KPIs**: 1,247 orders, €385,420 inventory value, 3 compliance alerts, 18 active contracts
- **Sales Trends Chart**: Monthly bar chart showing growth
- **Inventory Distribution**: Pie chart breakdown by crop type
- **Quick Actions**: Links to create orders and track batches
- **Recent Activity**: Latest sales orders and compliance status

### 3. Sales Module (💰 Icon)
- View all 6 sales orders
- Filter by status: All, Draft, Confirmed, Delivered
- German customers: Obsthandel Müller, Fruchtgroßhandel Schmidt, Bio-Markt Weber
- Total value: €115,900

### 4. Purchase Module (🛒 Icon)
- 5 purchase orders from local vendors
- Filter by status: Requested, Approved, Received
- Vendors: Beerenhof Schmidt, Landgut Weber, AgriTech Deutschland
- Total value: €58,400

### 5. Inventory Module (📦 Icon)
- 6 inventory items tracked
- Stock levels: Strawberries (1,250 kg), Raspberries (850 kg), Blueberries (620 kg)
- Warehouses: Main Cold Storage, Packing Shed, Storage Unit A
- Low stock alerts highlighted in orange
- Total inventory value: €139,870

### 6. Traceability Module (🔍 Icon)
- 5 batch records with full tracking
- **Featured Batch**: BATCH-2025-STR-001
- Timeline view shows: Harvest → Processing → Cold Storage → Delivery
- Compliance badges: GlobalG.A.P., QS Certified, EU Organic, HACCP

### 7. Compliance Module (✅ Icon)
- 5 EU agricultural standards tracked
- **Compliant**: GlobalG.A.P., QS Certification, HACCP (3 standards)
- **Pending**: EU Organic Regulation
- **Missing**: IFS Food Standard
- Document upload system
- Upcoming audits calendar

### 8. Farm Profile Module (🌾 Icon)
- **Farm**: Obsthof Bauer
- **Total Area**: 13.5 hectares
- **Visual Map**: Interactive farm layout with color-coded plots
  - Plot A: Strawberries (5.5 ha) - Pink
  - Plot B: Raspberries (3.2 ha) - Orange
  - Plot C: Blueberries (4.8 ha) - Blue
- **Infrastructure**: North Packing Unit, Cold Room 1, Storage Unit A
- **Tree Encoding**: 30,450 plants geo-tagged across all plots

### 9. Contract Farming Module (📝 Icon)
- 5 contracts with local farmers
- **Active Farmers**: Johann Keller, Marta Grün, Lisa Wagner
- **Registered**: Hans Schneider
- **Completed**: Klaus Hoffmann
- Contract lifecycle tracker (5 stages)
- Input distribution progress: Seeds (100%), Fertilizers (75%), Equipment (30%)
- Total contracted area: 11 hectares
- Expected yield: 50,700 kg

## Navigation

- **Top Navigation Bar**: Access all 9 modules
- **User Profile**: Shows "Anna Bauer - Admin" in top right
- **Predora.ai Logo**: Always visible with green gradient background
- **Active Module**: Highlighted in lighter green

## Key Features to Showcase

### Visual Design
- ✅ Clean, modern green theme (shades of #4CAF50)
- ✅ Card-based layouts with subtle shadows
- ✅ Smooth transitions and hover effects
- ✅ Emoji icons for quick recognition
- ✅ Responsive tables and grids

### German Context
- ✅ German business names (Obsthandel, Großhandel, Bio-Markt)
- ✅ German farmer names (Johann, Marta, Hans, Lisa, Klaus)
- ✅ EUR currency (€) throughout
- ✅ DD.MM.YYYY date format
- ✅ European locations and compliance standards

### Domain-Specific Features
- ✅ Crop types: Strawberries, Raspberries, Blueberries, Blackberries
- ✅ Cold chain management
- ✅ Farm infrastructure visualization
- ✅ Batch traceability from field to customer
- ✅ EU compliance standards (GlobalG.A.P., QS, HACCP)
- ✅ Contract farming workflow

## Technical Implementation

- **Framework**: Angular 19 (Standalone Components)
- **Styling**: Custom SCSS with CSS variables
- **Routing**: Angular Router with lazy loading
- **Data**: Mock service with realistic German sample data
- **State Management**: Service-based architecture
- **Components**: 9 feature modules + navigation + shared services

## Sample Data Summary

| Module | Count | Details |
|--------|-------|---------|
| Sales Orders | 6 | €115,900 total |
| Purchase Orders | 5 | €58,400 total |
| Inventory Items | 6 | €139,870 value |
| Batches | 5 | Full traceability |
| Compliance Standards | 5 | EU regulations |
| Farm Plots | 3 | 13.5 ha total |
| Contracts | 5 | 4 active farmers |

## Pre-Sales Tips

1. **Start with Login**: Show professional branding
2. **Dashboard First**: Demonstrate comprehensive overview
3. **Highlight Traceability**: Key differentiator for EU market
4. **Show Farm Map**: Visual appeal for farm management
5. **Emphasize Compliance**: Critical for German clients
6. **Contract Farming**: Unique value proposition

## Browser Support

- Chrome/Edge: ✅ Recommended
- Firefox: ✅ Fully supported
- Safari: ✅ Supported
- Desktop: ✅ Optimized for 16:9
- Mobile: ⚠️ Basic support (demo is desktop-first)

## Next Steps for Production

- [ ] Add .NET Core backend API
- [ ] Implement real authentication
- [ ] Connect to SQL Server/PostgreSQL database
- [ ] Add report generation (PDF/Excel)
- [ ] Integrate with accounting systems
- [ ] Add mobile app support
- [ ] Implement multi-language support (German/English)
- [ ] Add real-time notifications
- [ ] Integrate weather API for farming insights
- [ ] Add payment gateway integration

---

**Ready for Demo!** 🎉

Use credentials: `demo@predora.ai` / `demo`
