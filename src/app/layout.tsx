import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoodMate - Intelligent AI Friend",
  description: "Experience emotional wellness through AI-powered mood detection, personalized recommendations, and compassionate companionship.",
  keywords: ["MoodMate", "AI", "Emotional Wellness", "Mood Tracking", "Mental Health", "AI Companion"],
  authors: [{ name: "MoodMate Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MoodMate-Intelligent AI Friend",
    description: "AI-powered emotional wellness companion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoodMate-Intelligent AI Friend",
    description: "AI-powered emotional wellness companion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
