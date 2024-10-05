import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Provider from "./Provider";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
