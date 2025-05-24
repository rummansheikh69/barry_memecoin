import "./globals.css";

export const metadata = {
  title: "BARRY",
  description: "Barry is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
