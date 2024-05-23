import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";
import { Josefin_Sans } from "next/font/google";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";

//fonts
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// MetaData
export const metadata = {
  title: {
    template: "%s - the wild oasis",
    default: "welcome - the wild oasis",
  },
  description:
    "Luxorious Hotels which loacted in the heart of Iran by beautiful mountains , beach and dark forest",
  // icons: {
  //   icon: "/logo.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
