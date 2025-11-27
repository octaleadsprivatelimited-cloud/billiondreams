# GREAT Visa Network - Localhost Development

Professional website for GREAT Visa Network - Visa consultancy and recruitment agency.

## 🚀 Quick Start (Localhost Only)

### Prerequisites
- Node.js (v20.x)
- npm (v10.x)

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
cd ..
```

### Running the Application

#### Option 1: Development Mode (Recommended)
Run both server and client together:
```bash
npm run dev
```

This will start:
- **Client**: http://localhost:3000 (React dev server with hot reload)
- **Server**: http://localhost:3001 (Express API server)

#### Option 2: Client Only
Run just the React development server:
```bash
npm run client
```
Visit: http://localhost:3000

#### Option 3: Server Only
Run just the Express server:
```bash
npm run server
```
Visit: http://localhost:3001 (serves built React app)

#### Option 4: Production Mode (Localhost)
Build and serve the production version:
```bash
npm run build
npm start
```
Visit: http://localhost:3001

## 📁 Project Structure

```
GreatVisaNetwork/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── ...
│   ├── public/            # Static files
│   └── build/             # Production build
├── api/                   # API endpoint handlers
├── server.js              # Express server
└── package.json           # Root dependencies
```

## 🔧 Available Scripts

- `npm start` - Start production server (port 3001)
- `npm run dev` - Start both client and server in development mode
- `npm run client` - Start React dev server only (port 3000)
- `npm run server` - Start Express server only (port 3001)
- `npm run build` - Build client for production
- `npm test` - Run tests

## 🌐 Services

- Study Visa
- Work Visa
- Tourist Visa
- Family Visa
- Business Visa
- Immigration Consultation
- Job Placement
- Skill Assessment
- Document Attestation
- Visa Extension

## 📝 License

MIT

## 👤 Author

Octaleads Pvt Ltd
