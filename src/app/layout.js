import Header from "@/components/Feat/Header";
import "../globals.css";
import Footer from "@/components/Footer/Footer";

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
