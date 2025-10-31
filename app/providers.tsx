"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { useState } from "react";

// Get project ID from environment variable
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "";

if (!projectId) {
  console.warn(
    "NEXT_PUBLIC_REOWN_PROJECT_ID is not set in environment variables"
  );
}

// Create a metadata object
const metadata = {
  name: "Hyperflow",
  description: "Hyperflow - Decentralized Workflow Platform",
  url:
    typeof window !== "undefined"
      ? window.location.origin
      : "https://hyperflow.app",
  icons: [],
};

// Create Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, sepolia],
  projectId,
});

// Get Wagmi config from adapter
const wagmiConfig = wagmiAdapter.wagmiConfig;

// Create AppKit
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia],
  defaultNetwork: mainnet,
  metadata,
  projectId,
  features: {
    analytics: true,
    email: true,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
