import "./globals.css";

export const metadata = {
  title: "Forever in Our Hearts",
  description:
    "A warm memorial dedicated to a beloved princess and the memories shared together.",
  keywords: [
    "pet memorial",
    "cat memorial",
    "pet tribute",
    "cat remembrance"
  ],
  authors: [
    {
      name: "Pet Memorial"
    }
  ],
  openGraph: {
    title: "Forever in Our Hearts",
    description:
      "A personal memorial celebrating a beloved cat's life and memories.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}