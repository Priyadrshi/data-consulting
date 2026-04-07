import "./globals.css";

export const metadata = {
  title: "Premium Data Consulting",
  description: "Data Analytics & Engineering for US Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
