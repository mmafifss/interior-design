import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Interior Design Solutions | Premium Home & Office Interiors",
    template: "%s | Interior Design Solutions",
  },
  description:
    "Transform your space with our professional interior design services. We create beautiful, functional homes and offices with modern designs tailored to your lifestyle and budget.",
  keywords: [
    "interior design",
    "home design",
    "office design",
    "interior decorator",
    "furniture",
    "modern interior",
    "home renovation",
  ],
  authors: [{ name: "Interior Design Solutions" }],
  creator: "Interior Design Solutions",
  publisher: "Interior Design Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // Ganti dengan domain Anda
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },
  openGraph: {
    title: "Interior Design Solutions | Premium Home & Office Interiors",
    description:
      "Transform your space with our professional interior design services. We create beautiful, functional homes and offices with modern designs tailored to your lifestyle and budget.",
    url: "https://your-domain.com", // Ganti dengan domain Anda
    siteName: "Interior Design Solutions",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Interior Design Solutions - Premium Home & Office Interiors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Solutions | Premium Home & Office Interiors",
    description:
      "Transform your space with our professional interior design services. We create beautiful, functional homes and offices.",
    images: ["/og-image.jpg"], // Pastikan file ini ada di folder public
    creator: "@your_twitter_handle", // Ganti dengan handle Twitter Anda
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
    google: "your-google-verification-code",
  },
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Viewport Meta Tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Interior Design Solutions",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/logo.png",
              description:
                "Professional interior design services for homes and offices",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "Your Postal Code",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-xxx-xxxx-xxxx",
                contactType: "Customer Service",
                availableLanguage: ["English", "Indonesian"],
              },
              sameAs: [
                "https://facebook.com/your-page",
                "https://instagram.com/your-page",
                "https://twitter.com/your-page",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        <main id="main-content">{children}</main>

        {/* Google Analytics - Ganti dengan tracking ID Anda */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'GA_TRACKING_ID');
                    `,
          }}
        />
      </body>
    </html>
  );
}

export default RootLayout;
