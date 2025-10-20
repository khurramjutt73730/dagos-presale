# DAGOS Dashboard - Remittix-Inspired Design

## 🎯 Overview
A comprehensive, Remittix-inspired Web3 investor dashboard for DAGOS Token with both **Dark Mode** and **Light Mode** variants, featuring a modern fintech aesthetic with futuristic Web3 energy.

---

## 🎨 Design System

### Theme Variants

#### Dark Mode (Default)
- **Background**: `#0B0C10` (Deep black)
- **Primary Gradient**: Cyan (`#00FFF0`) to Violet (`#8A2BE2`)
- **Accent Colors**: Lime green for positive metrics, red for negative
- **Border/Glass**: White with 10% opacity
- **Text**: White with varying opacity levels

#### Light Mode
- **Background**: `#F8FAFF` (Off-white)
- **Primary Gradient**: Navy blue to Violet
- **Accent Colors**: Vibrant cyan, violet, lime
- **Border**: Gray-200
- **Text**: Gray-900 for primary, Gray-600 for secondary

### Typography
- **Font Family**: Space Grotesk, Inter (fallback: sans-serif)
- **Headings**: Medium weight (500)
- **Body**: Regular weight (400)
- **Responsive Scaling**: Automatic text sizing across breakpoints

---

## 📊 Components Library

### 1. **Top Navigation Bar**
**File**: `DashboardPage.tsx` (integrated)

**Features**:
- DAGOS logo with gradient background
- Navigation tabs: Dashboard | Pre-Sale | Referrals | Transactions
- Wallet address display with copy function
- Notification bell with badge indicator
- Theme toggle (Sun/Moon icon)
- Settings button
- Logout button
- **Mobile**: Collapsible hamburger menu

**Responsive Behavior**:
- Desktop (1440px+): Full horizontal layout
- Tablet (768px-1024px): Condensed with icons
- Mobile (< 768px): Hamburger menu with full-screen overlay

---

### 2. **Dashboard Overview Cards**
**File**: `DashboardOverviewCards.tsx`

**4 Cards**:
1. **Total DAGOS Purchased**
   - Icon: Wallet
   - Gradient: Cyan to Blue
   - Shows: Token amount with percentage change

2. **Referral Earnings**
   - Icon: Gift
   - Gradient: Violet to Purple
   - Shows: ETH earnings with growth percentage

3. **Wallet Balance**
   - Icon: TrendingUp
   - Gradient: Lime to Green
   - Shows: USD value with profit indicator

4. **Pre-Sale Progress**
   - Icon: Target
   - Feature: Animated circular progress bar
   - Shows: Percentage complete with raised/cap amounts

**Responsive Grid**:
- Desktop: 4 columns
- Tablet: 2x2 grid
- Mobile: Stacked vertically

---

### 3. **Investment Growth Chart**
**File**: `InvestmentGrowthChart.tsx`

**Features**:
- Area chart with gradient fill (Recharts library)
- Time range filters: 7D | 30D | 90D | All
- Custom tooltip showing:
  - Current value
  - Invested amount
  - Profit calculation
- Smooth animations on load
- Responsive height adjustment

**Visual Design**:
- Cyan stroke with gradient fill
- Minimal grid lines
- Hover interactions with data points
- Mobile-optimized legend

---

### 4. **Referral & Rewards Section**
**Files**: `ReferralCard.tsx`, `ReferralStats.tsx`

#### ReferralCard
- Unique referral code display
- Copy link button with success toast
- Social sharing: Twitter | Telegram
- 2% bonus badge for referrals
- 5% commission indicator

#### ReferralStats
- 4 stat cards: Total | Active | Earned | Pending
- Milestone progress bar with rewards
- Visual indicators for achieved milestones
- Animated progress with glow effects

**Mobile Optimization**:
- 2-column grid on mobile
- Stacked cards for better readability
- Touch-optimized share buttons

---

### 5. **Transaction History Table**
**File**: `TransactionHistoryTable.tsx`

**Features**:
- Filterable by type: All | Purchase | Referral | Claim
- Columns: Date | Type | Token Amount | Status | Transaction Hash
- Status badges: Completed (green) | Pending (yellow) | Failed (red)
- Export to CSV button
- Pagination controls
- External link to block explorer

**Mobile Cards View**:
- Switches to card layout on mobile
- Touch-friendly interactions
- Condensed information display

**Responsive Behavior**:
- Desktop: Full table view
- Mobile: Card-based list
- 5 items per page with pagination

---

### 6. **Pre-Sale Sidebar**
**File**: `PreSaleSidebar.tsx`

**Sections**:

#### Countdown Timer
- Days | Hours | Minutes display
- Real-time countdown (mockup)
- Gradient background with glassmorphism

#### Progress Visualization
- Horizontal animated progress bar
- Soft Cap marker (yellow line)
- Percentage completion indicator
- Amount raised vs. Hard Cap

#### Stats Grid
- Soft Cap vs. Hard Cap cards
- Current token price
- Total investors count
- Pre-sale status badge

#### Quick Actions
- "Buy More Tokens" CTA (gradient button)
- "View Whitepaper" link

**Sticky Behavior**: Remains visible on scroll (desktop)

---

## 📱 Responsive Layouts

### Desktop (1440px+)
- 12-column grid layout
- Main content: 9 columns
- Sidebar: 3 columns
- Full navigation bar with all items visible

### Tablet (768px - 1024px)
- 8-column grid
- Main content: 6 columns
- Sidebar: 2 columns (stacked below on smaller tablets)
- Condensed navigation

### Mobile (< 768px)
- Single column layout
- Cards stack vertically
- Hamburger menu for navigation
- Bottom safe area padding for iOS
- Touch-optimized buttons (min 44px height)

---

## 🎭 Theme Switching

### Implementation
```tsx
const [isDarkMode, setIsDarkMode] = useState(true);

// Toggle function
<button onClick={() => setIsDarkMode(!isDarkMode)}>
  {isDarkMode ? <Sun /> : <Moon />}
</button>
```

### Smooth Transitions
- 150ms cubic-bezier easing
- All colors, backgrounds, and borders transition
- No layout shift during theme change
- Persists user preference (can be enhanced with localStorage)

---

## 🚀 Performance Optimizations

### Lazy Loading
- Dashboard page lazy loaded via React.lazy()
- Suspense boundary with skeleton loader
- Code splitting for better initial load

### Animations
- Motion/React (Framer Motion) for smooth animations
- GPU-accelerated transforms
- Optimized re-renders with React.memo (where applicable)
- Staggered animations for card grids (0.1s delay)

### Image Optimization
- SVG icons (Lucide React) for crisp scaling
- Gradient backgrounds via CSS (no images)
- WebP format support for any future images

---

## 🔐 Security Features Integration

### Multi-Sig Badge & Panel
- Displayed in Investment page sidebar
- Shows 3/5 signature requirement
- Links to block explorer
- Expandable panel with signer details

### Wallet Connection
- MetaMask integration ready
- Wallet address display with truncation
- Copy-to-clipboard functionality
- Disconnect/logout option

---

## 🎯 Key User Flows

### 1. First-Time Visit
1. Landing on dashboard (wallet not connected)
2. "Connect Wallet" prompt with icon
3. Wallet connection modal (placeholder)
4. Dashboard loads with user data

### 2. Viewing Investment Performance
1. Navigate to Dashboard tab
2. View overview cards for quick stats
3. Scroll to Investment Growth Chart
4. Switch time ranges (7D, 30D, 90D, All)
5. Hover over chart for detailed tooltips

### 3. Managing Referrals
1. Click "Referrals" tab in navigation
2. View referral stats overview
3. Copy referral link
4. Share on social media (Twitter/Telegram)
5. Track milestone progress

### 4. Checking Transactions
1. Navigate to "Transactions" tab
2. Filter by type (All/Purchase/Referral/Claim)
3. Click transaction hash to view on explorer
4. Export data via Export button

---

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS 4.0** for styling
- **Motion/React** (Framer Motion) for animations
- **Recharts** for data visualization
- **Lucide React** for icons
- **Sonner** for toast notifications
- **ShadCN UI** components

---

## 📂 File Structure

```
/components/
├── DashboardOverviewCards.tsx      # 4 overview stat cards
├── InvestmentGrowthChart.tsx       # Area chart component
├── TransactionHistoryTable.tsx     # Filterable transaction table
├── PreSaleSidebar.tsx              # Right sidebar with pre-sale info
├── ReferralCard.tsx                # Referral link sharing card
├── ReferralStats.tsx               # Referral statistics display
├── PortfolioSummary.tsx            # Portfolio performance summary
├── MultiSigBadge.tsx               # Multi-sig security badge
├── MultiSigPanel.tsx               # Expandable multi-sig details
├── MobileNavBar.tsx                # Bottom mobile navigation
└── pages/
    └── DashboardPage.tsx           # Main dashboard page

/styles/
└── globals.css                     # Global styles + theme variables
```

---

## 🎨 Color Palette Reference

### Dark Mode
```css
--bg-primary: #0B0C10
--bg-secondary: #1A1D29
--text-primary: #FFFFFF
--text-secondary: rgba(255, 255, 255, 0.6)
--accent-cyan: #00FFF0
--accent-violet: #8A2BE2
--accent-lime: #A3FF12
--border: rgba(255, 255, 255, 0.1)
```

### Light Mode
```css
--bg-primary: #F8FAFF
--bg-secondary: #FFFFFF
--text-primary: #1A202C
--text-secondary: #718096
--accent-cyan: #0EA5E9
--accent-violet: #8B5CF6
--accent-lime: #84CC16
--border: #E2E8F0
```

---

## 🔄 Future Enhancements

1. **Real-time Data Integration**
   - Connect to blockchain APIs
   - Live price updates
   - WebSocket for transaction notifications

2. **Advanced Analytics**
   - Portfolio diversity charts
   - Historical performance comparisons
   - Predicted ROI calculator

3. **Enhanced Referral System**
   - QR code generation
   - Email invitations
   - Tiered reward system

4. **User Preferences**
   - Theme persistence (localStorage)
   - Custom dashboard layouts
   - Notification settings

5. **Multi-Wallet Support**
   - WalletConnect integration
   - Phantom wallet support
   - Trust Wallet compatibility

---

## ✅ Accessibility

- **WCAG 2.1 AA Compliant**
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast ratios
- Focus indicators on interactive elements
- Semantic HTML structure

---

## 📱 Browser Support

- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## 🎉 Credits

Inspired by Remittix Dashboard design principles with DAGOS branding and Web3 functionality.

Built with ❤️ for the DAGOS Token project.
