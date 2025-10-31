# Hyperflow

> *Decentralized Workflow Platform* - Build, automate, and scale your workflows on the blockchain. Experience the future of decentralized automation.

![Hyperflow](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Reown](https://img.shields.io/badge/Reown-AppKit-6366f1?logo=ethereum)

## 🌟 Overview

Hyperflow is a modern, decentralized workflow platform that leverages blockchain technology to provide secure, transparent, and automated workflow management. Built with Next.js and integrated with Reown AppKit for seamless wallet connectivity, Hyperflow enables users to create and manage decentralized workflows with ease.

## ✨ Features

- 🔐 *Secure Wallet Connection* - Seamless integration with Reown AppKit supporting multiple wallet providers
- 🚀 *Modern UI/UX* - Beautiful, responsive landing page built with Tailwind CSS
- ⚡ *Fast & Performant* - Built on Next.js 16 with React Server Components
- 🌐 *Multi-Chain Support* - Compatible with Ethereum Mainnet and Sepolia testnet
- 🎨 *Dark Mode* - Fully supports dark and light themes
- 📱 *Responsive Design* - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- A Reown Project ID (get one from [Reown Dashboard](https://dashboard.reown.com))

### Installation

1. *Clone the repository*

bash
git clone https://github.com/Gbangbolaoluwagbemiga/hyperflow-frontend.git
cd hyperflow-frontend


2. *Install dependencies*

bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install




3. **Run the development server**

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Project Structure


hyperflow-frontend/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page with wallet connect
│   ├── providers.tsx       # Wallet providers configuration
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .env.local              # Environment variables (not committed)
└── package.json           # Dependencies and scripts
```

## 🛠 Built With

- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Reown AppKit](https://reown.com/appkit)** - Wallet connection library
- **[Wagmi](https://wagmi.sh/)** - React Hooks for Ethereum
- **[Viem](https://viem.sh/)** - TypeScript Ethereum library
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

## 🔧 Available Scripts

- npm run dev - Start development server
- npm run build - Build for production
- npm run start - Start production server
- npm run lint - Run ESLint

## 🌐 Supported Networks

- *Ethereum Mainnet* - Production network
- *Sepolia* - Test network

## 🎯 Usage

### Connecting a Wallet

1. Click the "Connect Wallet" button on the landing page
2. Select your preferred wallet from the Reown modal
3. Approve the connection in your wallet
4. Once connected, your wallet address will be displayed

### Disconnecting

Click the "Disconnect" button to disconnect your wallet from the application.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
