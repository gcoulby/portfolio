import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Inter } from "next/font/google";
import "@/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Graham Coulby",
  description: "Home page for Graham Coulby",
  metadataBase: "http://grahamcoulby.co.uk/",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "http://grahamcoulby.co.uk/",
    title: "Graham Coulby",
    description: "Graham Coulby is a post-doc computer scientist who is interested in reserarch, IoT, embedded systems and full-stack development.",
    image: "/portfolio/img/apple-touch-icon.png",
    site_name: "Graham Coulby",
    imageWidth: 785,
    imageHeight: 411,
  },
  viewport: {
    width: "device-width",
    initialScale: 0.85,
  },

  manifest: "/portfolio/img/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
