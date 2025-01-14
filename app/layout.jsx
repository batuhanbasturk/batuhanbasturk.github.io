import { Open_Sans, Anton, Black_Ops_One } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/Header";
import SlideFadeTransition from "@/components/SlideFadeTransition";
import { ThemeProvider } from "@/components/ThemeProvider";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-black-ops-one",
});

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Batuhan Baştürk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${anton.variable} ${blackOpsOne.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SlideFadeTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
