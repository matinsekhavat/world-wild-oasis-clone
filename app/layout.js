import { Inter } from "next/font/google";
// import "./_styles/globals.css";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - the wild oasis",
    defauld: "welcome - the wild oasis",
  },
  description:
    "Luxorious Hotels which loacted in the heart of Iran by beautiful mountains , beach and dark forest",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
