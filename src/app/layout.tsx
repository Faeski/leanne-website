import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Navigation, Footer, BookingCTA } from "@/components/layout";
import { CookieConsent, GoogleAnalytics } from "@/components/integrations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://instituutleanne.be"),
  title: {
    default: "Instituut Leanne | Premium Huidgezondheid in Lanaken",
    template: "%s | Instituut Leanne",
  },
  description:
    "Gecertificeerde huidexpert in Lanaken, België. Environ anti-aging, Me-Line pigmentbehandeling, iCoone lichaamscontouring en professionele laserontharing. Boek uw gratis huidanalyse.",
  keywords: [
    "huidgezondheid",
    "schoonheidsinstituut Lanaken",
    "Environ behandeling",
    "pigmentbehandeling Maastricht",
    "laserontharing",
    "iCoone",
    "huidverbetering",
    "anti-aging",
  ],
  authors: [{ name: "Instituut Leanne" }],
  creator: "Instituut Leanne",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://instituutleanne.be",
    siteName: "Instituut Leanne",
    title: "Instituut Leanne | Premium Huidgezondheid in Lanaken",
    description:
      "Gecertificeerde huidexpert in Lanaken. Environ, Me-Line, iCoone en laserontharing. Boek uw gratis huidanalyse.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instituut Leanne - Premium Huidgezondheid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituut Leanne | Premium Huidgezondheid",
    description:
      "Gecertificeerde huidexpert in Lanaken. Environ, Me-Line, iCoone en laserontharing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-BE" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BookingCTA variant="floating" />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
