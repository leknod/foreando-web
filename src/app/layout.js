import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { geistMono, geistSans } from "@/lib/fonts";

export const metadata = {
  title: {
    default: "Foreando | Directorio de foros y comunidades online en español",
    template: "%s | Foreando",
  },
  description:
    "Directorio de foros y comunidades online en español. Encuentra tu comunidad y conecta con personas que comparten tus intereses.",
  openGraph: {
    title: "Foreando | Directorio de foros y comunidades online en español",
    description:
      "Directorio de foros y comunidades online en español. Encuentra tu comunidad y conecta con personas que comparten tus intereses.",
    url: "https://foreando.com",
    siteName: "Foreando",
    images: [
      { url: "https://foreando.com/og-image.png", width: 1200, height: 630 },
    ],
  },
  alternates: {
    canonical: "https://foreando.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`bg-surface text-foreground ${geistSans.className} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
