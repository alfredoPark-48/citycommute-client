# 🚥 CityCommute Client

CityCommute is a high-fidelity React-based visualization engine for agent-based urban mobility simulations. It provides a real-time, glassmorphic dashboard to monitor and analyze workforce flow, public transit efficiency, and urban traffic patterns.

---

## 🚀 Overview

The CityCommute Client connects to the [CityCommute Server](https://github.com/alfredoPark-48/citycommute-server) via WebSockets to provide a smooth, low-latency visualization of the simulation state.

### Key Features
- **Real-time Visualization**: Hardware-accelerated rendering of agents (Cars, Buses, Pedestrians) and traffic lights.
- **Glassmorphic Dashboard**: Premium UI/UX providing live metrics on occupancy, trip completion, and agent frustration.
- **Dynamic Configuration**: Live-update simulation parameters like agent spawn rates directly from the UI.
- **Responsive Design**: Optimized for various screen sizes with a focus on data clarity.

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚦 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfredoPark-48/citycommute-client.git
   cd citycommute-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root:
   ```env
   VITE_API_URL=http://localhost:8000
   VITE_WS_URL=ws://localhost:8000/ws
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📦 Deployment

The project is configured for seamless deployment to **Cloudflare Pages** using Wrangler.

```bash
# Preview deployment
npm run preview

# Production deployment
npm run deploy
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
