import "./globals.css";
import { Lato } from "next/font/google";
import { Header } from "@/components/shared/Header/Header";

export const metadata = {
  title: "MimirAI",
  description: "Learning App with MimirAI",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-full bg-black ${lato.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
