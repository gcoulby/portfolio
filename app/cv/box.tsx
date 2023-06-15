import { Inter } from "next/font/google";
// import "@/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV | Graham Coulby",
  description: "Curriculum Vitae for Graham Coulby",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
