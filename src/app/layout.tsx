import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import TitleBar from "@/components/atoms/title-bar";
import UserProvider from "@/components/_auth/user-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankiety",
  description:
    "Aplikacja do tworzenia anonimowych ankiet internetowych do badań oraz wypełniania ankiet bez konieczności zakładania konta!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-full overflow-x-clip bg-sky-100 text-black`}
      >
        <UserProvider>
          {/* <nav className="absolute left-0 top-0 h-20 w-full">
            <TitleBar title={"Ankiety"} />
          </nav> */}
          <Navbar />
          <main className="h-screen pt-20">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
