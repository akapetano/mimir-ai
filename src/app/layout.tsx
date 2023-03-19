import "./globals.css";

export const metadata = {
  title: "MimirAI",
  description: "Learning App with MimirAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
