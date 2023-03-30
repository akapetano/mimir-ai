import "./globals.css";
import { Lato } from "next/font/google";

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
      <body>
        <main className={`bg-slate-100 dark:bg-slate-800 ${lato.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
