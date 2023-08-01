import Header from "@/components/Feat/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psyhocon",
  description: "Psychocon web-site",
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
