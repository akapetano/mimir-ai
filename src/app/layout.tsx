import "./globals.css";
import { Lato } from "next/font/google";
import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";

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
    <html lang="en" className="h-full">
      <body className="h-full">
        <main
          className={`h-full flex bg-slate-200 dark:bg-slate-800 ${lato.className}`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
