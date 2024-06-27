import "./globals.css";
import Canvas from "@/components/Canvas";

export const metadata = {
  title: "tamim.dev()",
  description: "Tamim's Personal Portfolio for Web Design and Development",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/public/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Canvas children={children} />
      </body>
    </html>
  );
}
