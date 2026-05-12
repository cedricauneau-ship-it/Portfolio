import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Servir AVIF en priorité, fallback WebP — pour les <Image> de next/image
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Tree-shaking ciblé : importer { Icon } from "lucide-react" ne tire que l'icône
  // au lieu du pack entier (gain ~50-100 Ko de bundle initial).
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
