import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Instagram Clone using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
