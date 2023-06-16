import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Inter } from "next/font/google";
import "@/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Graham Coulby",
  description: "Home page for Graham Coulby",
  favicon: "/img/favicon.ico",
  metadataBase: "http://grahamcoulby.co.uk/",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "http://grahamcoulby.co.uk/",
    title: "Graham Coulby",
    description: "Graham Coulby is a post-doc computer scientist who is interested in reserarch, IoT, embedded systems and full-stack development.",
    image: "/img/apple-touch-icon.png",
    site_name: "Graham Coulby",
    imageWidth: 785,
    imageHeight: 411,
  },
  icons: {
    icon: "/img/favicon-32x32.png",
    shortcut: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
    appleTouch: "/img/apple-touch-icon.png",
    android: "/img/android-chrome-192x192.png",
    ms: "/img/mstile-150x150.png",
    safari: "/img/safari-pinned-tab.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 0.85,
  },

  manifest: "/img/site.webmanifest",
  icon: "/img/favicon-32x32.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
