import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudGuard Insurance | Coverage for Cloud Platform Suspensions",
  description: "Connect your business with specialized insurers offering coverage for cloud platform account suspensions and service disruptions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7be6def9-f917-430f-8720-74f52313d438"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
