"use client";
import Header from "@/components/Feat/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import useModal from "@/hooks/UseModal";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";
import Navbar from "@/components/Feat/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psyhocon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <main>
          <Header />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
