import { DM_Sans } from "next/font/google";

import "@styles/globals.css";

export const metadata = {
  title: "Matheus Santos' Portfolio",
};

const DMSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${DMSans.variable}`}>
      <body className="flex flex-col min-h-full bg-zinc-950 text-gray-300">
        {children}
      </body>
    </html>
  );
}
